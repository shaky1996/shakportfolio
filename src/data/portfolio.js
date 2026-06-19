export const profile = {
    name: 'Shak Yuldashev',
    role: 'Software Engineer',
    email: 'shak.yuldashev@gmail.com',
    github: 'https://github.com/shaky1996',
    linkedin: 'https://www.linkedin.com/in/shak-yuldashev/',
    resume: '/Shak-Yuldashev-Resume.pdf'
};

export const aboutTimeline = [
  {
    year: '2020',
    title: 'Associate Degree',
    subtitle: 'Business Administration',
    organization: 'Montgomery County Community College',
  },
  {
    year: '2024',
    title: 'Full Stack Web & Mobile Development',
    subtitle: 'Nucamp Bootcamp',
  },
  {
    year: '2026',
    title: 'Bachelor of Science',
    subtitle: 'Software Engineering',
    organization: 'Western Governors University',
  },
  {
    year: 'Today',
    title: 'Software Engineer',
    subtitle: 'Building production applications',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    description:
      'Responsive, accessible interfaces built with modern component-driven tools.',
    items: [
      ['React', 'react', 'cyan'],
      ['TypeScript', 'typescript', 'blue'],
      ['JavaScript', 'javascript', 'yellow'],
      ['HTML5', 'html', 'orange'],
      ['CSS3', 'css', 'blue'],
      ['Tailwind CSS', 'tailwind', 'cyan'],
    ],
  },
  {
    title: 'Mobile',
    description:
      'Cross-platform mobile experiences focused on usability and native performance.',
    items: [
      ['React Native', 'react', 'cyan'],
      ['Expo', 'expo', 'white'],
      ['iOS', 'ios', 'white'],
      ['Android', 'android', 'green'],
    ],
  },
  {
    title: 'Backend',
    description:
      'Reliable server-side applications, APIs, and business logic.',
    items: [
      ['Node.js', 'node', 'green'],
      ['Express.js', 'express', 'white'],
      ['Java', 'java', 'orange'],
      ['Spring Boot', 'spring', 'green'],
    ],
  },
  {
    title: 'Database',
    description:
      'Structured data modeling, querying, and persistence across SQL and NoSQL systems.',
    items: [
      ['PostgreSQL', 'postgresql', 'blue'],
      ['MongoDB', 'mongodb', 'green'],
      ['SQL', 'sql', 'white'],
    ],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Deployment, automation, containers, and cloud infrastructure workflows.',
    items: [
      ['AWS', 'aws', 'orange'],
      ['GitHub Actions', 'githubActions', 'blue'],
      ['CI/CD', 'cicd', 'cyan'],
      ['Git', 'git', 'orange'],
      ['Docker', 'docker', 'blue'],
    ],
  },
]

export const projects = [
    {
        title: 'CDL Wallet',
        description:
            'Mobile app for drivers to securely store documents, track expiration dates, get notifications, and share important docs.',
        reason: 'CDL Wallet was built to solve a real problem in the trucking industry. Many CDL drivers keep important documents scattered across their phone gallery, screenshots, text messages, or paper folders. Because of that, drivers often struggle to quickly find documents when they need them, miss expiration dates, or forget to renew important records.',
        tags: ['React Native', 'Expo', 'JavaScript', 'RevenueCat'],
        image: '/projects/cdl-wallet.png',

        primaryLabel: 'Live App',
        primaryUrl: 'https://apps.apple.com/us/app/cdl-wallet/id6768152456',
        githubUrl: 'https://github.com/shaky1996/cdl_wallet'
    },
    {
        title: 'IFTA Management System',
        description:
            'Web application to manage fuel tax reporting. Upload miles and fuel data and generate accurate IFTA reports.',
        reason: 'I wanted to reduce the manual work and errors involved in quarterly IFTA reporting by turning mileage and fuel records into a simpler digital workflow.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        image: '/projects/ifta-management.png',
        imagePosition: 'center 22%',
        primaryLabel: 'View Project',
        primaryUrl: profile.github,
        githubUrl: profile.github
    },
    {
        title: 'WGU Capstone Project',
        description:
            'Travel management system built with Java Spring Boot and PostgreSQL database.',
        reason: 'This capstone project was built to demonstrate a complete production-style application using Java, Spring Boot, relational data, authentication, and server-rendered interfaces.',
        tags: ['Java', 'Spring Boot', 'Thymeleaf', 'PostgreSQL'],
        image: '/projects/wgu-capstone.png',
        imagePosition: 'center 24%',
        primaryLabel: 'View Project',
        primaryUrl: profile.github,
        githubUrl: profile.github
    }
];

export const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'Dec 2023',
    pdf: '/certificates/aws-cloud-practitioner.pdf',
  },
  {
    title: 'CompTIA Project+',
    issuer: 'CompTIA',
    issued: 'Nov 2023',
    pdf: '/certificates/comptia-project-plus.pdf',
  },
  {
    title: 'Front-End Developer',
    issuer: 'WGU',
    issued: 'May 2024',
    pdf: '/certificates/wgu-front-end.pdf',
  },
  {
    title: 'Back-End Development',
    issuer: 'NuCamp',
    issued: 'Course Certificate',
    pdf: '/certificates/backend-development.pdf',
  },
]
