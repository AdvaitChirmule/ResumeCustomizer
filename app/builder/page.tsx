"use client"

import {projects} from "@/data/project-data"
import {experiences} from "@/data/experience-data"
import { useState } from "react";

export default function builder() {
    const experienceCount = 2;
    const projectCount = 3;

    const [defaultExperiences, setDefaultExperiences] = useState([experiences[0], experiences[1]]);
    const [defaultProjects, setDefaultProjects] = useState([projects[2], projects[5], projects[6]]);

    function changeExperienceNumber(i: number, k: number): void {
        var updated = [...defaultExperiences];
        updated[i] = experiences[k];
        setDefaultExperiences(updated)
    }

    function changeExperienceVariant(i: number, j: number){
        var updated = [...defaultExperiences];
        updated[i].description = defaultExperiences[i].variants[j].description;
        setDefaultExperiences(updated);
    }

    function changeProjectNumber(i: number, k: number): void {
        var updated = [...defaultProjects];
        updated[i] = projects[k];
        setDefaultProjects(updated)
    }

    function changeProjectVariant(i: number, j: number){
        var updated = [...defaultProjects];
        updated[i].keywords = defaultProjects[i].variants[j].keywords;
        updated[i].description = defaultProjects[i].variants[j].description;
        setDefaultProjects(updated);
    }

    async function generateResume() {
        const res = await fetch("/api/latex/generate", {
            method: "GET",
        });

        const text = await res.text();
        console.log("API response:", text);
    }

    return (
        <div>
            <div>
                <div id="experience p-2">
                    {Array.from({length: experienceCount}).map((_, i) => (
                        <div className="grid grid-cols-4 bg-gray-200 border p-2" key={i}>
                            <div className="grid grid-flow-col grid-rows-4 col-span-3 p-2">
                                <div className="row-span-3 bg-white p-2">
                                    <div>
                                        {defaultExperiences[i].role}
                                    </div>
                                    <div>
                                        {defaultExperiences[i].company}
                                    </div>
                                    <div>
                                        {defaultExperiences[i].description}
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 p-2">
                                    {Array.from({length: defaultExperiences[i].variants.length}).map((_, j) =>(
                                        <div key={j}>
                                            <button onClick={() => changeExperienceVariant(i, j)}>{defaultExperiences[i].variants[j].variantDescription}</button>
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
                <div id="projects p-2">
                    {Array.from({length: projectCount}).map((_, i) => (
                        <div className="grid grid-cols-4 bg-gray-200 border p-2" key={i}>
                            <div className="grid grid-flow-col grid-rows-4 col-span-3 p-2">
                                <div className="row-span-3 bg-white p-2">
                                    <div>
                                        {defaultProjects[i].name}
                                    </div>
                                    <div>
                                        {defaultProjects[i].keywords}
                                    </div>
                                    <div>
                                        {defaultProjects[i].description}
                                    </div>
                                </div>
                                <div className="grid grid-cols-10 p-2">
                                    {Array.from({length: defaultProjects[i].variants.length}).map((_, j) =>(
                                        <div key={j}>
                                            <button onClick={() => changeProjectVariant(i, j)}>{defaultProjects[i].variants[j].variantDescription}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-5 border p-2">
                                {projects.map(project => (
                                    <button key={project.id} onClick={() => changeProjectNumber(i, project.id)}>{project.nick}</button>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={() => generateResume()}>Submit</button>
                </div>
            </div>
        </div>
    )
}