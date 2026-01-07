import { Experience } from "@/data/experience-data";
import { Project } from "@/data/project-data";
import { cleanTextForTex } from "../utilities/text-functions";

export class TexResume {
    texFull: string;
    experienceSection: string;
    projectSection: string;

    constructor() {
        this.experienceSection = ""
        this.projectSection = ""
        this.texFull = ""
    }

    public setExperiences(experiences: Experience[]) {
        let texExperience = ""

        experiences.forEach(element => {
            texExperience += `
            \\resumeSubheading
                {${element.role}}{${element.startDate} -- ${element.endDate}}
                {${element.company}}{${element.location}}
                \\resumeItemListStart
            `
            element.description.forEach(line => {
                texExperience += `\\resumeItem {${line}}`
            })

            texExperience += "\\resumeItemListEnd"
        });

        this.experienceSection = cleanTextForTex(texExperience);
    }

    public setProjects(projects: Project[]) {
        let texProject = "";

        projects.forEach(element => {
            texProject += `
            \\resumeProjectHeading
                {\\textbf{\\href{${element.url}}{${element.name}}} $|$ \\emph{${element.keywords}}}{${element.startDate} -- ${element.endDate}}
                \\resumeItemListStart
            `
            element.description.forEach(line => {
                texProject += `\\resumeItem {${line}}`
            })

            texProject += "\\resumeItemListEnd"
        })

        this.projectSection = cleanTextForTex(texProject);
    }

    public getFullTex() {
        this.texFull = `
%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}
\\usepackage{lmodern}
\\usepackage{latexsym}
\\usepackage[margin=1in]{geometry}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\\begin{document}

%----------HEADING----------
% \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
%   \\textbf{\\href{http://sourabhbajaj.com/}{\\Large Sourabh Bajaj}} & Email : \\href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\\\
%   \\href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\\\
% \\end{tabular*}

\\begin{center}
    \\textbf{\\Huge \\scshape Advait Chirmule} \\\\ \\vspace{1pt}
    \\small 480-876-9732 $|$ \\href{mailto:achirmul@asu.edu}{\\underline{achirmul@asu.edu}} $|$ 
    \\href{ https://www.linkedin.com/in/advait-chirmule }{\\underline{Linkedin}}
    $|$ \\href{ https://github.com/AdvaitChirmule }{\\underline{Github}}
\\end{center}


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {Arizona State University}{Tempe, AZ}
      {Master's of Science in Computer Science, GPA: 3.80/4}{Aug 2023 -- May 2025}
  \\resumeSubHeadingListEnd


%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart

` + this.experienceSection + `
\\resumeSubHeadingListEnd

%-----------PROJECTS-----------

\\section{Projects}

\\resumeSubHeadingListStart
` + this.projectSection + `
\\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\\section{Publications}
  \\resumeSubHeadingListStart
    \\resumeProjectHeading
          {\\textbf{\\href{https://ar5iv.labs.arxiv.org/html/2402.10601}{Jailbreaking Proprietary Large Language Models}} $|$ \\emph{Arizona State University}}{ACL ARR 2024 Feb}
          \\resumeItemListStart
            \\resumeItem{Studied cryptographic ways to encode prompts to jailbreak, automated GPT API calls to speed up work by 50\\%.}
            \\resumeItem{Analyzed results using Power BI, achieving up to 60\\% jailbreaking success across multiple large language models}
          \\resumeItemListEnd

  \\resumeSubHeadingListEnd


%
%-----------PROGRAMMING SKILLS-----------
\\section{Technical Skills}
\\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
    \\textbf{Languages}{: Python, Java, JavaScript, C\\#, C++,  XML} \\\\
    \\textbf{Frontend}{: React, HTML, CSS, RESTful API, HCI} \\\\
    \\textbf{Backend}{: .NET, MySQL, Postgres, AWS, Docker, Kubernetes} \\\\
    \\textbf{Others}{: Agile, Github, AI/ML, Problem Solving, Teamwork}
    }}
\\end{itemize}


%-------------------------------------------
\\end{document}
`
        return this.texFull;
    }
}