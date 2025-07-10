import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPinIcon, MailIcon, PhoneIcon } from './icons/ContactIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
          <p className="text-gray-500 mt-2">Get in touch with me</p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 rounded-2xl shadow-lg">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start">
              <div className="text-3xl text-[#3B82F6] mr-4 mt-1"><MapPinIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">My Address</h3>
                <p className="text-gray-500">{PERSONAL_INFO.address}</p>
              </div>
            </div>
             <div className="flex items-start">
              <div className="text-3xl text-[#3B82F6] mr-4 mt-1"><MailIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email Me</h3>
                <p className="text-gray-500">{PERSONAL_INFO.email}</p>
              </div>
            </div>
             <div className="flex items-start">
              <div className="text-3xl text-[#3B82F6] mr-4 mt-1"><PhoneIcon /></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Call Me</h3>
                <p className="text-gray-500">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-colors" />
                <input type="email" placeholder="Your Email" className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-colors" />
              </div>
              <div>
                <input type="text" placeholder="Subject" className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-colors" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={6} className="w-full bg-gray-100 border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-colors"></textarea>
              </div>
              <div className="text-center">
                 <button type="submit" className="bg-[#3B82F6] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300">
                    Send Message
                 </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;