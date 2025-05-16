"use client";

import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export default function LoginForm() {
    // #Same functionality from register(page.tsx), just for login:
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: any) => {
        const response = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
                {...register("email")}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                placeholder="email"
            />
            {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
            <input
                {...register("password")}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
                placeholder="password"
            />
            {errors.password && (
                <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
            <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold">
                Log In
            </button>
        </form>
    );
}
