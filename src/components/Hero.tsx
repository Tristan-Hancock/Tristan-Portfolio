import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from './icons/SocialIcons';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const SocialIcon: React.FC<{ name: string; href: string }> = ({ name, href }) => {
  const icons: { [key: string]: React.ReactNode } = {
    Facebook: <FacebookIcon className="w-5 h-5"/>,
    Twitter: <TwitterIcon className="w-5 h-5"/>,
    LinkedIn: <LinkedinIcon className="w-5 h-5"/>,
    Github: <GithubIcon className="w-5 h-5"/>,
  };
  return (
    <a href={href} aria-label={name} className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F0F3F6] hover:bg-gray-300 text-gray-700 transition-colors">
      {icons[name]}
    </a>
  );
};

const Hero: React.FC = () => {
  const marqueeText = "Latest work and feature design - Available for freelance -";

  return (
    <section id="home" className="py-16 md:py-24">
      <div className="grid lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-4 bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <div className="absolute -inset-2 border-2 border-dashed border-[#3B82F6] rounded-full animate-spin-slow"></div>
            <img 
              src="https://i.imgur.com/oe2S4mD.png"
              alt="Tristan Hancock"
              className="w-full h-full object-cover rounded-full mx-auto relative shadow-md"
              loading="lazy"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-gray-900">Tristan Hancock</h2>
          <p className="mt-2 text-gray-500 max-w-xs">I am a Web Designer based in san francisco.</p>
          <div className="flex space-x-2 md:space-x-3 mt-6">
            {SOCIAL_LINKS.map(link => <SocialIcon key={link.name} name={link.name} href={link.href} />)}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <p className="text-lg text-gray-500">Hello There!</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-tight mt-4 text-gray-800">
              <span className="text-black">I'M</span> <span className="text-outline">TRISTAN HANCOCK,</span> <span className="text-black">A PRODUCT DESIGNER CRAFTING</span> <span className="text-outline">USER-CENTRIC DESIGN WITH</span> <span className="text-black">PIXEL-PERFECT PRECISION.</span>
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3B82F6]"></span>
              </span>
              <p className="text-gray-600">Available for Freelancing</p>
            </div>
            <a href="#" download className="mt-8 inline-flex items-center gap-2 bg-[#3B82F6] text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
              Download CV
              <DownloadIcon className="w-5 h-5" />
            </a>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="whitespace-nowrap">
                <div className="marquee-content inline-block">
                    <span className="text-xl font-medium text-gray-400 mx-4">{marqueeText}</span>
                    <span className="text-xl font-medium text-gray-400 mx-4" aria-hidden="true">{marqueeText}</span>
                    <span className="text-xl font-medium text-gray-400 mx-4" aria-hidden="true">{marqueeText}</span>
                    <span className="text-xl font-medium text-gray-400 mx-4" aria-hidden="true">{marqueeText}</span>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;