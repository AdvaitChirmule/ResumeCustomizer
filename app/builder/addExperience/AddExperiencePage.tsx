"use client"

import { useState } from "react"

export default function AddexperiencePage(){

    const [role, setRole] = useState("")
    const [company, setCompany] = useState("")
    const [nick, setNick] = useState("")
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")

    async function addExperienceSubmitter() {
        const res = await fetch("/api/database/addExperience", {
            method: "POST",
            body: JSON.stringify({
                role: role,
                company: company,
                nick: nick,
                location: location,
                startDate: startDate,
                endDate: endDate,
                description: description
            })
        })

        setStatus(await res.text())
    }

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="p-3">
                    <label htmlFor="experienceName">Job Role</label>
                    <input id="experienceName" className="border rounded-md" value={role} onChange={(e) => setRole(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="experienceName">Company</label>
                    <input id="experienceName" className="border rounded-md" value={company} onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="experienceNick">Experience Nickname</label>
                    <input id="experienceNick" className="border rounded-md" value={nick} onChange={(e) => setNick(e.target.value)}/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="experienceUrl">Location</label>
                    <input id="experienceUrl" className="border rounded-md" value={location} onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="experienceStartDate">Start Date</label>
                    <input id="experienceStartDate" className="border rounded-md" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>
                <div className="p-3">
                    <label htmlFor="experienceEndDate">End Date</label>
                    <input id="experienceEndDate" className="border rounded-md" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="experienceDescription">Description</label>
                    <input id="experienceDescription" className="border rounded-md" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <button onClick={() => addExperienceSubmitter()}>Add Experience</button>
                </div>
                <div>
                    {status}
                </div>
            </div>
        </div>
    )
}