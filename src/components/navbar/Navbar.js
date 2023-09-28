import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { amit } from '../../assets/index';
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from 'react-icons/fa'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="w-full sticky top-0 z-50 bg-blue-900 mx-auto border-b-[1px] border-b-gray-800">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div>
                        <img className="w-16 h-16 rounded-full" src={amit} alt="logo" />
                    </div>
                    <div className="hidden sm:block">
                        <ul className="hidden mdl:inline-flex justify-center gap-6 md:gap-10 font-serif">
                            {navLinksdata.map(({ _id, title, link }) => (
                                <li
                                    className="text-base text-gray-200 cursor-pointer tracking-wide hover:text-red-600 duration-500"
                                    key={_id}
                                >
                                    <Link
                                        activeClass="active"
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <span onClick={() => setShowMenu(!showMenu)} className="text-2xl mdl:hidden bg-blue-950 w-10 h-10 inline-flex  items-center justify-center rounded-full cursor-pointer text-red-600"><FiMenu /></span>
                        {
                            showMenu && (
                                <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                                    <div className="flex flex-col gap-6">
                                        <div>
                                            <img className="w-16 h-16 rounded-full" src={amit} alt="logo" />
                                            <p className="text-sm text-gray-400 mt-2">Always try to do great & make your own idiosyncrasy . </p>
                                        </div>
                                        <ul className="flex flex-col gap-4">
                                            {
                                                navLinksdata.map((item) => (
                                                    <li key={item._id} className="text-base text-gray-200 cursor-pointer tracking-wide hover:text-red-600 duration-500"
                                                    >
                                                        <Link onClick={() => setShowMenu(false)}
                                                            activeClass="active"
                                                            to={item.link}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-70}
                                                            duration={500}
                                                        >{item.title}</Link></li>
                                                ))
                                            }
                                        </ul>
                                        <div className="flex flex-col gap-5">
                                            <h2 className="uppercase mb-4 text-base font-bold">Find me in</h2>
                                            <div className="flex gap-4">
                                                <span className="bannerIcon"><FaFacebook /></span>
                                                <span className="bannerIcon"><FaTwitter /></span>
                                                <span className="bannerIcon"><FaLinkedin /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <span onClick={() => setShowMenu(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-600 duration-300 text-2xl cursor-pointer"><MdClose /></span>
                                </div>
                            )
                        }
                    </div>
                    <div className="sm:hidden">
                        {/* Mobile menu button */}
                        {/* You can add your mobile menu toggle button here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
