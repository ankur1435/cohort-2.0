import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Rate limiter configuration
const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again in 5 minutes',
    standardHeaders: true, // Return rate limit info in the ' RateLimit=*' headers
    legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset requests, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});

// Store OTPs in a single in-memory object
const otpStore: Record<string, string> = {};

// Endpoint to generate and log OTP 
app.post('/generate-otp', otpLimiter, (req, res) => {
    const email = req.body.email;
    if (!email) {
        res.status(400).json({ message: "Email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;

    // should send an email here
    console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
    res.status(200).json({ message: "OTP generated and logged" });
});

// Endpoint to reset password
app.post('/reset-password', passwordResetLimiter, async (req, res) => {
    const { email, otp, newPassword, token } = req.body;
    if (!email || !otp || !newPassword) {
        res.status(400).json({ message: "Email, OTP, and new password are required" });
    }
    // Verify Turnstile token
    let formData = new FormData();
    formData.append('secret', process.env.CLOUDFLARE_SECRET || '');
    formData.append('response', token);
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, { body: formData, method: 'POST' });
    const verification = await result.json();
    console.log(verification);
    if (!verification.success) {
        res.status(403).json({ message: "Captcha verification failed" });
    }
    // Validate OTP
    if (otpStore[email] !== otp) {
        res.status(401).json({ message: "Invalid OTP" });
    }
    // Successfully reset password
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email]; // Clear OTP after use
    res.status(200).json({ message: "Password has been reset successfully" });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});