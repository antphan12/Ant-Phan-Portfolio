// Project data - customize this with your actual projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with user authentication, shopping cart, payment integration, and admin dashboard. Features include product management, order tracking, and real-time inventory updates.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
    category: "fullstack",
    image: "/images/projects/ecommerce.jpg",
    liveDemo: "https://your-ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce-project",
    featured: true,
    highlights: [
      "Secure user authentication and authorization",
      "Payment processing with Stripe integration",
      "Real-time inventory management",
      "Responsive design for all devices"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team collaboration features, drag-and-drop functionality, and progress tracking. Built for teams to manage projects efficiently.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Tailwind CSS"],
    category: "fullstack",
    image: "/images/projects/taskmanager.jpg",
    liveDemo: "https://your-taskmanager-demo.com",
    github: "https://github.com/yourusername/task-manager",
    featured: true,
    highlights: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task organization",
      "Team member management",
      "Progress tracking and analytics"
    ]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive charts, weather maps, and severe weather alerts. Features beautiful data visualizations and offline support.",
    technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3", "Service Workers"],
    category: "frontend",
    image: "/images/projects/weather.jpg",
    liveDemo: "https://your-weather-demo.com",
    github: "https://github.com/yourusername/weather-dashboard",
    featured: false,
    highlights: [
      "Interactive weather data visualization",
      "Location-based forecasting",
      "Offline functionality",
      "Responsive design"
    ]
  },
  {
    id: 4,
    title: "RESTful API Service",
    description: "A scalable REST API with authentication, rate limiting, comprehensive documentation, and microservices architecture. Includes automated testing and CI/CD pipeline.",
    technologies: ["Node.js", "Express", "JWT", "Swagger", "Docker", "Jest"],
    category: "backend",
    image: "/images/projects/api.jpg",
    liveDemo: "https://your-api-docs.com",
    github: "https://github.com/yourusername/rest-api",
    featured: false,
    highlights: [
      "Comprehensive API documentation",
      "Rate limiting and security measures",
      "Automated testing with Jest",
      "Docker containerization"
    ]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with React and modern design principles. Features smooth animations, dark mode toggle, and optimized performance.",
    technologies: ["React", "CSS3", "Vite", "React Router", "Framer Motion"],
    category: "frontend",
    image: "/images/projects/portfolio.jpg",
    liveDemo: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
    featured: false,
    highlights: [
      "Modern responsive design",
      "Smooth animations with Framer Motion",
      "Dark mode support",
      "Performance optimized"
    ]
  }
];

// Skills data
export const skills = {
  frontend: [
    "React", "JavaScript", "TypeScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Redux", "Next.js", "Vue.js", "SASS"
  ],
  backend: [
    "Node.js", "Express", "Python", "Django", "FastAPI",
    "RESTful APIs", "GraphQL", "JWT", "OAuth", "Microservices"
  ],
  database: [
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Firebase"
  ],
  tools: [
    "Git", "Docker", "AWS", "Vercel", "Netlify", "Figma", 
    "VS Code", "Postman", "Jest", "Cypress"
  ]
};

// Experience data
export const experience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    description: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    description: "Built responsive user interfaces and improved user experience across multiple web applications. Worked closely with designers to implement pixel-perfect designs.",
    technologies: ["React", "JavaScript", "CSS3", "Figma"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Startup Co.",
    period: "2021 - 2022",
    description: "Gained experience in full-stack development, learned modern frameworks, and contributed to various projects in an agile development environment.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"]
  }
];

// Contact information
export const contactInfo = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  location: "Your City, State"
};
