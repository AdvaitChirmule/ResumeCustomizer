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
        role: "Full Stack AI Application Intern",
        company: "Cognia Security",
        nick: "Cognia",
        location: "Tempe, AZ",
        startDate: "May 2025",
        endDate: "Nov 2025",
        description: [
            "Built a security dashboard for a startup to help clients continuously assess and fix vulnerabilities.",
            "Developed an end-to-end Spring Boot pipeline to extract asset information from Azure, normalize, enhance and store in MongoDB, with raw data archived in S3.",
            "Automated vulnerability scanning across Azure by integrating Azure Defender and OWASP tools into a CI/CD pipeline using Terraform, and generating security reports required.",
            "Managed agile workflows in Linear and used Cursor AI to enhancing coding productivity by 40%."
        ],
        variants: [{
            id: 0,
            variantDescription: "Base",
            description: [
                "Built a security dashboard for a startup to help clients continuously assess and fix vulnerabilities.",
                "Developed an end-to-end Spring Boot pipeline to extract asset information from Azure, normalize, enhance and store in MongoDB, with raw data archived in S3.",
                "Automated vulnerability scanning across Azure by integrating Azure Defender and OWASP tools into a CI/CD pipeline using Terraform, and generating security reports required.",
                "Managed agile workflows in Linear and used Cursor AI to enhancing coding productivity by 40%."
            ]
        }]
    },
    {
        id: 1,
        role: "Research Aide",
        company: "Arizona State University",
        nick: "ASU",
        location: "Tempe, AZ",
        startDate: "Nov 2025",
        endDate: "Dec 2025",
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
    }
];