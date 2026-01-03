export default function add(){
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="p-3">
                    <label htmlFor="projectName">Project Title</label>
                    <input id="projectName" className="border rounded-md"/>
                </div>
                <div className="p-3">
                    <label htmlFor="projectNick">Project Nickname</label>
                    <input id="projectNick" className="border rounded-md"/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="projectUrl">Website URL</label>
                    <input id="projectUrl" className="border rounded-md"/>
                </div>
                <div className="p-3">
                    <label htmlFor="projectStartDate">Start Date</label>
                    <input id="projectStartDate" className="border rounded-md"/>
                </div>
                <div className="p-3">
                    <label htmlFor="projectEndDate">Project End Date</label>
                    <input id="projectEndDate" className="border rounded-md"/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="projectKeywords">Keywords</label>
                    <input id="projectKeywords" className="border rounded-md"/>
                </div>
                <div className="col-span-2 p-3">
                    <label htmlFor="projectDescription">Description</label>
                    <input id="projectDescription" className="border rounded-md"/>
                </div>
            </div>
        </div>
    )
}