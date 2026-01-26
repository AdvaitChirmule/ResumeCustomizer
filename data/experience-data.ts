export interface Variant {
    id: number;
    variantDescription: string;
    description: string[];
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    nick: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    variants: Variant[];
}

export const experiences: Experience[] = [
    {
        id: 0,
        role: "Full Stack Developer",
        company: "Trekka AI",
        nick: "Trekka",
        location: "Tempe, AZ",
        startDate: "Jan 2026",
        endDate: "Present",
        description: [
            "Built a personal finance dashboard in React + TypeScript that aggregates bank accounts, investments, and liabilities using Plaid.",
            "Implemented secure data handling with Supabase, encrypting access tokens and creating anonymized, shareable financial reports.",
            "Processed and visualized financial data to surface insights like net worth, cash flow trends, and asset allocation.",
            "Added an AI financial assistant with Groq to help users explore their finances and plan investments."
        ],
        variants: [{
            id: 0,
            variantDescription: "Base",
            description: [
                "Built a personal finance dashboard in React + TypeScript that aggregates bank accounts, investments, and liabilities using Plaid.",
                "Implemented secure data handling with Supabase, encrypting access tokens and creating anonymized, shareable financial reports.",
                "Processed and visualized financial data to surface insights like net worth, cash flow trends, and asset allocation.",
                "Added an AI financial assistant with Groq to help users explore their finances and plan investments."
            ]
        }]
    },
    {
        id: 1,
        role: "Full Stack AI Application Intern",
        company: "Cognia Security",
        nick: "Cognia",
        location: "Tempe, AZ",
        startDate: "May 2025",
        endDate: "Nov 2025",
        description: [
            "Built a Spring Boot based security dashboard for a startup, for clients to continuously assess and fix vulnerabilities.",
            "Implemented an Azure asset ingestion pipeline, normalizing data into MongoDB and serving it via REST APIs to the React dashboard with <300 ms average latency.",
            "Implemented a vulnerability scanning pipeline by integrating Azure Defender and OWASP security tools, and generated data for security reports.",
            "Improved development velocity by 40% using Cursor AI and Agile workflows in Linear."
        ],
        variants: [{
            id: 0,
            variantDescription: "SpringBoot",
            description: [
                "Built a Spring Boot based security dashboard for a startup, for clients to continuously assess and fix vulnerabilities.",
                "Implemented an Azure asset ingestion pipeline, normalizing data into MongoDB and serving it via REST APIs to the React dashboard with <300 ms average latency.",
                "Implemented a vulnerability scanning pipeline by integrating Azure Defender and OWASP security tools, and generated data for security reports.",
                "Improved development velocity by 40% using Cursor AI and Agile workflows in Linear."
            ]
        },
        {
            id: 1,
            variantDescription: "Azure",
            description: [
                "Built a Spring Boot based security dashboard for a startup, for clients to continuously assess and fix vulnerabilities.",
                "Implemented a vulnerability scanning pipeline by integrating Azure Defender and OWASP security tools, and generating findings every few hours.",
                "Deployed client applications to Azure using Terraform, provisioning cloud resources and resource groups, and simulating attack paths for security assessment.",
                "Improved development velocity by 40% using Cursor AI and Agile workflows in Linear."
            ]
        },
        {
            id: 2,
            variantDescription: "AWS",
            description: [
                "Built a Spring Boot based security dashboard for a startup, for clients to continuously assess and fix vulnerabilities.",
                "Implemented a vulnerability scanning pipeline by integrating Azure Defender and OWASP security tools, and generating findings every few hours.",
                "Deployed client applications to AWS using Terraform, provisioning cloud resources and resource groups, and simulating attack paths for security assessment.",
                "Improved development velocity by 40% using Cursor AI and Agile workflows in Linear."
            ]
        }
        ]
    },
    {
        id: 2,
        role: "Research Aide",
        company: "Arizona State University",
        nick: "ASU",
        location: "Tempe, AZ",
        startDate: "Aug 2024",
        endDate: "May 2025",
        description: [
            "Studied the effects of hashtags on engagement and toxicity in social media through large-scale user studies.",
            "Led experiments with 2,000+ participants, automating data collection and validation workflows with Selenium.",
            "Processed 700K+ posts using Python (Pandas, NumPy), performed sentiment analysis, and visualized statistical analysis using PowerBI.",
            "Applied Reinforcement Learning to optimize hashtag strategies, reducing toxic comments by 20%."
        ],
        variants: [
            {
                id: 0,
                variantDescription: "Base",
                description: [
                    "Studied the effects of hashtags on engagement and toxicity in social media through large-scale user studies.",
                    "Led experiments with 2,000+ participants, automating data collection and validation workflows with Selenium.",
                    "Processed 700K+ posts using Python (Pandas, NumPy), performed sentiment analysis, and visualized statistical analysis using PowerBI.",
                    "Applied Reinforcement Learning to optimize hashtag strategies, reducing toxic comments by 20%."
                ]
            }]
    },
    {
        id: 3,
        role: "Computer Vision Intern",
        company: "IotIot",
        nick: "Iot",
        location: "Pune, India",
        startDate: "Jul 2022",
        endDate: "Oct 2022",
        description: [
            "Developed a vehicle detection system using R CNN, achieving 80% accuracy by implementing a provided pipeline.",
            "Compiled and annotated a comprehensive dataset from multiple sources for model training and optimization.",
            "Containerized the application using Docker, ensuring consistent and scalable deployment across various environments."
        ],
        variants: [
            {
                id: 0,
                variantDescription: "Base",
                description: [
                    "Developed a vehicle detection system using R CNN, achieving 80% accuracy by implementing a provided pipeline.",
                    "Compiled and annotated a comprehensive dataset from multiple sources for model training and optimization.",
                    "Containerized the application using Docker, ensuring consistent and scalable deployment across various environments."
                ]
            }]
    },
];