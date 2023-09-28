import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { FaMobile, FaGlobe } from "react-icons/fa"
import { SiProgress, SiAntdesign } from "react-icons/si"
import { AiFillAppstore } from "react-icons/ai"
import { BiSolidBusiness } from 'react-icons/bi'
import { PiDeviceMobileCameraFill } from "react-icons/pi"


export const Feature = ({ title, des }) => {
    return (
        <section id="features" className="w-full  py-20   border-b-[1px] border-b-black">
            <Title title="Features" des="What I Do" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-20">
                <Card
                    title="Business Stratagy"
                    des="Effective business strategies are the key factor which sets apart an ordinary business from an extraordinairy business group. "

                    icon={<BiSolidBusiness />}


                />
                <Card
                    title="App Development"
                    des="An app strategy should align with the business's overall strategy, including its mission, vision, values, and competitive advantage. "
                    icon={<AiFillAppstore />}
                />
                <Card
                    title="SEO optimisation"
                    des=" Essentially, it is the process you follow in order to maximize the opportunity to gain organic traffic from search engines.  "
                    icon={<SiProgress />} />
                <Card
                    title="Mobile Responsive"
                    des="Responsive design was always a requirement and now that we’re building apps using the “mobile first” mindset, is even more important than ever. "
                    icon={<PiDeviceMobileCameraFill />} />
                <Card
                    title="UX Design"
                    des="A UX strategy is a detailed plan to align a company's brand identity with the desired user experience at every customer touchpoint"
                    icon={<SiAntdesign />} />
                <Card
                    title="Hosting Website"
                    des=" When a hosting provider allocates space on a web server for a website to store its files, they are hosting a website. "
                    icon={<FaGlobe />} />
            </div>
        </section >
    )
}
