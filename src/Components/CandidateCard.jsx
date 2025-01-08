import React from 'react';
import { IconThumbUp } from '@tabler/icons-react';

export default function CandidateCard({ candidate }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 relative">
      <div className="flex items-center mb-4">
        <div className="relative">
          <img
            src={`https://i.imgur.com/${candidate.imageId}.jpg`}
            alt={candidate.name}
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{candidate.name}</h3>
      </div>
      <div className="absolute bottom-2 right-2 flex items-center text-gray-600">
        
        <IconThumbUp size={16} className="mr-1" />
        <span className="text-sm font-medium">Votes: {candidate.votes}</span>
      </div>
    </div>
  );
}

