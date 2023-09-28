import React from 'react'
import { contactImg } from '../../assets/index'
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from 'react-icons/fa'

const ContactLeft = () => {
    const facebookURL = 'https://www.facebook.com';
    const twitterURL = 'https://twitter.com';
    const linkedinURL = 'https://www.linkedin.com';

    return (
        <div className="w-[100%] md:w-[35%] h-full bg-gradient-to-r from-[#00308F] to-[#002244] p-8 flex flex-col gap-8">
            <img className="w-full h-64 rounded-lg  object-cover" src={contactImg} alt="contactImg" />
            <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-white">Amit Rajawat</h3>
                <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
                <p className="text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p className="text-base flex items-center gap-2 text-gray-400">Phone : <span className="text-white">+91 7895285589</span></p>
                <p className="text-base flex items-center gap-2 text-gray-400">Email : <span className="text-white">amitrajawat8002@gmail.com</span></p>

            </div>
            <div className="flex flex-col gap-5">
                <h2 className="uppercase mb-4 text-base font-bold">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon"><a href={facebookURL} target="_blank"><FaFacebook /></a></span>
                    <span className="bannerIcon">

                        <a href={twitterURL} target="_blank">
                            <FaTwitter /></a>
                    </span>
                    <span className="bannerIcon">
                        <a href={linkedinURL} target="_blank">
                            <FaLinkedin /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ContactLeft