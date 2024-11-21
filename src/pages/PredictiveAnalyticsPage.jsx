import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const sampleTrends = [
  { year: 2020, resolvedCases: 150, averageTime: 8 },
  { year: 2021, resolvedCases: 200, averageTime: 6 },
  { year: 2022, resolvedCases: 250, averageTime: 5 },
];

const PredictiveAnalyticsPage = () => {
  const [caseType, setCaseType] = useState('');
  const [historicalData, setHistoricalData] = useState('');
  const [predictedOutcome, setPredictedOutcome] = useState(null);
  
  const handlePrediction = () => {
    // Simulate a prediction (In reality, you'd call an API or use ML models)
    const prediction = {
      successProbability: 85,
      estimatedTimeline: 6, // in months
    };
    setPredictedOutcome(prediction);
  };

  return (
    <div><Navbar></Navbar>
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Predictive Analytics for Case Outcomes</h1>
        
        {/* Case Type Selection */}
        <div className="mb-6">
          <label htmlFor="caseType" className="block text-lg font-medium text-gray-700">Select Case Type</label>
          <select
            id="caseType"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="" disabled>Select a Case Type</option>
            <option value="contract">Contract Dispute</option>
            <option value="property">Property Dispute</option>
            <option value="ip">Intellectual Property</option>
            <option value="tax">Taxation</option>
          </select>
        </div>

        {/* Upload Historical Data */}
        <div className="mb-6">
          <label htmlFor="historicalData" className="block text-lg font-medium text-gray-700">Upload Historical Data</label>
          <input
            type="file"
            id="historicalData"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => setHistoricalData(e.target.files[0])}
          />
        </div>

        {/* Predict Button */}
        <div className="text-center mb-6">
          <button
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={handlePrediction}
            disabled={!caseType || !historicalData}
          >
            Predict Outcome
          </button>
        </div>

        {/* Display Predicted Outcome */}
        {predictedOutcome && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold text-gray-800">Prediction Results</h2>
            <p className="mt-4 text-gray-700">
              <strong>Success Probability:</strong> {predictedOutcome.successProbability}%
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Estimated Timeline:</strong> {predictedOutcome.estimatedTimeline} months
            </p>
          </div>
        )}

        {/* Trend Analysis */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Trend Analysis</h2>
          <table className="w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Resolved Cases</th>
                <th className="px-4 py-2">Avg. Timeline (months)</th>
              </tr>
            </thead>
            <tbody>
              {sampleTrends.map((trend, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-center">{trend.year}</td>
                  <td className="px-4 py-2 text-center">{trend.resolvedCases}</td>
                  <td className="px-4 py-2 text-center">{trend.averageTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PredictiveAnalyticsPage;
