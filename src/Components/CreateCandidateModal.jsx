import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react';

export default function CreateCandidateModal({ isOpen, onClose, onAddCandidate }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCandidate = {
      id: Date.now(),
      name,
      position,
      votes: 0, // Initialize with 0 votes
    };
    onAddCandidate(newCandidate);
    setName('');
    setPosition('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Add New Candidate</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <IconX />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter candidate's name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">
              Position
            </label>
            <select
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select a position</option>
              <option value="President">President</option>
              <option value="Vice President">Vice President</option>
              <option value="Secretary">Secretary</option>
              <option value="Treasurer">Treasurer</option>
            </select>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
