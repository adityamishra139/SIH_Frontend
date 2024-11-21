import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const highCourts = [
  { id: 1, name: "Delhi High Court" },
  { id: 2, name: "Bombay High Court" },
  { id: 3, name: "Calcutta High Court" },
  { id: 4, name: "Madras High Court" },
  { id: 5, name: "Karnataka High Court" },
  // Add more High Courts as needed
];

const LocalizationPage = () => {
  const [selectedCourt, setSelectedCourt] = useState('');
  const [query, setQuery] = useState('');

  const handleSelectChange = (e) => {
    setSelectedCourt(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    alert(`Searching laws for ${selectedCourt}: ${query}`);
  };

  return (
    <div>
       <Navbar></Navbar>
    
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Localization: High Courts & Local Laws</h1>
        
        {/* Select High Court */}
        <div className="mb-6">
          <label htmlFor="highCourt" className="block text-lg font-medium text-gray-700">Select High Court</label>
          <select
            id="highCourt"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCourt}
            onChange={handleSelectChange}
          >
            <option value="" disabled>Select a High Court</option>
            {highCourts.map(court => (
              <option key={court.id} value={court.name}>{court.name}</option>
            ))}
          </select>
        </div>

        {/* Local Laws Search */}
        <div className="mb-6">
          <label htmlFor="query" className="block text-lg font-medium text-gray-700">Search Local Laws & Rules</label>
          <input
            id="query"
            type="text"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your search query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <div className="text-center">
          <button
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={handleSearch}
            disabled={!selectedCourt || !query}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LocalizationPage;
