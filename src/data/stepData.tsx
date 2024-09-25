export interface StepType {
  label: string;
  description: string;
  image: string;
  month: string;
  year: string;
}


const steps: StepType[] = [
  {
    label: 'Fullstack Developer Intern - Quadra Karya Sentosa',
    description: `At Quadra Karya Sentosa, I am currently working as a Fullstack Developer intern, focusing on projects that involve a wide range of technologies, including:
    
    - React.js and Next.js for front-end development
    - Nest.js, gRPC, and TypeScript for back-end services
    - Redux for state management
    - Tailwind CSS for responsive and modern UI designs
    - Microservices architecture for scalable and modular applications
    - Docker for containerization and deployment
    
    I am actively contributing to building scalable applications and learning how to design efficient microservices-based architectures.`,
    image: '/images/Yosa4.jpg', 
    month: 'July',
    year: '2023',
  },
  {
    label: 'Social Media Manager - NAQO AL VALAS, DI Yogyakarta',
    description: `Implemented and strategized promotional campaigns on social media, boosting brand recognition by 40% and increasing user engagement.`,
    image: '/images/Yosa2.jpg', 
    month: 'August',
    year: '2023',
  },
  {
    label: 'Student Staff - Departemen Informatika, Universitas Atma Jaya Yogyakarta',
    description: `Created content for the university’s social media channels, boosting follower engagement by 200% in a short span.`,
    image: '/images/Yosa3.jpg', 
    month: 'January',
    year: '2024',
  },
];

export default steps;
