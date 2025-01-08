import React, { useState } from 'react';
import { IconUserPlus, IconUsers } from '@tabler/icons-react';
import CandidateCard from '../../Components/CandidateCard';
import CreateCandidateModal from '../../Components/CreateCandidateModal';

const candidates = [
  { id: 1, name: 'Chimwemwe Banda', position: 'President', image: 'https://picsum.photos/100', votes: 15 },
  { id: 2, name: 'Thandiwe Moyo', position: 'President', image: 'https://picsum.photos/100', votes: 12 },
  { id: 3, name: 'Dalitso Phiri', position: 'President', image: 'https://picsum.photos/100', votes: 8 },
  { id: 4, name: 'Limbani Nkhoma', position: 'Vice President', image: 'https://picsum.photos/100', votes: 10 },
  { id: 5, name: 'Zikomo Chirwa', position: 'Vice President', image: 'https://picsum.photos/100', votes: 6 },
  { id: 6, name: 'Tawonga Gondwe', position: 'Vice President', image: 'https://picsum.photos/100', votes: 7 },
  { id: 7, name: 'Ethel Mwale', position: 'Secretary', image: 'https://picsum.photos/100', votes: 25 },
  { id: 8, name: 'Gift Kamanga', position: 'Secretary', image: 'https://picsum.photos/100', votes: 19 },
  { id: 9, name: 'Faith Chilima', position: 'Secretary', image: 'https://picsum.photos/100', votes: 12 },
];

export default function Candidates() {
  const [candidateData, setCandidateData] = useState(candidates);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCandidate = (newCandidate) => {
    const candidateWithDefaults = {
      ...newCandidate,
      id: Date.now(),
      votes: 0,
      image: 'https://picsum.photos/100',
    };
    setCandidateData(prevCandidates => [...prevCandidates, candidateWithDefaults]);
    setIsModalOpen(false);
  };

  const groupedCandidates = candidateData.reduce((acc, candidate) => {
    const { position } = candidate;
    if (!acc[position]) acc[position] = [];
    acc[position].push(candidate);
    return acc;
  }, {});

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

      {Object.entries(groupedCandidates).map(([position, candidates]) => (
        <div key={position} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
            <IconUsers className="mr-2" />
            {position}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidates.map(candidate => (
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
