import React from 'react';
import classes from './AboutStyles.module.css';
import Typography from '@mui/material/Typography';
import { GoCloudDownload } from "react-icons/go";
import cv from "../../assets/cv/ltcreative_resume.pdf";

function About() {
    return (  
        <div name="about" className="h-screen w-full bg-navy-black">
            <div className="relative top-[10%]">
                <div className={classes.aboutHeading}>
                    <Typography variant="h2" className="text-light-navy text-center font-bold uppercase tracking-[1px]">About</Typography>
                    <Typography variant="h5" className="text-gray-100 font-semibold font-[16px] text-center relative bottom-[2.2em]">Know Me More</Typography>
                </div>
                <div className="relative top-[2em] mx-auto w-[50%]">
                    <Typography variant="body2" className="text-gray-100 tracking-[1px] text-center">
                        A graduate graphic designer and frontend developer with a particular interest in UX and UI
                        web development. Willing to learn new skills and to take on new challenges to create interactive
                        components and bring them to life. Outside of graphic design and frontend development,
                        personal interests include travelling, shopping and looking at architecture.
                    </Typography>

                    {/* Download button */}
                    <div className={classes.downloadBtn}>
                        <a href={cv} download="ltcreative_cv.pdf" className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-light-yellow to-orange group-hover:from-light-yellow group-hover:via-orange group-hover:to-orange absolute"></span>
                            <span className="px-6 py-2 text-[14px] transition-all ease-out text-gray-100 bg-dark-navy rounded-md group-hover:bg-opacity-0 duration-400 z-20 flex items-center">
                                <span className="relative right-[1em]">
                                <GoCloudDownload size={18} className="absolute left-[6em] ml-[15px] mt-[1px]"/>
                                    Download CV
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;