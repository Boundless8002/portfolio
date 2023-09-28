import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion"

const TechnicalSkills = () => {
    return (
        <>
            <div className="flex justify-center items-center py-10">
                <h2 className="text-2xl font-bold">Technical skills</h2>
            </div>
            <div className="w-full px-12 py-10 h-80 rounded-lg flex flex-col shadow-md bg-gradient-to-r from-blue-900 to to-blue-950 group hover:bg-gradient-to-b hover:from-[#00008B] hover:to-blue-950 transition-colors duration-100 ">
                <div className="w-[85%] overflow-x-hidden">
                    <p className="uppercase font-semibold">React</p>
                    <span
                        className="w-[90%] h-2 bg-opacity-40 bg-black inline-flex rounded-md mt-2">
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-600 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="w-[85%] overflow-x-hidden ">
                    <p className="uppercase font-semibold">Javacript</p>
                    <span className="w-[75%] h-2 bg-opacity-40 bg-black inline-flex rounded-md mt-2">
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-600 rounded-md relative">
                            <span className="absolute -top-7 right-0">75%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="w-[85%] overflow-x-hidden  ">
                    <p className="uppercase font-semibold">CSS</p>
                    <span className="w-[80%] h-2 bg-opacity-40 bg-black inline-flex rounded-md mt-2">
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-600 rounded-md relative">
                            <span className="absolute -top-7 right-0">80%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="w-[85%] overflow-x-hidden  ">
                    <p className="uppercase font-semibold">HTML</p>
                    <span className="w-[90%] h-2 bg-opacity-40 bg-black inline-flex rounded-md mt-2">
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-600 rounded-md relative">
                            <span className="absolute -top-7 right-0">90%</span>
                        </motion.span>
                    </span>
                </div>
                <div className="w-[85%] overflow-x-hidden  ">
                    <p className="uppercase font-semibold">Data Structure</p>
                    <span className="w-[80%] h-2 bg-opacity-40 bg-black inline-flex rounded-md mt-2">
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-full h-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-600 rounded-md relative">
                            <span className="absolute -top-7 right-0">80%</span>
                        </motion.span>
                    </span>
                </div>
            </div>
        </>
    )
}

export default TechnicalSkills