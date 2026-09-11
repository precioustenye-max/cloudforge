export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  projectSlugs: string[];
  portfolioUrl?: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Fonsah Precious',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer focused on building scalable web applications and digital products.',
    image: '/WhatsApp Image 2026-09-10 at 05.45.15 (1).jpeg',
    projectSlugs: [
      'cloudforge-company-website',
      'camhire',
      'medconnect',
      'chasindecor',
    ],
    portfolioUrl: 'https://my-portfolio-two-mocha-24.vercel.app/',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 'member-2',
    name: 'Akum ranbride',
    role: 'Frontend Developer',
    bio: 'Frontend developer with a focus on creating responsive and accessible web applications.',
    image: '/WhatsApp Image 2026-09-10 at 06.37.08.jpeg',
    projectSlugs: [],
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 'member-3',
    name: 'Team Member',
    role: 'Backend Developer',
    bio: 'Backend engineer specializing in APIs, databases and business automation.',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    projectSlugs: [],
    socials: {
      github: '#',
      linkedin: '#',
    },
  },
  {
    id: 'member-4',
    name: 'Team Member',
    role: 'Project Manager',
    bio: 'Keeping projects on track with clear communication and transparent processes.',
    image: 'https://images.pexels.com/photos/3777942/pexels-photo-3777942.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    projectSlugs: [],
    socials: {
      linkedin: '#',
    },
  },
];
