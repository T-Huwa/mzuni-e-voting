import React, { useState } from 'react';
import { IconUserPlus, IconUsers } from '@tabler/icons-react';
import CandidateCard from '../Components/CandidateCard';
import CreateCandidateModal from '../Components/CreateCandidateModal';

const initialCandidates = {
  'Software Development': [
    { id: 1, name: 'John Doe', skills: ['JavaScript', 'React', 'Node.js'], votes: 15, imageId: 'zluzdqj' },
    { id: 2, name: 'Jane Smith', skills: ['Python', 'Django', 'PostgreSQL'], votes: 12, imageId: 'k4m7zwp' },
  ],
  'Data Science': [
    { id: 3, name: 'Bob Johnson', skills: ['Python', 'Machine Learning', 'SQL'], votes: 8, imageId: 'mt2mwwx' },
  ],
  'Design': [
    { id: 4, name: 'Alice Brown', skills: ['UI/UX', 'Figma', 'Adobe XD'], votes: 20, imageId: 'f9pmyun' },
  ],
};

export default function Candidates() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCandidate = (newCandidate) => {
    const candidateWithDefaults = {
      ...newCandidate,
      id: Date.now(),
      votes: 0,
      imageId: 'mt2mwwx',
    };
    setCandidates(prevCandidates => ({
      ...prevCandidates,
      [candidateWithDefaults.category]: [...(prevCandidates[candidateWithDefaults.category] || []), candidateWithDefaults]
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Registered Candidates</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <IconUserPlus className="mr-2" />
          Add Candidate
        </button>
      </div>

      {Object.entries(candidates).map(([category, categoryCandidates]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
            <IconUsers className="mr-2" />
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCandidates.map(candidate => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      ))}

      <CreateCandidateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCandidate={handleAddCandidate}
      />
    </div>
  );
}

