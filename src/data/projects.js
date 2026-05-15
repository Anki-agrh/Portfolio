export const projects = [
  {
    id: 'dpi-engine',
    title: 'DPI Engine',
    description: [
      'Engineered a multi-threaded C++ DPI engine for real-time packet parsing and HTTPS SNI extraction.',
      'Designed scalable networking components utilizing load balancing and thread-safe queues.',
      'Validated system reliability using Python-generated synthetic PCAP files.'
    ],
    tags: ['C++', 'Networking', 'Python'],
    accent: 'butter',
    github: 'https://github.com/Anki-agrh/DPI-Engine',
    image: '/images/dpi-engine.png',
  },
  {
    id: 'healthai-hub',
    title: 'HealthAI Hub',
    description: [
      'Built a MERN-based healthcare platform with AI-powered consultations, voice interaction, and 3D anatomical models.',
      'Integrated OCR for medical report parsing and real-time telemedicine using Socket.io and Google Meet APIs.'
    ],
    tags: ['MERN', 'AI', 'Socket.io'],
    accent: 'sage',
    github: 'https://github.com/Anki-agrh/healthai_hub',
    website: 'https://healthai-hub.vercel.app/',
  },
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    description: [
      'Developed a responsive React/Tailwind finance dashboard featuring transaction management and Recharts visualizations.',
      'Implemented CDD and local storage persistence for scalable budget planning and CSV data handling.'
    ],
    tags: ['React', 'Tailwind', 'Recharts'],
    accent: 'lavender',
    github: 'https://github.com/Anki-agrh/finance-ui',
    website: 'https://finance-ui-gamma.vercel.app/',
  },
  {
    id: 'service-provider',
    title: 'Service Provider App',
    description: [
      'A frontend interface for a service provider application, featuring smooth navigation and polished aesthetics.'
    ],
    tags: ['Frontend', 'React', 'Tailwind'],
    accent: 'rose',
    github: 'https://github.com/Anki-agrh/ServiceProvider_frontend',
    website: 'https://service-provider-frontend-eight.vercel.app/',
  }
];
