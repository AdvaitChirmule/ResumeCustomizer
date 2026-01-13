"use client"

import { useState } from "react"

export default function AddProjectPage(){

    const [title, setTitle] = useState("")
    const [nick, setNick] = useState("")
    const [url, setUrl] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [keywords, setKeywords] = useState("")
    const [descriptionLine, setDescriptionLine] = useState("")
    const [description, setDescription] = useState([descriptionLine])
    const [status, setStatus] = useState("")

    async function addProjectSubmitter() {
        const res = await fetch("/api/database/addProject", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                nick: nick,
                url: url,
                startDate: startDate,
                endDate: endDate,
                keywords: keywords,
                description: description
            })
        })

        setStatus(await res.text())
    }

    function updateDescription(description: string[], index: number, value: string) {
        const copy = [...description]
        copy[index] = value;
        setDescription(copy)
        setDescriptionLine("")
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setDescription([...description, ""])
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="p-3">
                    <label htmlFor="projectName">Project Title</label>
                    <input id="projectName" className="border rounded-md" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="projectNick">Project Nickname</label>
                    <input id="projectNick" className="border rounded-md" value={nick} onChange={(e) => setNick(e.target.value)}/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="projectUrl">Website URL</label>
                    <input id="projectUrl" className="border rounded-md" value={url} onChange={(e) => setUrl(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="projectStartDate">Start Date</label>
                    <input id="projectStartDate" className="border rounded-md" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="projectEndDate">Project End Date</label>
                    <input id="projectEndDate" className="border rounded-md" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="projectKeywords">Keywords</label>
                    <input id="projectKeywords" className="border rounded-md" value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
                </div>
                <div>
                    {description.map((line, index) => (
                        <div className="col-span-2 p-3" id={String(index)}>
                            <label htmlFor="projectDescription">Description</label>
                            <input id="projectDescription" className="border rounded-md" value={line} onChange={(e) => updateDescription(description, index, e.target.value)} onKeyDown={handleKeyDown}/>
                        </div>
                    ))}
                    
                    <button onClick={() => setDescription([...description, ""])}>Add Another</button>
                </div>
                <div>
                    <button onClick={() => addProjectSubmitter()}>Add Project</button>
                </div>
                <div>
                    {status}
                </div>
            </div>
        </div>
    )
}