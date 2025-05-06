import { 
  Code, 
  Cpu, 
  Globe, 
  GraduationCap, 
  LayoutGrid, 
  ShieldCheck
} from "lucide-react";

export type Skill = {
  name: string;
  icon: React.FC;
};

export const skills: Skill[] = [
  {
    name: "Web Development",
    icon: Globe,
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
  },
  {
    name: "Frontend Development",
    icon: LayoutGrid,
  },
  {
    name: "Cybersecurity",
    icon: ShieldCheck,
  },
  {
    name: "Programming",
    icon: Code,
  },
  {
    name: "Academic Research",
    icon: GraduationCap,
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Virtual Hackathon Platform",
    description: "A collaborative platform for virtual hackathons with real-time coding, video chat, and project submission features.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://vhp-platform.vercel.app",  // Add your actual demo link
    github: "https://github.com/yousufSKY/vhp-platform",  // Add your actual GitHub repo link
    tags: ["React", "Node.js", "WebRTC", "MongoDB"],
  },
  {
    id: 2,
    title: "Cynerra - Vulnerability Assessment and Risk Management",
    description: "A comprehensive security assessment platform for identifying vulnerabilities, managing risks, and generating detailed security reports.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://cynerra-security.vercel.app",  // Add your actual demo link
    github: "https://github.com/yousufSKY/cynerra",  // Add your actual GitHub repo link
    tags: ["Python", "React", "Security Tools", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "YUKTi - 2025 Regional Level Techno-Management Cultural Fest",
    description: "Official website for VTU's prestigious techno-cultural fest built with Python Flask and Supabase, featuring dynamic event registration, real-time participant updates, and seamless payment integration.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://yukti.vtucpgsklb.in",  // Your actual demo link
    github: "https://github.com/Shrinivas-03/yukti2025",  // Add your actual GitHub repo link
    tags: ["Python", "Flask", "Supabase", "JavaScript", "Tailwind CSS", "HTML5"],
  }
];

export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "CodeMates Ltd",
    duration: "Present",
    description: [
      "Developing and maintaining full-stack web applications using modern technologies and best practices",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing responsive and scalable features while ensuring optimal performance",
    ],
  },
  {
    id: 2,
    role: "Lead Web Developer (Frontend)",
    company: "VTU CPGS, Kalaburagi",
    duration: "Feb 2025 - Mar 2025",
    description: [
      "Led the development of yukti.vtucpgsklb.in using Flask and Supabase, achieving a 200% increase in event registrations",
      "Implemented robust security measures and optimized deployment on Render.com for high performance and cost efficiency",
      "Improved website accessibility score to 90+ using Lighthouse while maintaining a vulnerability-free codebase",
    ],
  },
];