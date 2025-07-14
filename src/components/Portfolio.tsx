// Portfolio.tsx
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import type { PortfolioCategory } from '../constants';

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const Portfolio: React.FC = () => {
  const filters: PortfolioCategory[] = ['All', 'Web Development', 'Mobile Apps', 'AI/ML'];
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return PORTFOLIO_ITEMS;
    }
    return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 bg-white rounded-2xl shadow-lg my-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">My Portfolio</h2>
          <p className="text-gray-500 mt-2">Showcasing some of my best work</p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-[#3B82F6] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#3B82F6] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredItems.map((item) => (
    <div
      key={item.src}
      className="group relative overflow-hidden rounded-lg shadow-md"
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          
          {/* ← Changed `div` → `a` here: */}
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${item.title}`}
            className="w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4 text-4xl cursor-pointer"
          >
            <PlusIcon />
          </a>

          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm">{item.category}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Portfolio;