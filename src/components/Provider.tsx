"use client"; // #Mark this file as a Client Component so it can use React context/hooks

// #Import the SessionProvider from NextAuth to provide session context to the entire app
import { SessionProvider } from "next-auth/react";

// #This Providers component wraps all client-side context providers your app might need.
// #Currently, it only wraps SessionProvider, but you can add more (like ThemeProvider, etc.)
export function Providers({ children }: { children: React.ReactNode }) {
    // #SessionProvider makes session (user) data available to all components using `useSession()`
    return <SessionProvider>{children}</SessionProvider>;
}
