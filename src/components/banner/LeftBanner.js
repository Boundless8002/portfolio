import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebook, FaTwitter, FaLinkedin, FaReact, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si"
import { Link } from 'react-scroll'
import { AiFillHtml5 } from "react-icons/ai"


const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Professional coder .', 'Frontend Developer .', 'UI Designer .'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,


    })
    const facebookURL = 'https://www.facebook.com';
    const twitterURL = 'https://twitter.com';
    const linkedinURL = 'https://www.linkedin.com';
    return (

        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className='flex flex-col gap-5'>
                <h4 className="text-lg font-bold">WELCOME TO MY WORLD</h4>
                <h1 className='text-6xl font-bold text-white'>Hi , I'm <span className="text-red-600">Amit Rajawat</span></h1>
                <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorColor='red'
                        cursorStyle="|"

                    ></Cursor>
                </h2>
                <p className="font-normal text-base text-gray-300 leading-6">To make your website most beautiful,interactive ,impressive and dynamic using React.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div >
                    <h2 className="uppercase mb-4 text-base font-bold">Find me in</h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <a href={facebookURL} target="_blank"><FaFacebook /></a>
                        </span>
                        <span className="bannerIcon">
                            <a href={twitterURL} target="_blank">
                                <FaTwitter /></a></span>
                        <span className="bannerIcon">
                            <a href={linkedinURL} target="_blank">
                                <FaLinkedin /></a></span>
                    </div>

                </div>
                <div>
                    <h2 className="uppercase mb-4 text-base font-bold">Best skills in</h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon"><FaReact /></span>
                        <span className="bannerIcon">< SiTailwindcss /></span>
                        <span className="bannerIcon"><AiFillHtml5 /></span>
                        <span className="bannerIcon"><FaJava /></span>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default LeftBanner