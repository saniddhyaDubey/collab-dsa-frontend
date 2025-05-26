'use client';
import { useState } from 'react';

export default function Dashboardcontent() {
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState<'create' | 'join'>('create');

  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedRoomName = roomName.trim();
    if (!trimmedRoomName) {
      alert('Room name is required');
      return;
    }

    const payload = {
      roomName: trimmedRoomName,
      password,
      ...(mode === 'create' ? { description } : {}),
    };

    console.log(payload);

    // Reset state
    setRoomName('');
    setPassword('');
    setDescription('');
    setShowModal(false);
  };

  const handleOpenModal = (selectedMode: 'create' | 'join') => {
    setMode(selectedMode);
    setShowModal(true);
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 flex items-center justify-center px-4 text-white relative ${
        showModal ? 'backdrop-blur-sm' : ''
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full z-10">
        <div className="bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center aspect-square p-6 text-center space-y-4">
          <button
            onClick={() => handleOpenModal('create')}
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Create Room
          </button>
          <p className="text-sm text-gray-400 max-w-xs">
            Start a new coding session and invite others to join. You'll be the host of the room.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center aspect-square p-6 text-center space-y-4">
          <button
            onClick={() => handleOpenModal('join')}
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Join Room
          </button>
          <p className="text-sm text-gray-400 max-w-xs">
            Enter a room name to collaborate in an existing coding session.
          </p>
        </div>
      </div>

      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md relative space-y-4 shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-center text-white">
              {mode === 'create' ? 'Create a New Room' : 'Join a Room'}
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">
                  Room Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter room name"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  Password {mode === 'join' && <span className="text-gray-400">(if any)</span>}
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                />
              </div>

              {mode === 'create' && (
                <div>
                  <label className="block text-sm mb-1">Description</label>
                  <textarea
                    placeholder="Brief description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none resize-none"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
              >
                {mode === 'create' ? 'Create Room' : 'Join Room'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
