import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
    return (
        <div className="w-full px-12 py-10 h-80 rounded-lg flex items-center shadow-md bg-gradient-to-r from-blue-900 to to-blue-950 group hover:bg-gradient-to-b hover:from-[#00008B] hover:to-blue-950 transition-colors duration-100 ">
            <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-8 translate-y-10 group-hover:translate-y-0 duration-500 transition-transform ">
                    <div>
                        <span className="text-red-600 text-5xl">{icon}</span>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl">{title}</h2>
                        <p>{des}</p>
                        <span className="text-2xl text-red-600"><HiArrowRight /></span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card