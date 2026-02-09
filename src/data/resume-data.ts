// Skill tier types
export type SkillTier = "mastered" | "familiar";
export type SkillItem = string | { name: string; tier: SkillTier };

// Official documentation URLs for skills and technologies
export const skillUrls: Record<string, string> = {
  // Frontend
  'Tailwind': 'https://tailwindcss.com',
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org',
  'React': 'https://react.dev',
  'HTML & CSS': 'https://developer.mozilla.org/en-US/docs/Web',
  'Angular': 'https://angular.dev',
  // Backend
  'Java': 'https://www.oracle.com/java/',
  'Spring Boot': 'https://spring.io/projects/spring-boot',
  'Spring Security': 'https://spring.io/projects/spring-security',
  'Dagger 2': 'https://dagger.dev',
  'JPA/Hibernate': 'https://hibernate.org/orm',
  'Maven': 'https://maven.apache.org',
  'GraphQL': 'https://graphql.org',
  'tRPC': 'https://trpc.io',
  'oRPC': 'https://orpc.dev',
  'Drizzle ORM': 'https://orm.drizzle.team',
  'Gradle': 'https://gradle.org',
  'RESTful API': 'https://restfulapi.net',
  // Cloud
  'AWS DynamoDB': 'https://aws.amazon.com/dynamodb',
  'AWS RDS': 'https://aws.amazon.com/rds',
  'AWS Lambda': 'https://aws.amazon.com/lambda',
  'Pulumi': 'https://www.pulumi.com',
  'SST': 'https://sst.dev',
  'Amazon S3': 'https://aws.amazon.com/s3',
  'AWS IoT Core': 'https://aws.amazon.com/iot-core',
  'AWS CloudFront': 'https://aws.amazon.com/cloudfront',
  'AWS CloudWatch': 'https://aws.amazon.com/cloudwatch',
  'Vercel': 'https://vercel.com',
  'OpenFaaS': 'https://www.openfaas.com',
  // AI Tools
  'Cursor IDE': 'https://cursor.sh',
  'OpenCode': 'https://opencode.ai',
  'Claude Code': 'https://www.claude.com/product/claude-code',
  'Vercel v0': 'https://v0.dev',
  'Vercel AI SDK': 'https://sdk.vercel.ai',
  'Lovable': 'https://lovable.dev',
  'GitHub Copilot': 'https://github.com/features/copilot',
  // DevOps & Testing
  'JUnit': 'https://junit.org',
  'AssertJ': 'https://assertj.github.io',
  'Mockito': 'https://site.mockito.org',
  'Rest Assured': 'https://rest-assured.io',
  'TestContainers': 'https://testcontainers.com',
  'Cucumber': 'https://cucumber.io',
  'TDD/BDD': 'https://cucumber.io',
  'Docker': 'https://www.docker.com',
  'GitHub Actions': 'https://docs.github.com/en/actions',
  'GitLab CI/CD': 'https://docs.gitlab.com/ee/ci',
  'Airflow': 'https://airflow.apache.org',
  // Tools & Databases
  'MySQL': 'https://dev.mysql.com',
  'PostgreSQL': 'https://www.postgresql.org',
  'H2 Database': 'https://h2database.com',
  'Quarkus': 'https://quarkus.io',
  'OpenAPI': 'https://spec.openapis.org',
  'Postman': 'https://www.postman.com',
  'Keycloak': 'https://www.keycloak.org',
  // Architecture
  'SOLID Principles': 'https://en.wikipedia.org/wiki/SOLID',
  'Design Patterns': 'https://refactoring.guru/design-patterns',
  'Clean Code': 'https://www.oreilly.com/library/view/clean-code-a/9780136083238',
  'Microservices': 'https://microservices.io',
  'Solution Architecture': 'https://en.wikipedia.org/wiki/Solution_architecture',
  // Leadership (these may not have direct documentation links)
  'Project Management': 'https://www.pmi.org',
  'Agile/SCRUM': 'https://www.scrum.org',
  'Mentoring': 'https://en.wikipedia.org/wiki/Mentorship',
  'Documentation': 'https://en.wikipedia.org/wiki/Software_documentation',
  // IoT
  'Arduino': 'https://www.arduino.cc',
  'MQTT': 'https://mqtt.org',
  // Additional tools from projects
  'Apache Derby': 'https://db.apache.org/derby',
  'EJB': 'https://docs.oracle.com/cd/E19798-01/821-1841/6nmq2cpg8/index.html',
  'PrimeFaces': 'https://www.primefaces.org',
  'JSF': 'https://jakarta.ee/specifications/faces',
  'Node.js': 'https://nodejs.org',
  'SOAP': 'https://en.wikipedia.org/wiki/SOAP',
};

// Personal Information
export const personalInfo = {
  name: 'Akshat Nigam',
  title: 'Full Stack Developer | Mentor',
  summary: 'Akshat is a highly accomplished full-stack software engineer with 13+ years of experience in designing, building, scaling and maintaining enterprise-grade web applications. Adept in technologies including Java, Spring Boot, Hibernate, TypeScript, React and SQL/No-SQL Databases, he thrives in fast-paced environments and excels in leading cross-functional teams to deliver robust, user-centric and high-quality solutions. His strengths in cross-functional leadership, technical mentorship, and architecting cloud solutions enable him to bridge business needs and technical excellence, making him an invaluable asset for organizations seeking quality and innovation.',
  contact: {
    email: 'akshat.nigam15@gmail.com',
    phone: '+919079997603',
    linkedin: 'https://www.linkedin.com/in/nigamakshat',
    github: '',
  } as {
    email?: string;
    phone?: string;
    linkedin?: string;
    github?: string;
  },
};

// Skills organized by category
export const skills: Record<string, SkillItem[]> = {
  frontend: [
    { name: 'Tailwind', tier: 'mastered' },
    { name: 'JavaScript', tier: 'mastered' },
    { name: 'TypeScript', tier: 'mastered' },
    { name: 'React', tier: 'mastered' },
    'HTML & CSS',
    'Angular',
  ],
  backend: [
    { name: 'Java', tier: 'mastered' },
    { name: 'Spring Boot', tier: 'mastered' },
    { name: 'Spring Security', tier: 'mastered' },
    { name: 'Dagger 2', tier: 'mastered' },
    { name: 'JPA/Hibernate', tier: 'mastered' },
    { name: 'Maven', tier: 'mastered' },
    { name: 'GraphQL', tier: 'mastered' },
    { name: 'tRPC', tier: 'mastered' },
    { name: 'oRPC', tier: 'mastered' },
    { name: 'Drizzle ORM', tier: 'mastered' },
    'Gradle',
    'RESTful API'
  ],
  cloud: [
    { name: 'AWS DynamoDB', tier: 'mastered' },
    { name: 'AWS RDS', tier: 'mastered' },
    { name: 'AWS Lambda', tier: 'mastered' },
    { name: 'Pulumi', tier: 'mastered' },
    { name: 'SST', tier: 'mastered' },
    'Amazon S3',
    'AWS IoT Core',
    'AWS CloudFront',
    'AWS CloudWatch',
    'Vercel',
    'OpenFaaS',
  ],
  aiTools: [
    { name: 'Cursor IDE', tier: 'mastered' },
    { name: 'OpenCode', tier: 'mastered' },
    'Claude Code',
    'Vercel v0',
    'Vercel AI SDK',
    'Lovable',
    'GitHub Copilot',
  ],
  devops: [
    { name: 'JUnit', tier: 'mastered' },
    { name: 'AssertJ', tier: 'mastered' },
    { name: 'Mockito', tier: 'mastered' },
    { name: 'Rest Assured', tier: 'mastered' },
    { name: 'TestContainers', tier: 'mastered' },
    { name: 'Cucumber', tier: 'mastered' },
    { name: 'TDD/BDD', tier: 'mastered' },
    'Docker',
    'GitHub Actions',
    'GitLab CI/CD',
    'Airflow',
  ],
  tools: [
    { name: 'MySQL', tier: 'mastered' },
    { name: 'PostgreSQL', tier: 'mastered' },
    { name: 'AWS DynamoDB', tier: 'mastered' },
    'H2 Database',
    'OpenFaaS',
    'Quarkus',
    'OpenAPI',
    'Postman',
    'Keycloak',
  ],
  architecture: [
    { name: 'SOLID Principles', tier: 'mastered' },
    { name: 'Design Patterns', tier: 'mastered' },
    { name: 'Clean Code', tier: 'mastered' },
    'Microservices',
    'Solution Architecture',
  ],
  leadership: [
    { name: 'Project Management', tier: 'mastered' },
    { name: 'Agile/SCRUM', tier: 'mastered' },
    { name: 'Mentoring', tier: 'mastered' },
    { name: 'Documentation', tier: 'mastered' },
  ],
  iot: [
    'Arduino',
    'MQTT',
    'AWS IoT Core',
  ],
};

// Project interface
export interface Project {
  id: string;
  title: string;
  dateRange: string;
  company: string;
  client?: string;
  vertical: string;
  description: string;
  excerpt: string;
  technologies: string[];
  contributions: string[];
}

// All projects in chronological order (newest first)
export const projects: Project[] = [
  {
    id: 'telecom-network-monitoring',
    title: 'Telecom Network Monitoring Platform',
    dateRange: 'Aug 2024 - Jul 2025',
    company: 'Celebal Technologies',
    client: 'Tata Communications Limited',
    vertical: 'Telecom',
    description: 'This enterprise-grade monitoring platform provides telecom clients with a scalable, centralized solution to oversee critical network infrastructure. It delivers real-time network health management capabilities and proactive monitoring insights, enabling operators to anticipate issues and ensure high service availability. The system features a comprehensive access control layer and an intuitive web dashboard for visualizing network performance.',
    excerpt: 'Enterprise-grade monitoring platform offering real-time network health, proactive insights, granular access control, and a dashboard to visualize performance.',
    technologies: ['Java', 'Spring Boot', 'Keycloak', 'JPA/Hibernate', 'TypeScript', 'Angular', 'Docker', 'Spring Security'],
    contributions: [
      'Architected and deployed a scalable, microservices-based monitoring platform using Java and Spring Boot, containerizing all components with Docker to ensure high availability for enterprise clients.',
      'Spearheaded the integration of Keycloak\'s Authorization Services to establish a robust access control system, leveraging Requesting Party Tokens (RPTs) to enforce granular, role-based, group-based, and user-specific security policies validated as Spring Security Authorities.',
      'Designed and implemented high-performance RESTful APIs using Spring Boot and JPA/Hibernate for the efficient collection, persistence, and retrieval of real-time network monitoring metrics.',
      'Developed a responsive, real-time monitoring dashboard using Angular and TypeScript, providing stakeholders with intuitive data visualizations and actionable network health alerts.',
      'Implemented a multi-layered access control strategy by securing the Angular UI with route guards and dynamic component rendering, driven by permissions derived from Keycloak Authorization Services through Requesting Party Tokens (RPTs) and validated against Spring Security authorities.',
    ],
  },
  {
    id: 'enterprise-data-orchestration',
    title: 'Enterprise Data Orchestration & Analytics Platform',
    dateRange: 'Nov 2020 - Apr 2024',
    company: 'InfoObjects',
    client: 'Northwestern Mutual',
    vertical: 'FinTech',
    description: 'A unified data platform designed to provide organization-wide business intelligence by seamlessly integrating historical and real-time data workflows. The system leverages a high-throughput, microservices-based architecture to support complex data processing and orchestration. It empowers business users with a sophisticated analytics dashboard for strategic, data-driven decision-making.',
    excerpt: 'Unified data platform combining historical and real-time workflows with a high-throughput microservices architecture and an analytics dashboard for BI.',
    technologies: ['Java', 'Spring Boot', 'OpenFaaS', 'Quarkus', 'JPA/Hibernate', 'Gradle', 'TypeScript', 'React', 'Docker', 'GitLab CI/CD', 'RESTful API', 'GraphQL', 'AWS'],
    contributions: [
      'Pioneered the end-to-end architecture of a unified data orchestration platform using Java and Quarkus, integrating OpenFaaS for serverless functions. This approach enabled complex, event-driven workflows that achieved both scale-to-zero and scale-from-zero capabilities without any dropped traffic.',
      'Constructed a modular data ingestion framework to optimize ETL processes for both batch and streaming scenarios, interfacing with diverse data sources using JPA/Hibernate and Spring Boot.',
      'Architected and implemented a dual-API strategy using Java and Quarkus to provide robust data access. This involved creating RESTful endpoints for standard operations and a GraphQL API that enabled complex, high-performance queries against refined data sets.',
      'Developed a sophisticated data analytics dashboard with React and TypeScript, empowering users to visualize, filter, and act upon complex data trends in real-time.',
      'Configured end-to-end CI/CD pipelines within GitLab CI/CD, orchestrating Gradle builds, Docker containerization, and the automated deployment of OpenFaaS serverless functions to accelerate delivery.',
    ],
  },
  {
    id: 'financial-services-analytics',
    title: 'Financial Services Data & Analytics Ecosystem',
    dateRange: 'Jun 2019 - Oct 2020',
    company: 'InfoObjects',
    client: 'FIS Global',
    vertical: 'FinTech',
    description: 'A comprehensive data ecosystem for financial institutions, designed to unify siloed data from credit and debit platforms into a single source of truth. The platform provides secure data access through advanced APIs and enables sophisticated analytics for business intelligence.',
    excerpt: 'Data ecosystem that unifies credit/debit platform data into a single source of truth with secure APIs and advanced analytics for business intelligence.',
    technologies: ['Java', 'JPA/Hibernate', 'Docker', 'RESTful API', 'GraphQL', 'AWS', 'Dagger 2', 'Amazon DynamoDB', 'Amazon S3', 'Maven', 'Airflow'],
    contributions: [
      'Orchestrated complex data workflows with Apache Airflow and engineered a no-code interface, empowering business analysts to manage sophisticated ETL operations independently.',
      'Architected a secure, dual-API layer with RESTful and GraphQL endpoints, providing internal teams and external partners with flexible data access patterns.',
      'Led a system-wide optimization initiative that achieved a 50% performance improvement by implementing advanced caching strategies and query optimization.',
      'Implemented robust data validation and transformation pipelines using Java and Spring Boot, ensuring data quality and consistency across multiple source systems.',
      'Designed and built a comprehensive monitoring and alerting system to track data pipeline health and notify stakeholders of any anomalies in real-time.',
    ],
  },
  {
    id: 'automotive-aftersales-crm',
    title: 'Automotive After-Sales & CRM Platform',
    dateRange: 'Jul 2017 - May 2019',
    company: 'ATCS',
    client: 'Daimler AG',
    vertical: 'Automotive',
    description: 'A comprehensive software solution for the automotive industry, designed to manage key customer accounts and service operations. The platform integrates customer relationship management with after-sales service workflows, enabling dealerships to provide superior customer experiences.',
    excerpt: 'Automotive platform integrating CRM and after-sales workflows to manage key accounts, service operations, and dealership customer experience.',
    technologies: ['Java', 'JPA/Hibernate', 'Maven', 'EJB', 'PrimeFaces', 'JSF'],
    contributions: [
      'Engineered a complete customer lifecycle management system using EJB session beans to handle complex business logic and data transformations.',
      'Constructed a robust data persistence layer using JPA/Hibernate to manage complex customer hierarchies and multi-tenant data isolation.',
      'Built advanced reporting dashboards with PrimeFaces data visualization components, enabling management to track KPIs and business metrics in real-time.',
      'Implemented comprehensive service appointment scheduling and tracking functionality, integrating with workshop management systems.',
      'Developed automated customer communication workflows, including service reminders and promotional campaigns.',
    ],
  },
  {
    id: 'automotive-workshop-dealer',
    title: 'Automotive Workshop & Dealer Integration Platform',
    dateRange: 'Jan 2017 - Jun 2017',
    company: 'ATCS',
    client: 'Daimler AG',
    vertical: 'Automotive',
    description: 'A critical integration platform developed for the Mercedes-Benz dealership network to synchronize workshop and dealer management systems. The solution streamlines operations by connecting technical service systems with dealer inventory and customer management.',
    excerpt: 'Integration platform syncing workshop and dealer systems to streamline service operations, inventory coordination, and customer management across dealerships.',
    technologies: ['Java', 'JPA/Hibernate', 'Maven', 'SOAP', 'Angular', 'EJB'],
    contributions: [
      'Orchestrated the seamless integration between the workshop (XIW) and dealer (DMS) systems using SOAP web services, ensuring real-time data synchronization.',
      'Developed automated parts requisition workflows using EJB session beans, which integrated XIW technical specifications with DMS inventory management.',
      'Implemented a sophisticated service appointment scheduling algorithm that synchronized workshop capacity with dealer customer schedules.',
      'Built a responsive Angular-based dashboard for service advisors to track job status, parts availability, and customer information in real-time.',
      'Created comprehensive error handling and retry mechanisms to ensure data consistency across both systems during network interruptions.',
    ],
  },
  {
    id: 'cloud-iot-franchise',
    title: 'Cloud-Based IoT Platform for Franchise Club Management',
    dateRange: 'Jan 2016 - May 2017',
    company: 'Automaton',
    vertical: 'IoT',
    description: 'An enterprise-grade platform designed to centrally manage a franchise network of pool and billiards clubs, integrating IoT sensors and cloud-based analytics. The system provides real-time monitoring of equipment usage, automated maintenance alerts, and centralized billing across all franchise locations.',
    excerpt: 'Cloud IoT platform for franchise clubs with real-time equipment monitoring, automated maintenance alerts, cloud analytics, and centralized billing.',
    technologies: ['Java', 'JPA/Hibernate', 'Maven', 'Java Swing', 'Apache Derby', 'Arduino', 'IoT', 'MQTT', 'AWS'],
    contributions: [
      'Integrated scalable IoT automation by connecting Arduino-based controllers to AWS IoT Core using MQTT, enabling centralized device management and real-time data collection from all franchise locations.',
      'Established cloud-based fleet management using AWS IoT Device Management, enabling remote monitoring, firmware updates, and configuration of hundreds of physical devices.',
      'Developed a desktop management application using Java Swing that provided franchise owners with comprehensive dashboards for equipment monitoring and business analytics.',
      'Implemented automated billing systems that tracked equipment usage per customer session, integrating with point-of-sale systems for seamless payment processing.',
      'Created predictive maintenance algorithms that analyzed equipment sensor data to identify potential failures before they occurred, reducing downtime significantly.',
    ],
  },
  {
    id: 'enterprise-real-estate',
    title: 'Enterprise Real Estate Operations Platform',
    dateRange: 'Jan 2014 - Dec 2015',
    company: 'Automaton',
    vertical: 'Real Estate',
    description: 'A comprehensive desktop ERP application built for the real estate industry, providing tools for agent management, customer lifecycle tracking, and property inventory. The system streamlined real estate operations from lead generation through property sales.',
    excerpt: 'Desktop ERP for real estate operations covering agent management, customer lifecycle tracking, and property inventory from lead generation through sales.',
    technologies: ['Java', 'JPA/Hibernate', 'Maven', 'Java Swing', 'Apache Derby'],
    contributions: [
      'Developed a comprehensive agent management module to track agent profiles, performance metrics, territory assignments, and commission structures.',
      'Built an integrated customer lifecycle management system to track leads, customer preferences, and property viewing schedules from initial contact through to a successful sale.',
      'Engineered a unique user experience by extensively customizing Java Swing components, implementing custom renderers and a bespoke look-and-feel to create a branded and intuitive user interface.',
      'Implemented sophisticated property inventory management with search and filtering capabilities, including photo galleries and property comparison features.',
      'Created automated reporting tools for sales performance, commission calculations, and market trend analysis.',
    ],
  },
  {
    id: 'visual-programming-robotics',
    title: 'Visual Programming Tool for Educational Robotics',
    dateRange: 'Aug 2012 - Dec 2013',
    company: 'Automaton',
    vertical: 'EdTech',
    description: 'A desktop application designed to teach programming concepts to primary school children through educational robotics. The software features a unique 2x2 grid-based visual programming interface that simplifies coding, making it more accessible and intuitive for young learners compared to traditional tools. The application translates visual blocks into code to control real Arduino-based robots.',
    excerpt: 'Educational robotics app with a 2x2 grid-based visual programming interface that helps kids learn coding and generates Arduino code to control robots.',
    technologies: ['Java', 'JPA/Hibernate', 'Maven', 'Java Swing', 'Apache Derby', 'Arduino'],
    contributions: [
      'Developed the core 2x2 grid interface using Java Swing custom components, which allowed young students to build robot logic by dragging and dropping blocks.',
      'Implemented a visual programming compiler that translated the block arrangements into functional Arduino C++ code for controlling the educational robots.',
      'Built the project persistence feature using JPA/Hibernate and an Apache Derby database, enabling students to save and load their programming projects.',
      'Created a gamification system that tracked student progress and awarded badges for completing programming challenges, helping to encourage engagement.',
    ],
  },
];

// Testimonial interface
export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  type: 'colleague' | 'mentee';
}

// Testimonials
export const testimonials: Testimonial[] = [
  {
    name: 'Palash Kapoor',
    title: 'Business Development & Client Relationships, InfoObjects Inc.',
    quote: 'I had the pleasure of managing Akshat and can confidently say that he is one of the finest Java Developers and Architects I have ever worked with. His ability to grasp and master new technologies quickly is truly impressive. Akshat consistently demonstrated exceptional technical expertise, combined with a great attitude and outstanding presentation skills. His professionalism and dedication were evident in every project he undertook. It was a privilege to work with Akshat, and I would love the opportunity to collaborate with him again in the future. Highly recommended!',
    type: 'colleague',
  },
  {
    name: 'Anmol Jain',
    title: 'Full Stack Developer, FedEx Services',
    quote: 'I was particularly impressed by Akshat\'s ability to handle even the toughest code challenges—effortlessly. That skill often takes years to develop among application development professionals, but it seemed to come perfectly naturally to him. He pays attention to details and focus on improving the performance of the piece of code when other just focus on task to be completed on time. Akshat is a quick learner and just needs a couple of days to grasp on new technologies and frameworks. I would highly recommend him for his skills.',
    type: 'colleague',
  },
  {
    name: 'Dalin Kim',
    title: 'Staff Engineer, Thrivent',
    quote: 'Akshat and I worked together for few years, and it was always amazing to see his great software craftsmanship and passion for continuous learning. With his wide variety of knowledge, he brought many new ideas to the table that were influential and helpful to the larger group. He is highly technical and is a great leader with humility. I would highly recommend him for any technical leadership role.',
    type: 'colleague',
  },
  {
    name: 'Vikas Raj Karadia',
    title: 'Senior Site Reliability Engineer, Freshworks',
    quote: 'Being a fellow lead in our project, I was really impressed by the way he manages his/team\'s work and break down problem. His coding and communication skills are amazing too, it is rare to meet a person who loves fun as much as the work and keeping his cool minded attitude for any task he is given. Keep up the good work.',
    type: 'colleague',
  },
  {
    name: 'Mukul Sharma',
    title: 'Member of Technical Staff - Level 4, Verizon',
    quote: 'I rarely come across real talents who stand out like Akshat. I had the pleasure of working with Akshat for around three years at the ATCS, collaborating on several project teams. Akshat\'s ability to handle multiple projects was unlike any I\'ve seen before and made a dramatic increase in the productivity level of our company. No matter how tense a meeting, Akshat made sure everyone left with a smile. As a team member or a leader, Akshat earns my highest recommendation.',
    type: 'colleague',
  },
  {
    name: 'Bandhan Nawal',
    title: 'Technical Lead, Jubilant FoodWorks Ltd.',
    quote: 'I have worked directly with Akshat in a project and I am really impressed with his deep understanding and knowledge of Java and related design systems. If you are stuck somewhere, ask him, he will tell you 10 different approaches to solve the issue. Leading the team of 7 individuals in our project, he always assigns the work with proper analysis about the team member\'s expertise, so that it becomes very smooth to deliver the project on time. I highly recommend him for any of the Technical and Leadership Roles.',
    type: 'colleague',
  },
  {
    name: 'Swapnil Pandey',
    title: 'Lead Software Engineer, Netomi',
    quote: 'Few people have the opportunity to work with someone so awesome as Akshat! The clarity and understanding he developed of the project were commendable. He took charge of new feature developments and simultaneously proved to be a wonderful mentor to the junior devs. He will be an asset to any company!',
    type: 'mentee',
  },
  {
    name: 'Gaurav Sharma',
    title: 'Software Engineer III, Zemoso Technologies',
    quote: 'Working with Akshat has been an inspiring experience. His mentorship throughout the project helped me grow both technically and logically. He was always approachable during tech challenges, guiding me with clarity and patience. I\'ve learned a great deal from his problem-solving approach and leadership.',
    type: 'mentee',
  },
];

// Helper function to get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// Helper function to get previous and next projects
export function getAdjacentProjects(currentId: string): {
  prev: Project | null;
  next: Project | null;
} {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}
