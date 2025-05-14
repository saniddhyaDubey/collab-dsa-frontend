import Link from 'next/link'

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
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold">
            Log In
          </button>
          <a href="#" className="text-sm text-blue-400 text-center block">Forgot password?</a>
          <hr className="border-gray-600" />
          <Link href="/register">
            <button className="w-full p-3 mt-3 bg-green-600 hover:bg-green-700 rounded font-semibold">
              Register
            </button>
          </Link>
          <button className="w-full bg-gray-700 hover:bg-gray-600 mt-3 p-3 rounded font-semibold flex items-center justify-center space-x-2">
            <span>Connect with GitHub</span>
          </button>
        </div>
      </div>
    </div>

  );
}
