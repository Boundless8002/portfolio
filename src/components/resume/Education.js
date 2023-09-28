import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion"

const Education = () => {
    return (
        <>
            <div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="flex flex-col lgl:flex-row justify-center items-center py-10" >
                <h2 className="text-2xl font-bold">Education Qualification</h2>
            </div>
            <div className="w-full px-12 py-10 h-80 rounded-lg flex justify-center shadow-md bg-gradient-to-r from-blue-900 to to-blue-950 group hover:bg-gradient-to-b hover:from-[#00008B] hover:to-blue-950 transition-colors duration-100 ">
                <ResumeCard
                    title="BE in Electronics and Communication Engineering"
                    subtitle="Rustamji Institute of Technology - [RJIT],Gwalior"
                    result="80.8%"
                    des="This course combines the study of technology, software, designing, etc to help students comprehend the processes that are required in electronics development."
                />
            </div>
        </>
    )
}

export default Education