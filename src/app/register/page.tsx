import Link from 'next/link'

export default function Register() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
            <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md shadow-lg space-y-4">
                <h2 className="text-2xl font-bold text-center text-green-400">Create your CollabDSA Account</h2>
                <div className="flex space-x-2">
                    <input type="text" placeholder="First name" className="w-1/2 p-3 rounded bg-gray-700" />
                    <input type="text" placeholder="Last name" className="w-1/2 p-3 rounded bg-gray-700" />
                </div>
                <input type="email" placeholder="Email address" className="w-full p-3 rounded bg-gray-700" />
                <input type="password" placeholder="New password" className="w-full p-3 rounded bg-gray-700" />
                <div>
                    <label className="block mb-1 text-sm">Select Role</label>
                    <div className="flex space-x-4">
                        <label><input type="radio" name="role" className="mr-1" />Student</label>
                        <label><input type="radio" name="role" className="mr-1" />Instructor</label>
                    </div>
                </div>
                
                <button className="w-full bg-green-600 hover:bg-green-700 p-3 rounded font-semibold">Sign Up</button>
                
                <p className="text-center text-sm text-gray-400">Already have an account? <Link href="/" className="text-blue-400">Log In</Link></p>
            </div>
        </div>

    );
}
