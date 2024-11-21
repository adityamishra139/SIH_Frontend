import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div> <Navbar></Navbar>
    <div className="bg-gray-100 py-16">
     
      {/* Background Section */}
      <section
        className="container mx-auto px-6 text-center mb-16 bg-cover bg-center py-2"
        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?law,technology)' }}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 text-blue-900">About the AI-Driven Research Engine</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            The Commercial Courts Act, 2015 was enacted to address the issue of faster resolution of commercial disputes and foster a conducive environment for ease of doing business in India. While various reforms have been made, the backlog of cases remains a challenge. The AI-Driven Research Engine offers a technological solution to assist judges and judicial officers in expediting legal research, ensuring faster resolution of disputes in commercial courts across the country.
          </p>
        </div>
      </section>

      {/* Role Section */}
      <section className="container mx-auto px-6 py-12 bg-white shadow-lg rounded-lg mb-16 transition duration-300 ease-in-out transform hover:scale-105">
        <h3 className="text-3xl font-bold text-blue-900 mb-6">Our Role</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          The AI-Driven Research Engine is designed to process vast legal data, including case laws, statutory provisions, and rules. It identifies key legal principles and precedents while providing results that are tailored to the specific needs of each commercial suit. With predictive analytics, the engine forecasts case outcomes based on historical trends, aiding judicial officers in faster decision-making.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="container mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Customization</h4>
            <ul className="text-gray-700">
              <li><strong>Description:</strong> Tailors the engine's outputs to the unique requirements of each commercial suit.</li>
              <li><strong>Benefit:</strong> Enhances efficiency by ensuring that the information provided is relevant and useful.</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Predictive Analytics</h4>
            <ul className="text-gray-700">
              <li><strong>Description:</strong> Utilizes historical data to predict potential outcomes.</li>
              <li><strong>Benefit:</strong> Aids judicial officers in informed decision-making and strategic planning.</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Data Localization</h4>
            <ul className="text-gray-700">
              <li><strong>Description:</strong> Ensures compliance with local laws and regulations.</li>
              <li><strong>Benefit:</strong> Enhances accuracy across jurisdictions, improving the relevance of research.</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Multilingual Support</h4>
            <ul className="text-gray-700">
              <li><strong>Description:</strong> Offers support for multiple languages.</li>
              <li><strong>Benefit:</strong> Makes the engine accessible to diverse judicial officers across India.</li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">User-Friendly Interface</h4>
            <ul className="text-gray-700">
              <li><strong>Description:</strong> Designed to be intuitive and easy to navigate.</li>
              <li><strong>Benefit:</strong> Ensures efficient legal research for judicial officers.</li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Ethical AI</h4>
            <ul className="text-gray-700">
              <li><strong>Description:</strong> Maintains transparency and neutrality in decision-making processes.</li>
              <li><strong>Benefit:</strong> Ensures trust in AI functionalities among judicial officers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto px-6 py-12 bg-blue-900 text-white rounded-lg mt-16 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?business,justice)' }}>
        <div className="bg-blue-900 bg-opacity-75 py-8 px-6 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            Our vision is to enhance legal research and streamline judicial processes in India’s commercial courts. By integrating advanced AI technologies, we aim to contribute towards the faster resolution of commercial disputes, ultimately improving the ease of doing business in the country.
          </p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;
