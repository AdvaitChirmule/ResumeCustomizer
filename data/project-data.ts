export interface Variant {
    id: number;
    variantDescription: string;
    keywords: string;
    description: string[];
}

export interface Project {
    id: number;
    name: string;
    nick: string;
    url: string;
    startDate: string;
    endDate: string;
    keywords: string;
    description: string[];
    variants: Variant[];
}

export const projects: Project[] = [
    {
        id: 0,
        name: "Resume Customizer",
        nick: "Resume",
        url: "/",
        startDate: "Dec 2025",
        endDate: "Jan 2026",
        keywords: "Next.js, TypeScript, Supabase, Tailwind CSS",
        description: [
                "Developed a web app that customizes Resumes on Overleaf with just a few button clicks, in mere seconds.",
                "Developed a lightweight frontend using Next.js, TypeScript, and Tailwind CSS for fast load times and clean UI.",
                "Implemented Supabase authentication and database to manage user accounts and resume versions and variants."
        ],
        variants: [{
            id: 0,
            variantDescription: "Base",
            keywords: "Next.js, TypeScript, Tailwind CSS, Postgres",
            description: [
                "Developed a web app that customizes Resumes on Overleaf with just a few button clicks, in mere seconds.",
                "Developed a lightweight frontend using Next.js, TypeScript, and Tailwind CSS for fast load times and clean UI.",
                "Implemented Supabase authentication and database to manage user accounts and resume versions and variants."
            ]
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
        description: ["You are looking at it right now!"],
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Next.js, TypeScript",
            description: ["You are looking at it right now!"]
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
        description: [
            "Built a cross-platform GRE study app serving 100+ users, enabling vocab practice and a multiplayer word game.",
            "Developed web (ASP.NET MVC) and Android versions (Android Studio) connected via Firebase RESTful APIs for secure login and game room management.",
            "Created a custom algorithm to handle network lag and maintain multiplayer game sync.",
            "Added SQL Server caching for offline functionality and to reduce latency by 60%."
        ],
        variants: [
        {
            id: 0,
            variantDescription: "Cross Platform",
            keywords: "ASP.NET, C#, JavaScript, AJAX, Kotlin, XML, Firebase",
            description: [
                "Built a cross-platform GRE study app serving 100+ users, enabling vocab practice and a multiplayer word game.",
                "Developed web (ASP.NET MVC) and Android versions (Android Studio) connected via Firebase RESTful APIs for secure login and game room management.",
                "Created a custom algorithm to handle network lag and maintain multiplayer game sync.",
                "Added SQL Server caching for offline functionality and to reduce latency by 60%."
            ]
        },
        {
            id: 1,
            variantDescription: "Android App",
            keywords: "Android Studio, Kotlin, XML, Firebase",
            description: [
                "Built a cross-platform GRE study app serving 100+ users, enabling vocab practice and a multiplayer word game.",
                "Developed web (ASP.NET MVC) and Android versions (Android Studio) connected via Firebase RESTful APIs for secure login and game room management.",
                "Created a custom algorithm to handle network lag and maintain multiplayer game sync.",
                "Added SQL Server caching for offline functionality and to reduce latency by 60%."
            ]
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
        description: [
            "Developed an application that identifies famous personalities from videos.",
            "Configured an AWS EC2 instance to split videos using ffmpeg, and run through a deep learning recognition model.",
            "Designed a inference layer using Amazon Machine Images (AMI), auto-scaling dynamically from 0 to 20 instances based on workload. Coupled with Amazon SQS queues, achieved a throughput of 500 requests in 240 seconds."
        ],
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Java, Linux, Algorithms, Git",
            description: [
                "Developed an application that identifies famous personalities from videos.",
                "Configured an AWS EC2 instance to split videos using ffmpeg, and run through a deep learning recognition model.",
                "Designed a inference layer using Amazon Machine Images (AMI), auto-scaling dynamically from 0 to 20 instances based on workload. Coupled with Amazon SQS queues, achieved a throughput of 500 requests in 240 seconds."
            ]
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
        description: ["Worked on classifying the basic lung diseases on the CheXpert dataset using models like ImageIntern, ConvNext to establish SOTA baselines, after pre-processing the large datasets on the university's Slurm supercomputer."],
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Python, Image Processing",
            description: ["Worked on classifying the basic lung diseases on the CheXpert dataset using models like ImageIntern, ConvNext to establish SOTA baselines, after pre-processing the large datasets on the university's Slurm supercomputer."],
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
        description: [
            "Extended Minibase (Java DBMS on Linux) with column-store support and bitmap indexes, for efficient querying.",
            "Designed a custom compression algorithm using Run-Length Encoding (RLE) and Bit Stuffing, reducing storage footprint and achieving 15% faster performance than standard RLE.",
            "Validated new features with CRUD operations and joins, successfully handling 100K rows in under 30 seconds."
        ],
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Java, Linux, Algorithms, Git",
            description: [
                "Extended Minibase (Java DBMS on Linux) with column-store support and bitmap indexes, for efficient querying.",
                "Designed a custom compression algorithm using Run-Length Encoding (RLE) and Bit Stuffing, reducing storage footprint and achieving 15% faster performance than standard RLE.",
                "Validated new features with CRUD operations and joins, successfully handling 100K rows in under 30 seconds."
            ],
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
        description: [
            "Developed a Taiga project analytics tool delivering project analysis metrics to improve sprint efficiency.",
            "Built with React (frontend), Node.js middleware, and a FastAPI backend (with OAuth 2.0 for login)",
            "Achieved 80% faster performance with Redis caching and deployed scalable, containerized services using Docker.",
            "Collaborated in Agile workflows, including sprint planning, code reviews, and daily standups, improving velocity."
        ],
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "React, FastAPI, Recharts, Node.js, Docker",
            description: [
                "Developed a Taiga project analytics tool delivering project analysis metrics to improve sprint efficiency.",
                "Built with React (frontend), Node.js middleware, and a FastAPI backend (with OAuth 2.0 for login)",
                "Achieved 80% faster performance with Redis caching and deployed scalable, containerized services using Docker.",
                "Collaborated in Agile workflows, including sprint planning, code reviews, and daily standups, improving velocity."
            ],
        }]
    },
    {
        id: 7,
        name: "Scalable Data Processing Pipeline for NYC Taxi Data",
        nick: "Scalable",
        url: "/",
        startDate: "Aug 2024",
        endDate: "Dec 2024",
        keywords: "Neo4j, Kubernetes, Kafka, Zookeeper",
        description: [
            "Designed a scalable pipeline using Kubernetes, Kafka, and Neo4j for real-time document stream processing.",
            "Deployed Minikube as the orchestrator and configured Kafka and Zookeeper for data ingestion and distribution.",
            "Loaded data onto Neo4j and performed Page Rank and Breadth First Search used for finding busy areas and the best path."
        ],
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            keywords: "Neo4j, Kubernetes, Kafka, Zookeeper",
            description: [
                "Designed a scalable pipeline using Kubernetes, Kafka, and Neo4j for real-time document stream processing.",
                "Deployed Minikube as the orchestrator and configured Kafka and Zookeeper for data ingestion and distribution.",
                "Loaded data onto Neo4j and performed Page Rank and Breadth First Search used for finding busy areas and the best path."
            ]
        }
        ]
    }
];