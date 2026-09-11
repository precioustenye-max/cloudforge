export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    process: string;
    technologies: string;
    results: string[];
    screenshots: string[];
  };
}

export const projectCategories = [
  'All',
  'E-commerce',
  'AI / Productivity',
  'Transportation / SaaS',
  'Web Development',
];

export const projects: Project[] = [
  {
    slug: 'zavora-homes',
    name: 'ZavoraHomes',
    category: 'E-commerce',
    shortDescription:
      'A modern digital storefront for a furniture and interior design business.',
    description:
      'ZavoraHomes needed an online presence that matched the quality of their furniture. We built a full e-commerce platform with a curated catalog, seamless checkout, and an admin panel for managing products and orders.',
    image:
      'https://images.pexels.com/photos/7621355/pexels-photo-7621355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    caseStudy: {
      challenge:
        'ZavoraHomes relied on in-person sales and social media. They had no way to showcase their full catalog online, and managing inquiries was manual and time-consuming.',
      solution:
        'We designed and developed a complete e-commerce platform with a curated product catalog, secure checkout, order management, and a responsive design that reflects the brand\u2019s premium positioning.',
      process:
        'We started with a discovery phase to understand the product line and customer journey. After wireframing the key flows, we designed a clean, furniture-focused interface, then built the storefront and admin panel in parallel, integrating payment processing before launch.',
      technologies:
        'React, Node.js, Tailwind CSS',
      results: [
        'Full online catalog with search and filtering',
        'Secure checkout with multiple payment options',
        'Admin dashboard for product and order management',
        'Mobile-responsive design for browsing on any device',
      ],
      screenshots: [
        'https://images.pexels.com/photos/7621355/pexels-photo-7621355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/32702922/pexels-photo-32702922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
  {
    slug: 'trendai',
    name: 'TrendAI',
    category: 'AI / Productivity',
    shortDescription:
      'A concept platform combining AI-powered tools with a modern user experience.',
    description:
      'TrendAI is a concept productivity platform that brings AI-powered tools into a single, clean interface. We designed the user experience and built a functional prototype to validate the core idea.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    caseStudy: {
      challenge:
        'The founders had a vision for an AI-powered productivity tool but needed a working prototype to validate the concept with potential users and investors.',
      solution:
        'We designed a clean, focused interface that makes AI tools feel approachable, and built a functional prototype with core features working end-to-end.',
      process:
        'We began with a strategy session to define the MVP scope. After exploring the user journey, we designed the interface, integrated AI APIs, and built a working prototype that could be demoed to stakeholders.',
      technologies:
        'React, Node.js, Tailwind CSS',
      results: [
        'Functional prototype with core AI features',
        'Clean, intuitive interface design',
        'Demo-ready for investor presentations',
        'Scalable architecture for future development',
      ],
      screenshots: [
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
  {
    slug: 'bus-booking-platform',
    name: 'Bus Booking Platform',
    category: 'Transportation / SaaS',
    shortDescription:
      'A platform for customers to discover bus routes, view available seats and book journeys online.',
    description:
      'We designed and built a bus booking platform that lets customers search routes, view available seats in real time, and book tickets online, with an admin panel for operators to manage schedules and bookings.',
    image:
      'https://images.pexels.com/photos/8552649/pexels-photo-8552649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    caseStudy: {
      challenge:
        'A transportation company wanted to move from phone-based booking to a self-service online platform. They needed route search, real-time seat availability, and online payment.',
      solution:
        'We built a booking platform with route search, live seat maps, secure payment, and an operator dashboard for managing schedules, routes, and bookings.',
      process:
        'We mapped the full booking flow from the customer and operator perspectives. After designing the interface, we built the platform with a real-time seat selection system, integrated payments, and an admin panel for route management.',
      technologies:
        'React, Node.js, Tailwind CSS',
      results: [
        'Online route search and booking',
        'Real-time seat availability and selection',
        'Secure online payment processing',
        'Operator dashboard for schedule and booking management',
      ],
      screenshots: [
        'https://images.pexels.com/photos/8552649/pexels-photo-8552649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/36257180/pexels-photo-36257180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
  {
    slug: 'cloudforge-company-website',
    name: 'Cloudforge Company Website',
    category: 'Web Development',
    shortDescription:
      'A polished company website showcasing Cloudforge services, capabilities and selected work.',
    description:
      'We designed and built Cloudforge\'s company website to communicate the brand clearly, showcase its services and projects, and make it easy for prospective clients to start a conversation.',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    caseStudy: {
      challenge:
        'Cloudforge needed a professional digital home that could explain its services, build trust with potential clients, and present its work in a clear, modern way.',
      solution:
        'We created a responsive multi-page website with a strong visual system, service pages, project case studies, team profiles, testimonials, FAQs, and a project inquiry form.',
      process:
        'We organized the site around the customer journey, established reusable components and content structures, then built and refined each page for a consistent experience across screen sizes.',
      technologies:
        'React, Node.js, Tailwind CSS',
      results: [
        'Clear presentation of Cloudforge services and capabilities',
        'Dedicated project portfolio with case-study pages',
        'Responsive experience across desktop and mobile devices',
        'Project inquiry form for converting prospective clients',
      ],
      screenshots: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
  {
    slug: 'camhire',
    name: 'CamHire',
    category: 'Transportation / SaaS',
    shortDescription:
      'A digital platform for discovering and managing vehicle hire services.',
    description:
      'CamHire is a focused vehicle-hire experience designed to make it easier for customers to explore available vehicles and connect with the right hire option.',
    image:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    caseStudy: {
      challenge:
        'Customers needed a clearer way to discover vehicle-hire options and move from browsing to enquiry.',
      solution:
        'We created a clean, responsive platform that presents vehicles clearly and guides customers toward making a hire enquiry.',
      process:
        'We organized the experience around vehicle discovery, clear information and a straightforward conversion path, then refined the interface for mobile and desktop use.',
      technologies: 'React, TypeScript, Tailwind CSS, Node.js',
      results: [
        'Clear vehicle-hire browsing experience',
        'Responsive interface for mobile and desktop users',
        'Simplified path from discovery to enquiry',
      ],
      screenshots: [
        'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
  {
    slug: 'medconnect',
    name: 'MedConnect',
    category: 'Web Development',
    shortDescription:
      'A healthcare-focused digital platform built to make connection and access simpler.',
    description:
      'MedConnect is a modern healthcare platform concept focused on creating a clearer digital connection between people and healthcare services.',
    image:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    caseStudy: {
      challenge:
        'Healthcare information and service access can feel fragmented, making it difficult for people to know where to begin.',
      solution:
        'We designed a calm, accessible interface that puts essential information and clear next steps in one place.',
      process:
        'We focused on trust, accessibility and a simple information hierarchy, then developed reusable interface patterns for a consistent experience.',
      technologies: 'React, TypeScript, Tailwind CSS, Supabase',
      results: [
        'Clearer presentation of healthcare information',
        'Accessible, responsive user experience',
        'Scalable foundation for future healthcare features',
      ],
      screenshots: [
        'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
  {
    slug: 'chasindecor',
    name: 'ChasinDecor',
    category: 'E-commerce',
    shortDescription:
      'A stylish digital storefront for discovering décor and interior pieces.',
    description:
      'ChasinDecor is an e-commerce experience designed to showcase décor products through an inviting, image-led storefront that supports browsing and purchase decisions.',
    image:
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    caseStudy: {
      challenge:
        'ChasinDecor needed a polished online presence that could present its products attractively and make browsing feel effortless.',
      solution:
        'We built a visual storefront with organized product discovery, responsive layouts and a clear path from product interest to purchase.',
      process:
        'We shaped the experience around the brand aesthetic, created reusable product presentation components and optimized the storefront for different screen sizes.',
      technologies: 'React, TypeScript, Tailwind CSS, Node.js',
      results: [
        'Image-led product discovery experience',
        'Responsive storefront for customers on any device',
        'Reusable foundation for expanding the product catalog',
      ],
      screenshots: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      ],
    },
  },
];

export interface OngoingProject {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  progress: number;
  status: string;
}

export const ongoingProjects: OngoingProject[] = [
  {
    slug: 'camhire',
    name: 'CamHire',
    description: 'Vehicle-hire platform currently being refined for a smooth discovery and enquiry experience.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    progress: 70,
    status: 'In development',
  },
  {
    slug: 'medconnect',
    name: 'MedConnect',
    description: 'Healthcare-focused platform progressing through interface and core feature development.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    progress: 55,
    status: 'Building core features',
  },
  {
    slug: 'chasindecor',
    name: 'ChasinDecor',
    description: 'A décor storefront taking shape with product presentation and shopping flows in progress.',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    progress: 45,
    status: 'Design and development',
  },
];
