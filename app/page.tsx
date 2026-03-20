"use client"

import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

export default function Home() {
  const [startTimeline, setStartTimeline] = useState(false)
  const [startTimeline2, setStartTimeline2] = useState(false)
  const [startTimeline3, setStartTimeline3] = useState(false)

  useEffect(() => {
    if (!startTimeline) return
    const timeout = setTimeout(() => {
      setStartTimeline2(true)
    }, 500)
    const timeout2 = setTimeout(() => {
      setStartTimeline3(true)
    }, 1000)
  })


  useEffect(() => {
    const test = document.querySelectorAll("#hi")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStartTimeline(true)
        }
      })
    }, {
      threshold: 0.5
    })

    observer.observe(test[0])
  })

  return (
    <div className="text-[#1A1A1A] font-lmodern w-full h-screen">
      <NavBar />
      <div className="bg-cover bg-center bg-[url('/life.jpg')] w-full h-full text-[#F2F2F2] p-15">
        <div className="text-8xl mt-25 font-bold">
          Tired of customizing <br />
          your Resume?
        </div>
        <div className="text-4xl my-25 font-semibold">
          No more with Resume Customizer!
        </div>
        <div className="text-2xl">
          <button className="bg-sky-800 rounded p-5">Learn More!</button>
        </div>
      </div>
      <div id="hi" className="bg-cover bg-center bg-[url('/sand.jpg')] p-5 place-items-center w-full h-full">
        <div className="grid grid-cols-9 backdrop-blur-sm place-items-center w-full h-full">
          <div></div>
          <div className="grid grid-rows-3 col-span-3 h-full w-full">
            <div className={`h-full w-full bg-[#F7F2EE] duration-300 ease-out ${startTimeline ? "scale-y-100" : "scale-y-0"}`}>Swap projects with simple clicks</div>
            <div className="h-full w-full"></div>
            <div className={`h-full w-full bg-white duration-300 ease-out ${startTimeline3 ? "scale-y-100" : "scale-y-0"}`}>Save your progress on your account</div>
          </div>
          <div className="h-full">
            <div className={`w-1 h-full origin-top bg-black/50 duration-3600 ease-out ${startTimeline ? "scale-y-100" : "scale-y-0"}`}></div>
          </div>
          <div className="grid grid-rows-3 col-span-3 h-full w-full">
            <div className="h-full w-full"></div>
            <div className={`h-full w-full bg-white duration-300 ease-out ${startTimeline2 ? "scale-y-100" : "scale-y-0"}`}>Add job description to get recommendations to tweak your Resume</div>
            <div className="h-full w-full"></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-gray-200 h-1/2">
        How we make your life easier
        <div className="flex justify-evenly space-x-10">
          <div className="bg-gray-300">Save all your experiences and projects in one place</div>
          <div className="bg-gray-300">Use our AI to quickly customize your bullet points</div>
          <div className="bg-gray-300">Get ATS friendly, Overleaf generated Resumes</div>
        </div>
      </div>
      <div className="bg-gray-300 h-1/2">
        <div>
          Testimonials
        </div>
      </div>
      <div className="bg-gray-300 h-1/2">
        <div>
          Contact Details
        </div>
      </div>
    </div>
  );
}
