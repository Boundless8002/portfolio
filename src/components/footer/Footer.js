import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { Link } from 'react-scroll'
const Footer = () => {
    const facebookURL = 'https://www.facebook.com';
    const twitterURL = 'https://twitter.com';
    const linkedinURL = 'https://www.linkedin.com';
    const youtubeURL = "https://www.youtube.com"

    return (

        <div className="w-full h-96 bg-blue-950 ">
            <div className="w-full h-full flex flex-col gap-8 justify-center items-center  ">

                <div className="flex gap-4 justify-center items-center">
                    <span className="bannerIcon">

                        <a href={facebookURL} target="_blank"><FaFacebook /></a>
                    </span>
                    <span className="bannerIcon">
                        <a href={twitterURL} target="_blank">
                            <FaTwitter /></a>
                    </span>
                    <span className="bannerIcon">
                        <a href={linkedinURL} target="_blank">
                            <FaLinkedin /></a>
                    </span>
                    <span className="bannerIcon">
                        <a href={youtubeURL} target="_blank"><BsYoutube /></a></span>
                </div>
                <div className="w-full flex justify-center gap-5 cursor-pointer ">
                    <Link to="home" className="hover:text-red-600 hover:font-bold " >Home</Link>
                    <Link className="hover:text-red-600 hover:font-bold" to="resume">About</Link>
                    <Link className="hover:text-red-600 hover:font-bold" to="projects">Projects</Link>
                    <Link to="contact" className="hover:text-red-600 hover:font-bold">Contact</Link>
                </div>
                <div className="">&copy; Amitrajawat | All Rights Reserved</div>
            </div>



        </div>

    )
}

export default Footer