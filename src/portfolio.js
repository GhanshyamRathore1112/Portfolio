const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  
  name: 'Ghanhyam Rathore',
  role: 'Full Stack Developer',
  description:
    'Welcome to my portfolio! I am a final-year B.Tech undergrad passionate about web development. Proficient in MERN Stack, TypeScript, and Next.js, I bring creative solutions to life. With a solid foundation in Data Structures and Algorithms, I thrive on tackling challenges head-on. Explore my projects and discover how my skills and enthusiasm converge to create impactful digital experiences.',
  resume: 'https://drive.google.com/file/d/10Gf6fAFldaVdyM7OVqo4A4QBSOuFkKpo/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/ghanshyam-rathore-6130a2229/',
    github: 'https://github.com/GhanshyamRathore1112',
    leetcode: 'https://leetcode.com/rathore1112/',
  },
}

const projects = [
  {
    name: 'Movizz',
    description:
      "A cool movie app! The main page shows what's hot, popular, and highly rated in movies and TV shows. You can easily search for your favorite movies and shows based on different types, making it super fun to find what you love",
    stack: ['React','Redux','SASS'],
    sourceCode: 'https://github.com/GhanshyamRathore1112/Movizz',
    livePreview: 'https://movizz-psi.vercel.app/',
  },
  {
    name: 'Discover Places',
    description:
      "A handy places app that makes finding spots a breeze! Using Google's API, the app fetches places based on your text searches. Whether it's cafes, hotels, gas stations, banks, or more, you can easily discover and explore various places with just a few taps",
    stack: ['TypeScript', 'Nextjs','Tailwaid CSS'],
    sourceCode: 'https://github.com/GhanshyamRathore1112/Discover_Places',
    livePreview: 'https://discover-places-orcin.vercel.app/',
  },
  {
    name: 'Hotel Reservation',
    description:
      "A user-friendly hotel reservation app for easy exploration, availability checks, and hassle-free hotel additions by administrators. Go-to platform for seamless travel planning",
    stack: ['MERN', 'JWT auth', 'Context API'],
    sourceCode: 'https://github.com/GhanshyamRathore1112/Hotel_Booking_MERN',
    livePreview: '',
  },
  
]

const skills = [
  'HTML',
  'CSS',
  'JAVA',
  'C',
  'JavaScript',
  'TypeScript',
  'React',
  'Nextjs',
  'Redux',
  'Data Structure',
  'Algorithms',
  'SASS',
  'Material UI',
  'MongoDB',
  'Bootstrap',
]

const contact = {
  email: 'ghanshyam.rathore1112@gmail.com',
}

export { header, about, projects, skills, contact }
