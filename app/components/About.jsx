import React from 'react';
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
    return (
        <div
            id="about"
            className="w-full px-[12%] py-4 scroll-mt-20"
        >
            {/* Heading */}
            <h4 className="text-center mb-1 text-lg font-Ovo">
                Introduction
            </h4>

            <h2 className="text-center text-5xl font-Ovo mb-4">
                About Me
            </h2>

            {/* Content */}
            <div className='flex w-full flex-col lg:flex-row items-start gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl overflow-hidden'>
                    <Image
                        src={assets.user_image}
                        alt='user'
                        className='w-full rounded-3xl'
                    />
                </div>

                <div className="flex-1">
                    <p className='max-w-2xl font-Ovo leading-7'>
                        I am a passionate MERN Stack Developer with hands-on experience in
                        building responsive and user-friendly web applications using
                        MongoDB, Express.js, React.js, and Node.js. During my internship,
                        I worked on developing dynamic web applications, integrating APIs,
                        and enhancing user experiences.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-6'>
                        {infoList.map(({ icon, iconDark, title, description },
                            index) => (
                            <li
                                className="border border-gray-400 rounded-xl p-6 cursor-pointer
                                           hover:shadow-xl hover:shadow-black
                                           hover:-translate-y-2 transition-all duration-500"
                                   key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>
                                    {title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700 font-Ovo'> Tools I use</h4>

                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index)=>(
                         <li className='flex items-center justify-center w-12
                         sm:w-14 aspect-square border border-gray-400
                         rounded-lg cursor-pointer hover:-translate-y-2 transition-all duration-500'
                         key={index}>
                            <Image src={tool} alt='Tool' className='w-5
                            sm:w-7'/>

                         </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default About;