import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="text-[#1A1A1A] font-lmodern w-full h-screen">
      <NavBar/>
      <div className="bg-cover bg-center bg-[url('/life.jpg')] w-full h-full text-[#F2F2F2] p-15">
        <div className="text-8xl mt-25 font-bold">
          Tired of customizing <br/> 
          your Resume?
        </div>
        <div className="text-4xl my-25 font-semibold">
          No more with Resume Customizer!
        </div>
        <div className="text-2xl">
          <button className="bg-sky-800 rounded p-5">Learn More!</button>
        </div>
      </div>
      <div className="bg-gray-400 p-5 place-items-center w-full h-full">
        Toggle buttons to quickly generate Overleaf PDFs
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
