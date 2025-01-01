import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'password', placeholder: 'Password' }
            }, 
            async authorize(credentials: any) {
                console.log(credentials);
                // validation
                return {
                    id: "user1",
                    email: "rohitpithani@gmail.com",
                    name: "Rohit Pithani"
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token, user }: any) => {
            console.log(session)
            if(session && session.user) {
                session.user.id = token.sub; //token.sub
            }
            return session;
        }
    },
    pages: {
        signIn: "/signin" 
    }
}