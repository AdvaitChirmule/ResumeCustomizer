"use client"

import { useState } from "react"

export default function AddProjectPage() {

    const [title, setTitle] = useState("")
    const [nick, setNick] = useState("")
    const [url, setUrl] = useState("")
    const [startDateMonth, setStartDateMonth] = useState("")
    const [startDateYear, setStartDateYear] = useState("")
    const [endDateMonth, setEndDateMonth] = useState("")
    const [endDateYear, setEndDateYear] = useState("")
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
                startDate: startDateMonth + " " + startDateYear,
                endDate: endDateMonth + " " + endDateYear,
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
                <div className="relative">
                    <input type="text" id="projectName" placeholder=" " className="peer block px-5 pt-6 pb-2 border rounded-xl" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="projectName" className="absolute left-5 top-2 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">Project Title</label>
                </div>
                <div className="relative">
                    <input type="text" id="projectNick" placeholder=" " className="peer px-5 pt-6 pb-2 border rounded-md" value={nick} onChange={(e) => setNick(e.target.value)} />
                    <label htmlFor="projectNick" className="absolute left-5 top-2 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">Project Nickname</label>
                </div>

                <div className="relative col-span-2">
                    <input id="projectUrl" placeholder=" " className="peer px-5 pt-6 pb-2 border rounded-md" value={url} onChange={(e) => setUrl(e.target.value)} />
                    <label htmlFor="projectUrl" className="absolute left-5 top-2 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">Website URL</label>
                </div>
                <div>
                    <div className="grid grid-cols-2">
                        <div className="relative">
                            <select id="projectStartMonth" required value={startDateMonth} onChange={(e) => setStartDateMonth(e.target.value)}
                                className="peer block w-full px-5 pt-6 pb-2 border rounded-xl border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700">
                                <option value=""> </option>
                                <option value="Jan">January</option>
                                <option value="Feb">February</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <label htmlFor="projectStartMonth" className="absolute left-5 top-4 text-base peer-valid:top-2 peer-valid:text-xs peer-focus:top-2 peer-focus:text-xs transition-all">Start Month</label>
                        </div>
                        <div className="relative">
                            <select id="projectStartYear" required value={startDateYear} onChange={(e) => setStartDateYear(e.target.value)}
                                className="peer block w-full px-5 pt-6 pb-2 border rounded-xl border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700">
                                <option value=""> </option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </select>
                            <label htmlFor="projectStartMonth" className="absolute left-5 top-4 text-base peer-valid:top-2 peer-valid:text-xs peer-focus:top-2 peer-focus:text-xs transition-all">Start Year</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2">
                        <div className="relative">
                            <select id="projectEndMonth" required value={endDateMonth} onChange={(e) => setEndDateMonth(e.target.value)}
                                className="peer block w-full px-5 pt-6 pb-2 border rounded-xl border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700">
                                <option value=""> </option>
                                <option value="Jan">January</option>
                                <option value="Feb">February</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <label htmlFor="projectEndMonth" className="absolute left-5 top-4 text-base peer-valid:top-2 peer-valid:text-xs peer-focus:top-2 peer-focus:text-xs transition-all">Start Month</label>
                        </div>
                        <div className="relative">
                            <select id="projectEndYear" required value={endDateYear} onChange={(e) => setEndDateYear(e.target.value)}
                                className="peer block w-full px-5 pt-6 pb-2 border rounded-xl border-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700">
                                <option value=""> </option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </select>
                            <label htmlFor="projectEndMonth" className="absolute left-5 top-4 text-base peer-valid:top-2 peer-valid:text-xs peer-focus:top-2 peer-focus:text-xs transition-all">Start Year</label>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-2">
                    <input id="projectKeywords" placeholder=" " className="peer px-5 pt-6 pb-2 border rounded-md" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
                    <label htmlFor="projectKeywords" className="absolute left-5 top-2 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs transition-all">Keywords</label>
                </div>
                <div>
                    {description.map((line, index) => (
                        <div className="col-span-2" id={String(index)}>
                            <input id="projectDescription" className="peer px-5 pt-6 pb-2 border rounded-md" value={line} onChange={(e) => updateDescription(description, index, e.target.value)} onKeyDown={handleKeyDown} />
                            <label htmlFor="projectDescription">Description</label>
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