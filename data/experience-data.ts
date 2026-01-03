export interface Variant {
    id: number;
    variantDescription: string;
    description: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    nick: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
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
        description: "Worked on a startup for creating security dashboard for enterprise clients",
        variants: [{
            id: 0,
            variantDescription: "Base",
            description: "Worked on a startup for creating security dashboard for enterprise clients"
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
        description: "Worked on understanding the effect of hashtags on post toxicity",
        variants: [
        {
            id: 0,
            variantDescription: "Base",
            description: "Worked on understanding the effect of hashtags on post toxicity"
        }]
    }
];