import React from 'react'

import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {

    return (
        <section id="home" className="w-full pt-10 pb-20 flex flex-col lgl:flex-row items-center gap-8 xl:gap-0 border-b-[1px] border-b-black">
            <LeftBanner />
            <RightBanner />
        </section>
    )
}

export default Banner