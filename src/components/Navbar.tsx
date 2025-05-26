"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Navbar() {
    // #Accessing user's data - only github's login is properly setup!
    const { data: session } = useSession();
    return (
        <div className="w-full bg-gray-800 text-white px-6 py-4 flex justify-between items-center relative">
            <Link href="/" className="text-xl font-bold">collabDSA</Link>
            <div className="relative group">
                {session?.user?.image ? (
                    <img
                        src={session.user.image}
                        alt="Profile"
                        className="w-10 h-10 rounded-full cursor-pointer object-cover"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-600 cursor-pointer" />
                )}
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-50">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 font-medium flex items-center space-x-2">
                            <span className="text-gray-500">Profile:</span>
                            <span className="text-gray-900 font-semibold">{session?.user?.name}</span>
                        </li>

                        <li onClick={() => signOut({ callbackUrl: "/" })} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
