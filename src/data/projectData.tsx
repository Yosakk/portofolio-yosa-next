export interface ProjectData {
  id: number;
  title: string;
  description: string;
  link: string;
  location: string;
  technologies: string[];
  image: string;
  jobdesk: string[];
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    title: 'SD ST. Giulia Salzano Web Profile',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: 'https://sdusabagiuliasalzano.com/',
    location: 'Air Upas, Ketapang, Kalimantan Barat',
    technologies: ['React', 'Laravel'],
    image: '/images/SDProfile.jpg',
    jobdesk: ['Frontend Development', 'Backend Integration'],
  },
  {
    id: 2,
    title: 'SD ST. Giulia Salzano Web Profile Brouw',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: 'https://sdusabagiuliasalzano.com/',
    location: 'Air Upas, Ketapang, Kalimantan Barat',
    technologies: ['React', 'Laravel'],
    image: '/images/SDProfile.jpg',
    jobdesk: ['Frontend Development', 'Backend Integration'],
  },
];
