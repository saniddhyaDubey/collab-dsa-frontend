// #Made this a server-side, to make it protected by checking user's data(for either logins)
// #if valid - allow further login!
// #else - redirect to home page!

import Dashboard from "@/components/Dashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if(!session) redirect("/");

    return <Dashboard />;
}
