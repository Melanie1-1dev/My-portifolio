import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "green-trace-iq",
    title: "Green-Trace IQ",
    description:
      "An intelligent solution focused on monitoring and protecting natural forests using sensors, embedded systems, and AI.",
    problem:
      "Forest degradation and illegal activities are difficult to detect early in remote areas of Rwanda and East Africa.",
    solution:
      "A system that combines sensor data, embedded devices, and AI analysis to monitor forest health and alert stakeholders in real time.",
    tech: ["Embedded Systems", "Sensors", "IoT", "AI", "Python", "C/C++"],
    github: "https://github.com/Melanie1-1dev", // placeholder – update with real repo
    live: undefined,
    featured: true,
  },
  {
    id: "scouts",
    title: "Scouts",
    description:
      "An intelligent product discovery and validation platform where developers can launch digital products and connect with potential users while AI helps analyze market trends and feedback.",
    problem:
      "Many developers build products without enough early validation or user feedback, leading to wasted effort.",
    solution:
      "A platform that helps creators launch, collect feedback, and use AI insights to validate ideas faster.",
    tech: ["Next.js", "TypeScript", "React", "AI Integration", "Node.js"],
    github: "https://github.com/Melanie1-1dev", // placeholder
    live: undefined,
    featured: true,
  },
  {
    id: "restaurant-system",
    title: "Restaurant Booking & Ordering System",
    description:
      "A web application for restaurant bookings and orders featuring a modern dashboard and database-backed functionality.",
    problem:
      "Restaurants need a simple, reliable way to manage table bookings and customer orders digitally.",
    solution:
      "A full-stack web system with booking management, order tracking, and an admin dashboard.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/Melanie1-1dev", // placeholder
    live: undefined,
    featured: true,
  },
  // Placeholder for future projects
  {
    id: "coming-soon-1",
    title: "More Projects Coming Soon",
    description: "Additional real-world projects will appear here as they are completed.",
    problem: "—",
    solution: "—",
    tech: [],
    featured: false,
  },
];
