import React from 'react'

const Title = ({ title, des }) => {
    return (
        <div className="flex flex-col gap-4 mb-14">
            <h3 className="text-2xl   font-semibold text-red-600">{title}</h3>
            <h1 className="text-4xl md:text-5xl font-bold ">{des}</h1>
        </div>

    )
}

export default Title