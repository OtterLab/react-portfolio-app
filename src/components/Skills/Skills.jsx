import React from 'react';
import classes from './SkillsStyles.module.css';
import Typography from '@mui/material/Typography';
import { DiReact, DiHtml5, DiCss3Full, DiPhp } from "react-icons/di";
import { FaVuejs, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiAdobecreativecloud } from "react-icons/si";

function Skills() {
    return (  
        <div name="skills" className="w-full h-screen bg-navy-black">
            <div className={classes.skillsHeading}>
                <Typography variant="h2" className="text-light-navy text-center font-bold uppercase tracking-[1px]">My Skills</Typography>
                <Typography variant="h5" className="text-gray-100 font-semibold font-[16px] text-center relative bottom-[2.2em]">What I Do</Typography>
            </div>
            <div className="flex flex-wrap mx-auto gap-4 justify-center w-[80%] relative top-[4em]">
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <DiHtml5 size={70} className="fill-[#EA580C] mx-auto relative top-[2.3em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[2.8em] font-medium tracking-[1px]">HTML</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <DiCss3Full size={70} className="fill-sky-600 mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">CSS</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <DiReact size={70} className="fill-cyan-300 mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">ReactJS</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <FaVuejs size={70} className="fill-emerald-500 mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">VueJS</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <SiTailwindcss size={70} className="fill-sky-400 mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">TailwindCSS</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <FaLaravel size={70} className="fill-[#EA580C] mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">Laravel</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <DiPhp size={70} className="fill-indigo-400 mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">PHP</Typography>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardContent}>
                        <SiAdobecreativecloud size={70} className="fill-red-600 mx-auto relative top-[2.6em]"/>
                        <Typography variant="subtitle1" className="text-gray-100 text-[14px] text-center relative pt-[3em] font-medium tracking-[1px]">Adobe Creative Cloud</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;