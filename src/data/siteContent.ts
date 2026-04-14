import {
  Bot,
  Code2,
  Cpu,
  Globe,
  MessageCircle,
  Send,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Field = {
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
};

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export type Project = {
  name: string;
  type: string;
  status: string;
  summary: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fields", href: "/fields" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const fields: Field[] = [
  {
    title: "Programming",
    description: "Learn how to build websites, apps, and systems using modern programming languages.",
    longDescription: "Our programming track covers web development, mobile apps, backend systems, and software engineering fundamentals. Members learn through hands-on projects using modern languages and frameworks, building real applications from day one.",
    icon: Code2,
  },
  {
    title: "Cybersecurity",
    description: "Understand how to protect systems and data from digital threats.",
    longDescription: "The cybersecurity track teaches ethical hacking, network security, threat analysis, and secure coding practices. Members learn to identify vulnerabilities, protect digital assets, and understand the growing landscape of cyber threats.",
    icon: ShieldCheck,
  },
  {
    title: "Artificial Intelligence",
    description: "Explore intelligent systems that learn and make decisions.",
    longDescription: "Our AI track covers machine learning, neural networks, natural language processing, and computer vision. Members build intelligent applications, understand data-driven decision making, and explore the frontier of AI technology.",
    icon: Bot,
  },
  {
    title: "Robotics",
    description: "Build machines that interact with the physical world.",
    longDescription: "The robotics track combines hardware and software skills to create physical computing projects. Members work with sensors, actuators, microcontrollers, and embedded systems to build robots that solve real problems.",
    icon: Cpu,
  },
];

export const whatWeDo = [
  "Tech training sessions",
  "Robotics workshops",
  "Cybersecurity awareness",
  "Programming education",
  "AI exploration",
  "Community-driven projects",
];

export const teamMembers: TeamMember[] = [
  {
    name: "Augustine Okechukwu Chima",
    role: "Founder / CEO",
    description: "Visionary leader driving TechCrew's mission to empower the next generation of innovators through technology and community-building.",
    image: "/images/team/founder-ceo.jpg",
  },
  {
    name: "Firdaus Omar",
    role: "Co-founder",
    description: "Strategic thinker and operations lead, ensuring TechCrew delivers impactful programs and builds lasting partnerships.",
    image: "/images/team/co-founder.jpg",
  },
  {
    name: "David Mensah",
    role: "Lead Facilitator",
    description: "Experienced educator who designs and delivers engaging tech training sessions across all four core fields.",
    image: "/images/team/facilitator.jpg",
  },
  {
    name: "Fatima Bello",
    role: "Program Coordinator",
    description: "Organized professional who manages project timelines, events, and community engagement initiatives.",
    image: "/images/team/coordinator.jpg",
  },
  {
    name: "Emmanuel Nwosu",
    role: "Lead Designer",
    description: "Creative mind behind TechCrew's visual identity, crafting designs that inspire and communicate our mission.",
    image: "/images/team/designer.jpg",
  },
  {
    name: "Grace Afolabi",
    role: "Community Volunteer",
    description: "Passionate student advocate helping onboard new members and fostering a welcoming, inclusive community culture.",
    image: "/images/team/volunteer.jpg",
  },
];

export const teamRoles = [
  "Founder / CEO",
  "Co-founder",
  "Facilitators",
  "Coordinators",
  "Designers",
  "Volunteers",
];

export const projects: Project[] = [
  {
    name: "SkillSprint Labs",
    type: "Community Program",
    status: "In Planning",
    summary: "A guided monthly build sprint where members ship practical web and AI tools collaboratively.",
  },
  {
    name: "SecureStart",
    type: "Cybersecurity Initiative",
    status: "Pilot",
    summary: "A beginner-first awareness campaign that teaches safe digital behavior in schools and communities.",
  },
  {
    name: "RoboMakers",
    type: "Robotics Track",
    status: "Prototype",
    summary: "Hands-on robotics learning path with simple automation challenges, sensor projects, and demo days.",
  },
  {
    name: "CodeBridge",
    type: "Education Platform",
    status: "Concept",
    summary: "An interactive platform connecting mentors with learners for structured programming education paths.",
  },
  {
    name: "AI for Good",
    type: "Research Initiative",
    status: "In Planning",
    summary: "Exploring how artificial intelligence can solve local challenges in healthcare, agriculture, and education.",
  },
  {
    name: "TechCrew Hub",
    type: "Community Space",
    status: "Vision",
    summary: "A physical and digital hub where members collaborate, learn, and build projects together year-round.",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Send },
  { label: "Instagram", href: "https://instagram.com", icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com", icon: Globe },
];

export const stats = [
  { value: "500+", label: "Community Members" },
  { value: "4", label: "Core Fields" },
  { value: "50+", label: "Training Sessions" },
  { value: "10+", label: "Active Projects" },
];
