import React from 'react'

const ResumeCard = ({ title, subtitle, des, result }) => {

    return (
        <div className="w-full flex p-2 lgl:px-10 flex-col gap-6 md:gap-10">
            <div className="w-full flex flex-col lgl:flex-row lgl:justify-between lgl:items-center gap-2 md:gap-0">
                <div >
                    <h3 className="text-md md:text-2xl group-hover:text-white font-semibold duration-300">{title}</h3>
                    <p className="text-sm md:text-xl text-gray-400 group-hover:text-pink-400 font-semibold duration-300">{subtitle}</p>
                </div>
                <div>
                    <h3 className="text-red-600 px-4 py-2 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow drop-shadow-lg font-bold">{result}</h3>
                </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 duration-300 font-medium">{des}</p>
        </div>

    )
}

export default ResumeCard