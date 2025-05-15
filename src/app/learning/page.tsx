'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LearningPage() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Welcome to CollabDSA!',
      content: (
        <>
          <p className="text-center text-gray-300">
            Here’s a quick guide to help you get started:
          </p>

          <div className="space-y-3 text-sm text-gray-300 mt-4">
            <div className="bg-gray-700 p-4 rounded">
              <p><span className="text-green-400 font-semibold">👥 Pair Programming:</span> Work in real-time with your peers and solve problems together.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p><span className="text-green-400 font-semibold">🧠 DSA Challenges:</span> Solve curated problems similar to LeetCode with collaborative features.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p><span className="text-green-400 font-semibold">🎨 Color-Coded Code:</span> Each user's code appears in a unique color for clarity.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p><span className="text-green-400 font-semibold">🏆 Compete:</span> Engage in friendly competition or practice rounds with peers.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Create a Room',
      content: 'Click on "Create Room" to start a new collaborative session. You’ll be the host and can invite others.',
    },
    {
      title: 'Join a Room',
      content: 'Use a room code to join your friend’s session. Collaborate, code, and solve problems together!',
    },
    {
      title: 'Begin Coding',
      content: 'You’re all set! Start practicing questions. Your code will appear in a unique color to distinguish your contributions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md shadow-lg space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-2">{steps[step].title}</h2>
          <div className="text-gray-300 text-sm">{steps[step].content}</div>
        </div>

        <div className="flex justify-between space-x-4">
          {step > 0 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="w-1/2 bg-gray-700 hover:bg-gray-600 p-3 rounded font-semibold"
            >
              Back
            </button>
          ) : (
            <div className="w-1/2" />
          )}

          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="w-1/2 bg-green-600 hover:bg-green-700 p-3 rounded font-semibold"
            >
              Next
            </button>
          ) : (
            <Link href="/" className="w-full block">
              <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold">
                Login and Collaborate with your Friends
              </button>
              </Link>
          )}
        </div>
      </div>
    </div>
  );
}
