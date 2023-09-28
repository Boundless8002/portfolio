import React from 'react'
import ResumeCard from './ResumeCard'

const ProfessionalSkills = () => {
  return (
    <>
      <div className="flex justify-center items-center py-10">
        <h2 className="text-2xl font-bold">Professional skills</h2>
      </div>
      <div className="w-full px-12 py-10 h-80 rounded-lg flex justify-center shadow-md bg-gradient-to-r from-blue-900 to to-blue-950 group hover:bg-gradient-to-b hover:from-[#00008B] hover:to-blue-950 transition-colors duration-100 ">
        <div className="flex flex-col gap-4">
          <div> <h3 className="text-xl md:text-2xl font-bold ">* <span >Ability to work under pressure</span></h3></div>
          <div><h3 className="text-xl md:text-2xl font-bold ">* <span >Experience of Operation Department</span></h3></div>
          <div> <h3 className="text-xl md:text-2xl font-bold ">* <span >Convincing ability </span></h3></div>
        </div>



      </div>
    </>
  )
}

export default ProfessionalSkills
