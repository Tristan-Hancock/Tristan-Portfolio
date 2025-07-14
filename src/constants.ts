import logo from './assets/logo-dark.png';
import ovelialogo from './assets/logo.svg';
import sva from './assets/sva.png';
import ovelia from './assets/ovelia.png';
import maya from './assets/maya.png';
import script from './assets/script.png';
import videxact from './assets/videxact.png';
import anshled from './assets/anshled.png';
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: 'https://x.com/TristanInTech' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tristan-hancock-b54570223/' },
  { name: 'Github', href: 'https://github.com/Tristan-Hancock' },
];

export const PERSONAL_INFO = {
  name: 'Tristan Hancock',
  age: 22,
  phone: '+91 9819861904',
  email: 'tristanhancock@gmail.com',
  address: 'Mumbai, India',
};

export const VENTURES = [
    { 
      name: 'Ovelia Health', 
      description: 'Innovative healthcare technology for PCOS',
      logo: ovelialogo ,
      href: 'https://ovelia.health/'
    },
    { 
      name: 'AceLink Software Solutions', 
      description: 'Custom software for enterprise clients.',
      logo: 'https://acelink.in/assets/Acelinklogo-Dywl35KC.png',
      href: 'https://acelink.in/'
    },
    { 
      name: 'VidExact', 
      description: 'MultiModel video search engine.',
      logo: logo,
      href: 'https://www.videxact.com/'
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

export const PORTFOLIO_ITEMS: { src: string; title: string; category: PortfolioCategory;  href: string }[] = [
  { src: script, title: 'Script: Clothing Brand', category: 'Web Development' , href: 'https://www.shopscript.in/' },
  { src: maya, title: 'AI Assistant Integration', category: 'AI/ML' , href: 'https://maya-3x4bp6b4n-tristan-hancocks-projects.vercel.app/' },
  { src: anshled, title: 'AnshLed Marketing Website', category: 'Web Development',href: 'https://www.anshled.com/' },
  { src: sva, title: 'SVA: Mental Health App', category: 'Mobile Apps' , href: 'https://docs.google.com/presentation/d/1F_0REUmPrcR7aiz0uATN900ate_NONTc_hHt7HNgz74/edit?usp=sharing' },
  { src: ovelia, title: 'Ovelia:PCOS App', category: 'Mobile Apps' , href: 'https://docs.google.com/presentation/d/1F_0REUmPrcR7aiz0uATN900ate_NONTc_hHt7HNgz74/edit?usp=sharing' },
  { src: videxact, title: 'MultiModel Video Analysis', category: 'Web Development', href: 'https://www.videxact.com/' },
];

export const BLOG_POSTS = [
  {
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Wvm698n0iE6uK1FAegz40A.png',
    title: 'GPT-4 API: Powering AI Innovations and Transformation',
    description: 'Exploring GPT4 API capabilities and how it is transforming industries with its advanced AI features.',
    link: 'https://medium.com/@tristanhancock_99866/gpt-4-api-powering-ai-innovations-and-transformation-586022a707fe',
  },
  {
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*t5byh-t-SERm8oa6Ga-PCw.jpeg',
    title: 'Apple Vision Pro: Unleashing the Future of Wearable Technology',
    description: 'A comprehensive look at Apple\'s latest wearable technology, its features, and its potential impact on the industry.',
    link: 'https://medium.com/@tristanhancock_99866/apple-vision-pro-unleashing-the-future-of-wearable-technology-dd5bd4208e78',
  },
  {
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*le0hubgO1xZz79YqJql_cg.png',
    title: 'Meta Announces the Meta Quest 3: Here’s What We Know',
    description: 'Meta\'s latest VR headset promises to revolutionize the virtual reality experience with advanced features and capabilities.',
    link: 'https://medium.com/@tristanhancock_99866/meta-announces-the-meta-quest-3-heres-what-we-know-224850948de2',
  },
];