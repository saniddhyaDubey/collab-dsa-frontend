import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = NextAuth({
    // #JWT token is created directly via NextAuth once it receives user data:
    session: {
        strategy: "jwt",
    },
    providers: [
        // #Custom credentials provider signIn functionality - register is not handled here:
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                await dbConnect();
                const user = await User.findOne({email: credentials?.email});
                if(!credentials?.password || !user) return null;
                const verifiedPassword = await bcrypt.compare(credentials.password, user.password);
                if(!verifiedPassword) return null;

                return {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                };
            }
        }),

        // #GitHUb provider signIn functionaltiy
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,        // #TypeScript non-null assertion (!) - "I'm sure the value is present"
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ]
});

// #GET is also necessary, because nextJS pass multiple request (CSRF, session, etc)
export { authOptions as GET, authOptions as POST };
