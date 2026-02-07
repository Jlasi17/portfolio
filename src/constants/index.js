import {
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaCode
} from "react-icons/fa";

export const introText = `Computer Science undergraduate with hands-on experience in cloud-based application development, AI/ML systems, and containerized deployments. Familiar with Docker, cloud infrastructure on GCP, and building scalable backend services. Eager to learn DevOps, CI/CD automation, and AI infrastructure best practices while contributing to production-ready systems.`;


export const educationData = [
  {
    title: "Class X",
    job: "Bhashyam EM High School, Nellore",
    date: "2019-2020",
    contents: ["Percentage: 99.1%", "Excelled in academics with a focus on STEM subjects."],
  },
  {
    title: "Class XII, MPC",
    job: "Narayana Junior College, Nellore",
    date: "2020-2022",
    contents: ["Percentage: 94%", "Strong foundation in Maths, Physics, and Chemistry."],
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    job: "Amrita School of Engineering, Amritapuri",
    date: "2022-2026",
    contents: [
      "CGPA: 9.02/10",
      "Focused on software development, AI/ML, and cloud technologies.",
      "Participated in coding competitions and workshops."
    ],
  },
];

export const projects = [
  {
    title: "Federated Learning for Privacy-Preserving AI Systems",
    duration: "Jan 2026 – Present",
    description: [
      "Currently developing a federated learning framework to train machine learning models across decentralized clients without sharing raw data.",
      "Exploring client-server communication, model aggregation strategies, and privacy-preserving training workflows.",
      "Analyzing system performance, communication efficiency, and scalability challenges."
    ],
    color: "#0B4550",
    counter: "1/4"
  },
  {
    title: "Surplus – Smart Surplus Management System",
    duration: "May 2025 – June 2025",
    description: [
      "Built a cloud-based platform to connect vendors with surplus grocery items to beneficiaries.",
      "Containerized backend services using Docker to ensure consistent development environments.",
      "Enabled real-time tracking and efficient distribution using Google Cloud Platform and MongoDB.",
      "Designed the system with scalability and efficient resource usage in mind."
    ],
    color: "#0E5A68",
    counter: "2/4"
  },
  {
    title: "MemoryLane: Cognitive Care Platform",
    duration: "May 2025 – June 2025",
    description: [
      "Developed a full-stack web platform with role-based access for doctors, caregivers, and patients.",
      "Integrated AI/ML models into FastAPI-based APIs for MRI upload and dementia stage analysis.",
      "Implemented features including therapy sessions, cognitive games, and reporting dashboards."
    ],
    color: "#126F80",
    counter: "3/4"
  },
  {
    title: "SecureCrypto Pay",
    duration: "Nov 2024 – Dec 2024",
    description: [
      "Server-client bank transaction system with RSA, SHA-256 hashed OTPs, and two-step verification.",
      "Upskilled in cryptography and RSA implementations to ensure secure data transmission."
    ],
    color: "#168498",
    counter: "4/4"
  }
];

export const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/lasya-jetti-83a2aa28b/",
    color: "hover:bg-[#0A66C2]"
  },
  {
    name: "Gmail",
    icon: FaGoogle,
    link: "mailto:lasyareddy.jetti@gmail.com",
    color: "hover:bg-[#EA4335]"
  },
  {
    name: "LeetCode",
    icon: FaCode,
    link: "https://leetcode.com/u/4G9QJSsAdq/",
    color: "hover:bg-[#FFA116]"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Jlasi17",
    color: "hover:bg-[#24292e]"
  }
];

export const skills = [
  "Python","React","FastAPI","Docker","TensorFlow",
  "MongoDB","PyTorch","NumPy","Pandas","C++",
  "PostgreSQL","GCP","Federated Learning","U-Net"
];