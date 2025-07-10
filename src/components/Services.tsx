import React from 'react';
import { SERVICES } from '../constants';
import { CodeIcon, SmartphoneIcon, BarChartIcon, AiMlIcon } from './icons/ServiceIcons';

const iconMap: { [key: string]: React.ReactNode } = {
  Code: <CodeIcon />,
  Smartphone: <SmartphoneIcon />,
  BarChart: <BarChartIcon />,
  AiMl: <AiMlIcon />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">My Services</h2>
          <p className="text-gray-500 mt-2">What I Do</p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg text-center group hover:bg-[#3B82F6] transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
              <div className="text-5xl text-[#3B82F6] mb-4 group-hover:text-white transition-colors duration-300 mx-auto w-fit">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-white">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-white/90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;