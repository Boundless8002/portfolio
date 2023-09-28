import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { Link } from 'react-scroll'
import { projectOne, projectTwo, projectThree, food, quiz, dictionary, food2 } from '../../assets/index'

const Projects = () => {
    return (
        <section className="w-full py-20 border-b-[1px]" id="projects">
            <div className="flex flex-col justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid frid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                <a href="https://foodfrontend-gray.vercel.app/" target="_blank">
                    <ProjectCard
                        title="Restaurant Website"
                        des="This project is an online website to book your food online."
                        src={food2}

                    /></a>
                <a href="https://64e629143d89de2887e5c8d5--earnest-liger-cf510a.netlify.app" target="_blank">
                    <ProjectCard
                        title="Web Quiz Website"
                        des="It is web quiz App with timer.You can get result after submitting the quiz."
                        src={quiz} /></a>
                <a href="https://64e4cb4d030f9c18dbf064f3--scintillating-trifle-d0645b.netlify.app" target="_blank">
                    <ProjectCard
                        title="Dictionary App"
                        des="This project is searching for words after getting an API from a dictionary"
                        src={dictionary}
                    /></a>

                {/* <ProjectCard
                    title="E-Commerce Website"
                    des="loLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardrem"
                    src={projectTwo} />
                <ProjectCard
                    title="E-Commerce Website"
                    des="loLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardrem"
                    src={projectThree}
                />
                <ProjectCard
                    title="E-Commerce Website"
                    des="loLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standardrem"
                    src={projectOne}
                /> */}
            </div>

        </section>
    )
}

export default Projects