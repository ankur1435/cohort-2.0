import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const userMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return res.status(401).json({ error: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const docoded = jwt.verify(token, process.env.JWT_SECRET as string);
    if (!docoded) return res.status(401).json({ error: 'Invalid token' });

    req.body.email = docoded;
    next();
  } catch (error) {
    throw error;
  }
};

export default userMiddleware;
