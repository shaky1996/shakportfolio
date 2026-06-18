export const profile = {
  name: 'Shak Yuldashev',
  role: 'Software Engineer',
  email: 'shak.yuldashev@gmail.com',
  github: 'https://github.com/shaky1996',
  linkedin: 'https://www.linkedin.com/in/shakyuldashev',
  resume: '/Shak-Yuldashev-Resume.pdf',
}

export const stats = [
  { value: '2+', label: 'Years Development Experience', icon: 'code' },
  { value: 'BS', label: 'Software Engineering (WGU)', icon: 'degree' },
  { value: 'AWS', label: 'Cloud Practitioner Certified', icon: 'cloud' },
  { value: '1', label: 'Published Mobile Application', icon: 'rocket' },
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
      ['MongoDB', '◆', 'green'],
      ['SQL', '▤', 'white'],
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
    tags: ['React Native', 'Expo', 'TypeScript', 'RevenueCat'],
    type: 'mobile',
    primaryLabel: 'Live App',
    primaryUrl: 'https://apps.apple.com/',
    githubUrl: profile.github,
  },
  {
    title: 'IFTA Management System',
    description:
      'Web application to manage fuel tax reporting. Upload miles and fuel data and generate accurate IFTA reports.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    type: 'dashboard',
    primaryLabel: 'View Project',
    primaryUrl: profile.github,
    githubUrl: profile.github,
  },
  {
    title: 'WGU Capstone Project',
    description:
      'Travel management system built with Java Spring Boot and PostgreSQL database.',
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'PostgreSQL'],
    type: 'table',
    primaryLabel: 'View Project',
    primaryUrl: profile.github,
    githubUrl: profile.github,
  },
]

export const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'Dec 2023',
    mark: 'aws',
    color: 'orange',
    url: 'https://www.credly.com/',
  },
  {
    title: 'CompTIA Project+',
    issuer: 'CompTIA',
    issued: 'Nov 2023',
    mark: 'P+',
    color: 'red',
    url: 'https://www.credly.com/',
  },
  {
    title: 'ITIL 4 Foundation',
    issuer: 'PeopleCert',
    issued: 'Oct 2023',
    mark: 'ITIL',
    color: 'purple',
    url: 'https://www.peoplecert.org/',
  },
  {
    title: 'Front-End Developer',
    issuer: 'WGU',
    issued: 'May 2024',
    mark: 'WGU',
    color: 'blue',
    url: 'https://www.wgu.edu/',
  },
  {
    title: 'Back-End Developer',
    issuer: 'WGU',
    issued: 'May 2024',
    mark: 'WGU',
    color: 'blue',
    url: 'https://www.wgu.edu/',
  },
]
