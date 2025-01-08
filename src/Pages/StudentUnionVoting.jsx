import React, { useState } from 'react';

const candidates = [
  { id: 1, name: 'Chimwemwe Banda', position: 'President', image: 'https://picsum.photos/100' },
  { id: 2, name: 'Thandiwe Moyo', position: 'President', image: 'https://picsum.photos/100' },
  { id: 3, name: 'Dalitso Phiri', position: 'President', image: 'https://picsum.photos/100' },
  { id: 4, name: 'Limbani Nkhoma', position: 'Vice President', image: 'https://picsum.photos/100' },
  { id: 5, name: 'Zikomo Chirwa', position: 'Vice President', image: 'https://picsum.photos/100' },
  { id: 6, name: 'Tawonga Gondwe', position: 'Vice President', image: 'https://picsum.photos/100' },
  { id: 7, name: 'Ethel Mwale', position: 'Secretary', image: 'https://picsum.photos/100' },
  { id: 8, name: 'Gift Kamanga', position: 'Secretary', image: 'https://picsum.photos/100' },
  { id: 9, name: 'Faith Chilima', position: 'Secretary', image: 'https://picsum.photos/100' },
  { id: 10, name: 'Bright Kachali', position: 'Treasurer', image: 'https://picsum.photos/100' },
  { id: 11, name: 'Ivy Makwenda', position: 'Treasurer', image: 'https://picsum.photos/100' },
  { id: 12, name: 'Wesley Mhango', position: 'Treasurer', image: 'https://picsum.photos/100' },
];

export default function StudentUnionVoting() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [isVoting, setIsVoting] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const positions = [...new Set(candidates.map(candidate => candidate.position))];

  const handleSelect = (candidateId) => {
    setSelections({ ...selections, [positions[currentStep]]: candidateId });
  };

  const handleNext = () => {
    if (currentStep < positions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsVoting(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    console.log('Final selections:', selections);
    setIsConfirmed(true);
  };

  const renderVotingStep = () => {
    const position = positions[currentStep];
    const positionCandidates = candidates.filter(candidate => candidate.position === position);

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-green-600">{position}</h2>
        <p className="mb-6 text-gray-600">Select your preferred candidate:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {positionCandidates.map(candidate => (
            <button
              key={candidate.id}
              onClick={() => handleSelect(candidate.id)}
              className={`p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                selections[position] === candidate.id
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-800 hover:bg-green-100'
              }`}
            >
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-16 h-16 rounded-full object-cover mb-2 mx-auto"
              />
              {candidate.name}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors duration-300 ${
              currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'
            }`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selections[position]}
            className={`bg-green-500 text-white py-2 px-4 rounded-md transition-colors duration-300 ${
              selections[position] ? 'hover:bg-green-600' : 'opacity-50 cursor-not-allowed'
            }`}
          >
            {currentStep === positions.length - 1 ? 'Review Selections' : 'Next'}
          </button>
        </div>
      </div>
    );
  };

  const renderConfirmation = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Confirm Your Selections</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        {positions.map(position => (
          <div key={position} className="mb-4">
            <h3 className="text-lg font-semibold">{position}</h3>
            <p className="text-gray-600">
              {candidates.find(candidate => candidate.id === selections[position])?.name || 'No selection'}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => setIsVoting(true)}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
        >
          Confirm Votes
        </button>
      </div>
    </div>
  );

  const renderThankYou = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Thank you for voting!
      </h2>
      <p className="text-gray-600">Your votes have been recorded. The system will now log you out...</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 items-center justify-center rounded-md max-h-screen m-6">
        <div className="flex justify-center">
          <img
            src="assets/uni_logo.png"
            alt="University Logo"
            className="h-16 mb-2"
          />
        </div>
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">
        Student Union Representative Voting
      </h1>
      {isVoting ? (
        <div>
          <div className="mb-6 flex justify-between items-center">
            <span className="text-gray-600">
              Step {currentStep + 1} of {positions.length}
            </span>
          </div>
          {renderVotingStep()}
        </div>
      ) : isConfirmed ? (
        renderThankYou()
      ) : (
        renderConfirmation()
      )}
    </div>
  );
}
