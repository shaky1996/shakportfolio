export const profile = {
  name: 'Shak Yuldashev',
  role: 'Software Engineer',
  email: 'shak.yuldashev@gmail.com',
  github: 'https://github.com/shaky1996',
  linkedin: 'https://www.linkedin.com/in/shakyuldashev',
  resume: '/Shak-Yuldashev-Resume.pdf',
}

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
    items: [
      ['React', '⚛', 'cyan'],
      ['TypeScript', 'TS', 'blue'],
      ['JavaScript', 'JS', 'yellow'],
      ['HTML5', '5', 'orange'],
      ['CSS3', '3', 'blue'],
      ['Tailwind CSS', '〰', 'cyan'],
    ],
  },
  {
    title: 'Mobile',
    items: [
      ['React Native', '⚛', 'cyan'],
      ['Expo', '▲', 'white'],
      ['iOS', '●', 'white'],
      ['Android', '♟', 'green'],
    ],
  },
  {
    title: 'Backend',
    items: [
      ['Node.js', 'JS', 'green'],
      ['Express.js', 'ex', 'white'],
      ['Java', '☕', 'orange'],
      ['Spring Boot', '◆', 'green'],
    ],
  },
  {
    title: 'Database',
    items: [
      ['PostgreSQL', 'Pg', 'blue'],
      ['MongoDB', 'MB', 'green'],
      ['SQL', 'SQL', 'white'],
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      ['AWS', 'aws', 'orange'],
      ['GitHub Actions', '◎', 'blue'],
      ['CI/CD', '∞', 'cyan'],
      ['Git', '◇', 'orange'],
      ['Docker', '▰', 'blue'],
    ],
  },
]

export const projects = [
    {
        title: 'CDL Wallet',
        description:
            'Mobile app for drivers to securely store documents, track expiration dates, get notifications, and share important PDFs.',
        tags: ['React Native', 'Expo', 'JavaScript', 'RevenueCat'],
        image: '/projects/cdl-wallet.png',
        imagePosition: 'center 58%',
        primaryLabel: 'Live App',
        primaryUrl: 'https://apps.apple.com/us/app/cdl-wallet/id6768152456',
        githubUrl: profile.github
    },
    {
        title: 'IFTA Management System',
        description:
            'Web application to manage fuel tax reporting. Upload miles and fuel data and generate accurate IFTA reports.',
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
