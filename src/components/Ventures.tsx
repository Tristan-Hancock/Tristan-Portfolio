import React from 'react';
import { VENTURES } from '../constants';

const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">My Ventures</h2>
          <p className="text-gray-500 mt-2">Companies I have founded and run</p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VENTURES.map(venture => (
            <div 
              key={venture.name} 
              className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img 
                  src={venture.logo} 
                  alt={`${venture.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{venture.name}</h3>
              <p className="text-gray-600 flex-grow">{venture.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;