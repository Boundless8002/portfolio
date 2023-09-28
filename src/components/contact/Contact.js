import React, { useState } from 'react'
import Title from '../layouts/Title'
import { contactImg } from '../../assets/index'
import { FaFacebook, FaTwitter, FaLinkedin, FaReact } from 'react-icons/fa'
import ContactLeft from './ContactLeft'

const Contact = ({ des }) => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [err, setErr] = useState("");
    const [success, setSuccess] = useState("");


    function hideSuccess() {
        setSuccess("")
    }
    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    const handleMessage = (e) => {
        e.preventDefault();

        if (name === "") {
            setErr("Your name is required")
        }
        else if (mobile === "") {
            setErr("Please Enter your mobile number")
        }

        else if (email === "") {
            setErr("Please Enter your email")
        }
        else if (!emailValidation(email)) {
            setErr("Please enter Valid Email ID")
        }
        else if (subject === "") {
            setErr("Enter your subject")
        }
        else if (message === "") {
            setErr("Please enter your message")
        }
        else {

            setSuccess(`Thank you dear ${name} , Your message has been sent Successfully!`)
            setTimeout(hideSuccess, 5000)



            setErr("")
            setName("")
            setMobile("")
            setEmail("")
            setSubject("")
            setMessage("")

        }
    }
    return (
        <section className="w-full py-20 border-b-[1px]" id="contact">
            <div className="flex flex-col justify-center items-center text-center ">
                <Title
                    title="Contact"
                    des="Contact me"
                />
            </div>
            <div className="w-full flex flex-col ">
                <div className="w-full h-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between">
                    <ContactLeft />
                    <div className="w-[100%] md:w-[60%] h-full flex flex-col justify-between  bg-gradient-to-r from-[#00308F] to-[#002244] p-8  gap-8" >
                        <form className="w-full">
                            {
                                err && <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]  text-center text-orange-500 text-base tracking-wide animate-bounce">{err}</p>
                            }
                            {
                                success &&
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]  text-center text-green-500 text-base tracking-wide animate-bounce">{success}</p>
                            }
                            <div className=" flex flex-col md:flex-row  gap-4 md:gap-10">
                                <div className="w-full md:w-1/2"> <p className="">Your Name</p>
                                    <input onChange={(e) => setName(e.target.value)} type="text" value={name} className={`${err === "Your name is required" && "outline-red-600"} contactform`} />
                                </div>
                                <div className="w-full md:w-1/2"> <p className="">Mobile </p>
                                    <input onChange={(e) => setMobile(e.target.value)} type="text" value={mobile} className={`${err === "Please Enter your mobile number" && "outline-red-600"} contactform`} />
                                </div>
                            </div>
                            <div className="w-full flex flex-col mt-2">
                                <p className="">Email</p>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className={`${(err === "Please Enter your email") || (err === "Please enter Valid Email ID") && "outline-red-600"} contactform`} />
                            </div>
                            <div className="w-full flex flex-col mt-2">
                                <p className="">Subject</p>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className={`${err === "Enter your subject" && "outline-red-600"} contactform`} />
                            </div>
                            <div className="w-fullflex flex-col mt-2">
                                <p className="">Message</p>
                                <textarea onChange={(e) => setMessage(e.target.value)} className={`${err === "Please enter your message" && "outline-red-600"} contactTextarea`} value={message} cols='30' rows='8' ></textarea >
                            </div>
                            <div className="w-fullflex flex-col mt-2">

                                <button onClick={handleMessage} className="w-full h-12 mt-2 rounded-lg border-b-[1px] border-b-gray-600 bg-gray-700 px-4 active:outline-none  outline-none focus-visible:outline-red-600 focus-visible:border-b-transparent duration-300 hover:border-red-600"  >Send Message</button>
                            </div>

                            {
                                err && <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]  text-center text-orange-500 text-base tracking-wide animate-bounce mt-6 ">{err}</p>
                            }
                            {
                                success &&
                                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]  text-center text-green-500 text-base tracking-wide animate-bounce mt-6">{success}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact