"use client";

import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from '@/schemas/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Register() {
    // #Using Router from next/navigation - suited for App based routing
    const router = useRouter()

    // #React Form Hook Setup with Zod schema using zodResolver
    const { register, handleSubmit, formState: {errors} } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    });

    // #Handler function after submitting data - only called if the data validation is true else erros are filled:
    const onSubmit = async (data: any)=>{
        const response = await axios.post("/api/register", data);
        console.log("response: ", response);
        router.push("/");

    };
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
            <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-center text-green-400">Create your CollabDSA Account</h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex space-x-2">
                        <input {...register("firstName")} placeholder="First name" className="w-1/2 p-3 rounded bg-gray-700" />
                        {errors.firstName && (
                            <p className="text-red-400 text-sm">{errors.firstName.message}</p>
                        )}
                        <input {...register("lastName")} placeholder="Last name" className="w-1/2 p-3 rounded bg-gray-700" />
                        {errors.lastName && (
                            <p className="text-red-400 text-sm">{errors.lastName.message}</p>
                        )}
                    </div>
                    <input {...register("email")} placeholder="Email address" className="w-full p-3 rounded bg-gray-700" />
                    {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                    <input {...register("password")} placeholder="New password" className="w-full p-3 rounded bg-gray-700" />
                    {errors.password && (
                        <p className="text-red-400 text-sm">{errors.password.message}</p>
                    )}
                    <button className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold">Sign Up</button>
                </form>
                <p className="text-center text-sm text-gray-400">Already have an account? <Link href="/" className="text-blue-400">Log In</Link></p>
            </div>
        </div>

    );
}
