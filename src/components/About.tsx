import React from 'react';
import { PERSONAL_INFO, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white rounded-2xl shadow-lg my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-500 mt-2">Get to know me</p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://www.videxact.com/assets/img/th-1/tristan.jpeg"
              alt="A portrait of Tristan Hancock in a professional setting"
              className="rounded-lg shadow-xl w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Hi There! I'm Tristan Hancock</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
            I’m a Computer Science graduate and serial entrepreneur who’s founded three technology ventures. With deep expertise in AI, I architect and develop mobile apps, websites, and conversational AI agents that deliver seamless user experiences. From ideation through launch, I translate complex visions into polished, industry-leading products—prioritizing the right features, iterating rapidly, and shipping on schedule.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div><strong className="text-gray-800">Name:</strong> <span className="text-gray-600">{PERSONAL_INFO.name}</span></div>
              <div><strong className="text-gray-800">Age:</strong> <span className="text-gray-600">{PERSONAL_INFO.age}</span></div>
              <div><strong className="text-gray-800">Phone:</strong> <span className="text-gray-600">{PERSONAL_INFO.phone}</span></div>
              <div><strong className="text-gray-800">Address:</strong> <span className="text-gray-600">{PERSONAL_INFO.address}</span></div>
              <div><strong className="text-gray-800">Email:</strong> <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#3B82F6] hover:underline">{PERSONAL_INFO.email}</a></div>
            </div>

            <div className="space-y-6">
              {SKILLS.map(skill => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-800">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#3B82F6] h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;