import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    Facebook: <FacebookIcon />,
    Twitter: <TwitterIcon />,
    LinkedIn: <LinkedinIcon />,
    Github: <GithubIcon />,
  };

  return (
    <footer className="bg-white mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <div className="flex justify-center space-x-4 mb-4">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.name} href={link.href} aria-label={link.name} className="text-gray-500 hover:text-[#3B82F6] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 text-xl border border-gray-300 hover:border-[#3B82F6]">
              {iconMap[link.name]}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Tristan Hancock. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;