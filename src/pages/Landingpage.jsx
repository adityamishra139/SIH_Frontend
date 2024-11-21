import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LandingPage = () => {
  const featuresRef = useRef(null);
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <header className="bg-blue-900 text-white py-10 text-center">
        <h1 className="text-5xl font-bold">AI-Driven Research Engine for Commercial Courts</h1>
        <p className="mt-4 text-lg">
          Streamline your legal research and expedite commercial dispute resolution with AI-powered insights.
        </p>
        <div>
          <button
            onClick={scrollToFeatures} 
            className="mt-8 bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200"
          >
            Get Started
          </button>
        </div>
      </header>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step 1: Enter Legal Query</h3>
              <p className="text-gray-700">Enter your legal query or case-specific details in the search bar. Our AI will process it against vast legal databases.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step 2: Filter and Customize Results</h3>
              <p className="text-gray-700">Filter results based on case type, jurisdiction, and more. Customize based on your specific commercial dispute.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Step 3: Get AI-Powered Insights</h3>
              <p className="text-gray-700">Receive relevant case laws, statutes, and predictive insights to support faster decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" ref={featuresRef}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">AI-Driven Search</h3>
              <p className="text-gray-700">Leverage AI to extract relevant legal precedents, case laws, and statutory provisions.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Predictive Analytics</h3>
              <p className="text-gray-700">Forecast case outcomes based on historical trends and patterns.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Customizable Results</h3>
              <p className="text-gray-700">Tailor search results as per the needs of each commercial suit and court.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-600">Multilingual Support</h3>
              <p className="text-gray-700">Supports multiple languages, ensuring access for all judicial officers across India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our AI-Driven Research Engine is designed to enhance legal research efficiency, enabling faster resolution of commercial disputes in India. With advanced filtering options, localized data, and predictive analytics, our platform helps judicial officers make informed decisions quickly and ethically.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700">
            Start Research
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
