import React, { useState } from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard'
import Education from './Education'
import TechnicalSkills from './TechnicalSkills'
import ProfessionalSkills from './ProfessionalSkills'

const Resume = () => {
    const [education, setEducation] = useState(true)
    const [technical, setTechnical] = useState(false)
    const [professional, setProfessional] = useState(false)

    return (
        <section className="w-full py-20 border-b-[1px]" id="resume">
            <div className="flex flex-col justify-center items-center text-center ">
                <Title
                    des="MY RESUME"
                />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <li onClick={() =>
                        setEducation(true) &
                        setTechnical(false) &
                        setProfessional(false)
                    } className={`${education ? "border-red-600 border-[2px] rounded-lg" : "border-transparent"} ResumeLi`}>Education</li>
                    <li
                        onClick={() =>
                            setEducation(false) &
                            setTechnical(true) &
                            setProfessional(false)
                        }
                        className={`${technical ? "border-red-600 border-[2px] rounded-lg" : "border-transparent"} ResumeLi`}>Technical skills</li>
                    <li
                        onClick={() =>
                            setEducation(false) &
                            setTechnical(false) &
                            setProfessional(true)
                        }
                        className={`${professional ? "border-red-600 border-[2px] rounded-lg" : "border-transparent"} ResumeLi`}>Professional skills</li>
                </ul>
            </div>
            {education && <Education />}
            {technical && <TechnicalSkills />}
            {professional && <ProfessionalSkills />}
        </section>
    )
}

export default Resume