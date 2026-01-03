export interface Variant {
    id: number;
    variantDescription: string;
    keywords: string;
    description: string;
}

export interface Project {
    id: number;
    name: string;
    nick: string;
    url: string;
    startDate: string;
    endDate: string;
    keywords: string;
    description: string;
    variants: Variant[];
}

export const projects: Project[] = [
    {
        id: 0,
        name: "Ultra Fast Resume Customizer",
        nick: "Resume",
        url: "/",
        startDate: "Nov 2025",
        endDate: "Dec 2025",
        keywords: "Next.js, TypeScript, Tailwind CSS, Postgres",
        description: "Developed an ultra fast resume customizer to speed up your job application process",
        variants: [{
            id: 0,
            variantDescription: "Base",
            keywords: "Next.js, TypeScript, Tailwind CSS, Postgres",
            description: "Developed an ultra fast resume customizer to speed up your job application process"
        }]
    },
    {
        id: 1,
        name: "Portfolio Website",
        nick: "Portfolio",
        url: "/",
        startDate: "Nov 2025",
        endDate: "Dec 2025",
        keywords: "Next.js, TypeScript",
        description: "You are looking at it right now!",
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Next.js, TypeScript",
            description: "You are looking at it right now!"
        }]
    },
    {
        id: 2,
        name: "Vocab Master",
        nick: "Vocab Master",
        url: "https://vocabmaster.runasp.net/",
        startDate: "Jan 2025",
        endDate: "Aug 2025",
        keywords: "ASP.NET, C#, JavaScript, AJAX, Kotlin, XML, Firebase",
        description: "Built a cross-platform GRE study app serving 100+ users, enabling vocab practice and a multiplayer word game",
        variants: [
        {
            id: 0,
            variantDescription: "Cross Platform",
            keywords: "ASP.NET, C#, JavaScript, AJAX, Kotlin, XML, Firebase",
            description: "Built a cross-platform GRE study app serving 100+ users, enabling vocab practice and a multiplayer word game"
        },
        {
            id: 1,
            variantDescription: "Android App",
            keywords: "Android Studio, Kotlin, XML, Firebase",
            description: "Built a cross-platform GRE study app serving 100+ users, enabling vocab practice and a multiplayer word game"
        }]
    },
    {
        id: 3,
        name: "AWS-Powered Application for Image Recognition",
        nick: "AWS",
        url: "/",
        startDate: "Aug 2024",
        endDate: "Dec 2024",
        keywords: "Java, Linux, Algorithms, Git",
        description: "Developed an application that identifies famous personalities from videos by configuring an AWS EC2 instance to split videos using ffmpeg, and run through a deep learning recognition model.",
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Java, Linux, Algorithms, Git",
            description: "Developed an application that identifies famous personalities from videos by configuring an AWS EC2 instance to split videos using ffmpeg, and run through a deep learning recognition model."
        }]
    },
    {
        id: 4,
        name: "Analyzing Chest X-Rays using Image Processing",
        nick: "Chest X-Ray",
        url: "/",
        startDate: "Aug 2024",
        endDate: "May 2024",
        keywords: "Python, Image Processing",
        description: "Worked on classifying the basic lung diseases on the CheXpert dataset using models like ImageIntern, ConvNext to establish SOTA baselines, after pre-processing the large datasets on the university's Slurm supercomputer.",
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Python, Image Processing",
            description: "Worked on classifying the basic lung diseases on the CheXpert dataset using models like ImageIntern, ConvNext to establish SOTA baselines, after pre-processing the large datasets on the university's Slurm supercomputer.",
        }]
    },
    {
        id: 5,
        name: "Minibase Software Modification",
        nick: "Minibase",
        url: "/",
        startDate: "Jan 2024",
        endDate: "May 2024",
        keywords: "Java, Linux, Algorithms, Git",
        description: "Extended Minibase (Java DBMS on Linux) with column-store support and bitmap indexes, for efficient querying.",
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Java, Linux, Algorithms, Git",
            description: "Extended Minibase (Java DBMS on Linux) with column-store support and bitmap indexes, for efficient querying.",
        }]
    },
    {
        id: 6,
        name: "Taiga API Extraction",
        nick: "Taiga Project Manager",
        url: "https://github.com/SER516-Clever/SER516-Team-Clever",
        startDate: "Jan 2024",
        endDate: "May 2024",
        keywords: "React, FastAPI, Recharts, Node.js, Docker",
        description: "Developed a Taiga project analytics tool delivering project analysis metrics to improve sprint efficiency.",
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "React, FastAPI, Recharts, Node.js, Docker",
            description: "Developed a Taiga project analytics tool delivering project analysis metrics to improve sprint efficiency.",
        }]
    }
];