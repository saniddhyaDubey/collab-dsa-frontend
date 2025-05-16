"use client";

import LoginForm from '@/components/LoginForm';
import Link from 'next/link';
import GitHubLogin from '@/components/GithubLogin';

export default function Home() {
  
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-5xl font-bold text-green-400 mb-4">CollabDSA</h1>
        <p className="text-lg text-gray-300 max-w-md text-center">
          Collaborate. Code. Compete. Learn faster with your peers.
        </p>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm space-y-4">
          <LoginForm />
          <a href="#" className="text-sm text-blue-400 text-center block">Forgot password?</a>
          <hr className="border-gray-600" />
          <Link href="/register">
            <button className="w-full p-3 mt-3 bg-green-600 hover:bg-green-700 rounded font-semibold">
              Register
            </button>
          </Link>
          <GitHubLogin />
        </div>
      </div>
    </div>

  );
}
