export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Github', href: '#' },
];

export const PERSONAL_INFO = {
  name: 'Tristan Hancock',
  age: 26,
  phone: '+123 456 7890',
  email: 'contact@tristanhancock.com',
  address: 'New York, USA',
};

export const VENTURES = [
    { 
      name: 'Ovelia Health', 
      description: 'Innovative healthcare technology solutions.',
      logo: 'https://i.imgur.com/JLHw8TJ.png' 
    },
    { 
      name: 'AceLink Software Solutions', 
      description: 'Custom software for enterprise clients.',
      logo: 'https://i.imgur.com/uR1k37V.png'
    },
    { 
      name: 'VidExact', 
      description: 'AI-powered video analytics platform.',
      logo: 'https://i.imgur.com/v8L4T6T.png'
    },
];

export const SKILLS = [
  { name: 'Web Development', percentage: 90 },
  { name: 'Mobile Development', percentage: 85 },
  { name: 'AI & ML', percentage: 80 },
  { name: 'SEO', percentage: 95 },
];

export const SERVICES = [
  {
    icon: 'Code',
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web applications with modern technologies.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Creating intuitive and powerful native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: 'AiMl',
    title: 'AI & ML Solutions',
    description: 'Developing intelligent agents and machine learning models to solve complex business problems.',
  },
  {
    icon: 'BarChart',
    title: 'SEO Optimization',
    description: 'Improving website visibility and ranking on search engines through proven optimization strategies.',
  },
];

export type PortfolioCategory = 'All' | 'Web Development' | 'Mobile Apps' | 'AI/ML';

export const PORTFOLIO_ITEMS: { src: string; title: string; category: PortfolioCategory }[] = [
  { src: 'https://picsum.photos/seed/project1/600/400', title: 'E-commerce Platform', category: 'Web Development' },
  { src: 'https://picsum.photos/seed/project2/600/400', title: 'Fitness Tracker App', category: 'Mobile Apps' },
  { src: 'https://picsum.photos/seed/project3/600/400', title: 'AI Chatbot Integration', category: 'AI/ML' },
  { src: 'https://picsum.photos/seed/project4/600/400', title: 'Corporate Website Redesign', category: 'Web Development' },
  { src: 'https://picsum.photos/seed/project5/600/400', title: 'Social Media App', category: 'Mobile Apps' },
  { src: 'https://picsum.photos/seed/project6/600/400', title: 'Data Analytics Dashboard', category: 'Web Development' },
];

export const BLOG_POSTS = [
  {
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    title: 'The Future of AI in Mobile App Development',
    description: 'Exploring how artificial intelligence is revolutionizing the mobile app landscape, from personalization to predictive analytics.',
    link: 'https://medium.com',
  },
  {
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    title: '10 Essential SEO Tips for Modern Web Developers',
    description: 'A comprehensive guide for developers on how to build websites that are not just beautiful, but also rank high on search engines.',
    link: 'https://medium.com',
  },
  {
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    title: 'Why Every SaaS Needs a Robust Multi-Tenant Architecture',
    description: 'A deep dive into the architectural patterns and benefits of multi-tenancy for scalable and efficient software-as-a-service products.',
    link: 'https://medium.com',
  },
];