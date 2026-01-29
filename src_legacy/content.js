import { Github, Linkedin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const USER_CONTENT = {
    name: "Yash Karthiya",
    title: "Computer Engineering Student | Backend & Applied AI",
    email: "yash.karthiya.1066@gmail.com",
    phone: "+91 87990 06562",
    location: "Gujarat, India",

    // Links
    githubUrl: "https://github.com/NotYash1066",
    linkedinUrl: "https://linkedin.com/in/yash-karthiya",
    resumeUrl: "/resume.pdf", // Place your resume.pdf in the 'public' folder

    // Images
    profileImage: "/profile.jpg", // Place your profile.jpg in the 'public' folder or use an external URL

    hero: {
        title: "Hi, I'm",
        name: "Yash Karthiya",
        subtitle: "Computer Engineering undergraduate specialized in Backend Systems and Applied AI. Building scalable RESTful APIs and RAG-based applications.",
    },

    about: {
        description1: "I am a Computer Engineering undergraduate at Dharmsinh Desai University, deeply focused on architecting robust backend systems and exploring applied AI. My journey involves building scalable RESTful APIs, developing RAG-based applications, and creating full-stack solutions that solve real-world problems.",
        description2: "With hands-on experience in Java, Spring Boot, and Python, I enjoy tackling complex challenges and optimizing performance. Whether it's a hackathon project or a collaborative tool, I aim to deliver high-quality, maintainable code."
    },

    skills: [
        {
            category: "Languages",
            items: ["Java", "Python (AI/ML)", "C#", "JavaScript"]
        },
        {
            category: "Frameworks/Backend",
            items: ["Spring Boot", "Hibernate", "Django", "Entity Framework Core", "RESTful APIs"]
        },
        {
            category: "Frontend & Mobile",
            items: ["React", "Flutter", "Tailwind CSS"]
        },
        {
            category: "Databases",
            items: ["SQL", "MongoDB (NoSQL)", "PostgreSQL"]
        },
        {
            category: "Tools & Other",
            items: ["Linux", "Firebase", "Debugging", "Git"]
        }
    ],

    projects: [
        {
            title: "CollegeInfo-Agent",
            tech: ["FastAPI", "React", "ChromaDB", "LangChain"],
            description: "Built an AI-powered academic assistant using RAG to answer student queries from a corpus of 500+ college documents. Achieved average query response times of 2 seconds.",
            github: "https://github.com/NotYash1066/College-Info-Assistant",
            // image: "/project1.png" // Optional
        },
        {
            title: "Shop/Stock Management System",
            tech: ["Spring Boot", "Java 17", "PostgreSQL"],
            description: "Developed a RESTful inventory management API handling products, suppliers, and stock levels across 500+ SKUs. Integrated Spring Security with role-based authorization.",
            github: "https://github.com/NotYash1066/shop-management-system",
        },
        {
            title: "Skill-Swap",
            tech: ["MERN Stack", "WebRTC", "Socket.io"],
            description: "Built a peer-to-peer skill exchange platform featuring real-time chat and video communication utilizing WebRTC. Implemented JWT-based authentication.",
            github: "https://github.com/NotYash1066/Skill-Swap",
        }
    ],

    timeline: [
        {
            type: "education",
            year: "Aug 2023 - May 2027",
            title: "Bachelor of Technology in Computer Engineering",
            subtitle: "Dharmsinh Desai University",
            location: "Nadiad, Gujarat",
            description: "CPI: 8.29. Relevant Courses: Data Structures & Algorithms, DBMS, Operating Systems, Machine Learning, Computer Networks."
        },
        {
            type: "hackathon",
            year: "2026",
            title: "DUHacks 5.0",
            subtitle: "Project: Food Label AI Scanner",
            location: "Hackathon",
            description: "Built an AI-based system to scan packaged food labels and explain ingredients in plain English. Implemented allergen detection and health scoring system."
        },
        {
            type: "hackathon",
            year: "2025",
            title: "Holboxai Hackathon",
            subtitle: "Project: NeuroHire",
            location: "Hackathon",
            description: "Developed an OCR-to-LLM resume screening pipeline to extract text, summarize profiles, and generate candidate scores. Automated resume parsing for 100+ samples."
        },
        {
            type: "workshop",
            year: "2025",
            title: "Winter Spark: Deploy Your Career",
            subtitle: "Cloud Deployment Workshop",
            location: "Workshop",
            description: "Deployed a cloud-hosted to-do application on AWS using EC2, Lambda, and S3. Implemented CRUD functionality and basic monitoring."
        }
    ]
};
