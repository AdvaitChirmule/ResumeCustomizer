"use client"

import { projects } from "@/data/project-data"
import { experiences } from "@/data/experience-data"
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { extractSkillsFromDescription, matchSkillsFromDescription } from "@/lib/utilities/text-functions";

export default function BuilderPage() {
    const experienceCount = 2;
    const projectCount = 3;

    const [defaultExperiences, setDefaultExperiences] = useState([experiences[1], experiences[2]]);
    const [defaultProjects, setDefaultProjects] = useState([projects[2], projects[5], projects[6]]);

    const [jobDescription, setJobDescription] = useState("")

    const [skillIncluded, setSkillIncluded] = useState<string[]>([])
    const [skillMissing, setSkillMissing] = useState<string[]>([])

    const [foundBetterMatch, setFoundBetterMatch] = useState(false)
    const [betterMatch, setBetterMatch] = useState<number[]>([])

    const [hideJobDescription, setHideJobDescription] = useState(true)

    function changeExperienceNumber(i: number, k: number): void {
        var updated = [...defaultExperiences];
        updated[i] = experiences[k];
        setDefaultExperiences(updated)
    }

    function changeExperienceVariant(i: number, j: number) {
        var updated = [...defaultExperiences];
        updated[i].variant = j;
        setDefaultExperiences(updated);
    }

    function changeProjectNumber(i: number, k: number): void {
        var updated = [...defaultProjects];
        updated[i] = projects[k];
        setDefaultProjects(updated)
    }

    function changeProjectVariant(i: number, j: number) {
        var updated = [...defaultProjects];
        updated[i].variant = j;
        setDefaultProjects(updated);
    }

    async function generateResume() {
        const res = await fetch("/api/latex/generatePdf", {
            method: "POST",
            body: JSON.stringify({
                experience: defaultExperiences,
                project: defaultProjects
            })
        });

        if (res.status == 200) { 
            toast.success("Generated PDF successfully!")
        }
        else if (res.status == 500) {
            toast.error("Ran into error \n (You might have special characters in your document)")
        }
        else {
            toast.success("Unexpected Error Occured")
        }
    }

    useEffect(() => {
        getSkills()
    }, [defaultProjects])

    function getSkills() {
        const included = []
        const missing = []
        const skillSet = extractSkillsFromDescription(jobDescription)

        for (const skill of skillSet) {
            let found = false
            for (const project of defaultProjects) {
                const projectSkills = project["keywords"].split(", ")
                if (projectSkills.includes(skill)) {
                    included.push(skill)
                    found = true
                    break
                }
            }

            if (!found) {
                missing.push(skill)
            }
        }

        if (missing.length > 0) {
            const optimalMatch = matchSkillsFromDescription(skillSet)
            if (optimalMatch[0]) {
                setFoundBetterMatch(true)
            }
        }

        setSkillIncluded(included)
        setSkillMissing(missing)
    }

    return (
        <div>
            <div className="grid grid-cols-4 h-screen">
                <div className={`bg-gray-200 transform transition-transform duration-300 ease-in-out ${hideJobDescription ? "col-span-0 -translate-x-full p-0 m-0 h-0" : "col-span-1 translate-x-0 p-5 h-full" }`} >
                    <div>
                        <label htmlFor="description">Enter job description here (Optional)</label>
                        <input id="description" className="border rounded-md bg-white h-13/20" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                        Enter your job description here
                    </div>
                    <button onClick={() => getSkills()}>Extract Skills</button>
                    <div>
                        Skills from your Resume:
                        {Array.from({ length: skillIncluded.length }).map((_, i) => (
                            <span className="text-green-800">{skillIncluded[i]} </span>
                        ))}
                        {Array.from({ length: skillMissing.length }).map((_, i) => (
                            <span className="text-red-800">{skillMissing[i]} </span>
                        ))}
                    </div>
                </div>
                <div id="resume" className={ `p-5 max-h-full font-lmodern overflow-auto transition-all duration-300 ease-in-out ${hideJobDescription ? "col-span-4" : "col-span-3"} `}>
                    <div>
                        <button onClick={() => hideJobDescription ? setHideJobDescription(false): setHideJobDescription(true)}>Get Job Description Tab</button>
                    </div>
                    <div id="experience" className="p-2">
                        <div>
                            Experiences
                        </div>
                        {Array.from({ length: experienceCount }).map((_, i) => (
                            <div className="grid grid-cols-4 bg-gray-200 border p-2" key={i}>
                                <div className="grid grid-flow-col grid-rows-4 col-span-3 p-2">
                                    <div className="grid grid-cols-2 row-span-3 bg-white p-2">
                                        <div className="text-base font-bold">
                                            {defaultExperiences[i].role}
                                        </div>
                                        <div className="text-[15px] justify-items-end">
                                            <div>{defaultExperiences[i].startDate} - {defaultExperiences[i].endDate}</div>
                                        </div>
                                        <div className="text-sm italic">
                                            {defaultExperiences[i].company}
                                        </div>
                                        <div className="text-sm italic justify-items-end">
                                            <div>{defaultExperiences[i].location}</div>
                                        </div>
                                        <div className="col-span-2 ps-4 text-sm">
                                            {Array.from({ length: defaultExperiences[i].variants[defaultExperiences[i].variant].description.length }).map((_, j) => (
                                                <div key={j}>
                                                    •  {defaultExperiences[i].variants[defaultExperiences[i].variant].description[j]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-10 p-2">
                                        {Array.from({ length: defaultExperiences[i].variants.length }).map((_, j) => (
                                            <div key={j}>
                                                <button className={`${(j == defaultExperiences[i].variant) ? "bg-gray-300" : "bg-gray-200"}`} onClick={() => changeExperienceVariant(i, j)}>{defaultExperiences[i].variants[j].variantDescription}</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-5 border p-2">
                                    {experiences.map(experience => (
                                        <button key={experience.id} onClick={() => changeExperienceNumber(i, experience.id)}>{experience.nick}</button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="projects" className="p-2">
                        <div>
                            Projects
                        </div>
                        {Array.from({ length: projectCount }).map((_, i) => (
                            <div className="grid grid-cols-4 bg-gray-200 border" key={i}>
                                <div className="grid grid-flow-col grid-rows-4 col-span-3 p-2">
                                    <div className="grid grid-cols-2 row-span-3 bg-white p-2">
                                        <div>
                                            <span className="font-bold text-base">{defaultProjects[i].name}</span> | <span className="italic text-[15px]">{defaultProjects[i].variants[defaultProjects[i].variant].keywords}</span>
                                        </div>
                                        <div className="justify-items-end text-[15px]">
                                            <div>
                                                {defaultProjects[i].startDate} - {defaultProjects[i].endDate}
                                            </div>
                                        </div>
                                        <div className="col-span-2 ps-4 text-sm">
                                            {Array.from({ length: defaultProjects[i].variants[defaultProjects[i].variant].description.length }).map((_, j) => (
                                                <div key={j}>
                                                    •  {defaultProjects[i].variants[defaultProjects[i].variant].description[j]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-10 p-2">
                                        {Array.from({ length: defaultProjects[i].variants.length }).map((_, j) => (
                                            <div key={j}>
                                                <button className={`${(j == defaultProjects[i].variant) ? "bg-gray-300" : "bg-gray-200"}`} onClick={() => changeProjectVariant(i, j)} >{defaultProjects[i].variants[j].variantDescription}</button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-2 bg-gray-100">
                                    {projects.map(project => (
                                        <button className="p-2" key={project.id} onClick={() => changeProjectNumber(i, project.id)}>{project.nick}</button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mb-10">
                        <button className="active:bg-gray-200" onClick={() => generateResume()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}