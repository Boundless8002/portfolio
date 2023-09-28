import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'


const ProjectCard = ({ title, des, src }) => {
    return (
        <div className="w-full h-auto px-12 py-10 rounded-lg shadow-md flex flex-col bg-gradient-to-r from-blue-900 to-blue-950 group hover:bg-gradient-to-b hover:  hover:from-[rgb(3,3,43)] hover:to-[#050A30] transition-colors duration-1000">
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img className="w-full h-60 group-hover:scale-110 object-cover duration-300" src={src} alt="src" />

            </div>
            <div className="w-full mt-4 flex flex-col gap-5 ">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-red-600">{title}</h3>
                    <div className="flex gap-2">
                        <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer "><BsGithub /></span>
                        <span className="text-lg w-8 h-8 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-red-600 duration-300 cursor-pointer "><FaGlobe /></span>
                    </div>
                </div>
                <div>
                    <p>{des}</p></div>
            </div>
        </div>
    )
}

export default ProjectCard