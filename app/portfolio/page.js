// import Image from 'next/image';
import Image from "next/image";
import Link from "next/link";
import projectOne from '../../images/projects/project-1.webp';
import projectTwo from '../../images/projects/project2.avif';
import projectTree from '../../images/projects/project3.webp';
import projectFour from '../../images/projects/project4.webp';
// import { useEffect, useState } from 'react';

const projects = [
    {
        name: "Musion - Gardening Website Template",
        img: projectOne,
        createdAt: "2022-02-20"
    },
    {
        name: "SEOLLY - SEO Marketing & Digital Agency",
        img: projectTwo,
        createdAt: "2022-02-21"
    },
    {
        name: "Virtuf - Creative Agency Bootstrap 5 Template",
        img: projectTree,
        createdAt: "2022-02-22"
    },
    {
        name: "Givest - Non Profit PSD Template",
        img: projectFour,
        createdAt: "2022-02-23"

    }
]

const getProjects = async () => {
    const res = await fetch('http://localhost:4000/projects');
    return res.json()
}

const Portfolio = async () => {

    // const [projects, setProjects] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //     const res = await fetch('http://localhost:4000/projects');
    //     const data = await res.json();
    //     setProjects(data);
    //     };
    //     fetchData();
    // }, []);
    
    // const projects = await getProjects()
    // console.log(projects);

    return (
        <section className="text-gray-200 body-font">
            <div className="container mx-auto mt-20 px-5 pt-26 pb-14 lg:max-w-screen-lg">
                <div className="mb-16  text-center">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-medium title-font pb-2  from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
                        My projects
                    </h2>
                </div>

                <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="relative flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 max-w-sm mb-1 cursor-pointer">
                        <div className="rounded-lg w-full">
                            <Image
                                className="h-60 rounded-xl min-w-full object-cover object-center mb-3 " 
                                src={project.img}
                                alt={project.name}
                            />
                            <p className="leading-relaxed text-base text-gray-300">{project.createdAt}</p>
                            <h2 className="text-4xl text-gray-200 font-medium title-font mt-1 mb-3">{project.name}</h2>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
  