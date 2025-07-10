import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className={`text-3xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>Tristan Hancock</a>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className={`${isScrolled ? 'text-gray-700' : 'text-gray-700'} hover:text-[#3B82F6] transition-colors duration-300 font-medium`}>
                {link.name}
              </a>
            ))}
          </nav>
          
          <a href="#contact" className="hidden lg:inline-block bg-[#3B82F6] text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300">
              Connect
          </a>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`text-3xl ${isScrolled ? 'text-gray-800' : 'text-white'}`} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white`}>
        <nav className="flex flex-col items-center py-4 space-y-4">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[#3B82F6] transition-colors duration-300 font-medium">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-[#3B82F6] text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300">
              Connect
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;