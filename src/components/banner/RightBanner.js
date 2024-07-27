import React from 'react'
import { bannerImg } from '../../assets/index'
const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex  justify-center items-center">
            <img className="w-[300px] h-[280px] lgl:w-[500px] lgl:h-[420px] z-10"
                //  src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966"
                src="assets/images/developer.gif"
                alt="bannerImg" />
        </div>
    )
}

export default RightBanner
