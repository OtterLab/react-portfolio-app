import React from 'react';
import classes from './HomeStyles.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import profileAvatar from '../../assets/avatar_profile.svg';
import Button from '@mui/material/Button';
import FloatingCubesBG from '../FloatingCubes/FloatingCubes';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (  
        <div className="w-full h-screen bg-gradient-to-b from-dark-navy to-light-navy">
            { /* Floating cubes background */}
            <FloatingCubesBG/>
            <Container maxWidth="lg" className="flex flex-col mx-auto h-full justify-center items-center px-4 md:flex-row">
                <div className="flex flex-col h-full justify-center">
                    <div className={classes.headingTitleContent}>
                        <Typography variant="h4" className={classes.subHeadingText}><span></span>Hello,</Typography>
                        <Typography variant="h2" className="text-gray-100 font-semibold text-4xl sm:text-7xl mt-[2px]">I'm Leanne</Typography>
                        <Typography variant="h5" className="text-gray-400 text-xl uppercase tracking-[5px] ml-[3px] mt-[3px]">
                            <Typewriter 
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: [
                                    "Graphic Designer",
                                    "Frontend Developer"
                                ]
                            }}>
                            </Typewriter>
                        </Typography>
                    </div>
                </div>
                <div className="relative top-[1em] left-[9em]">
                    <div className={classes.avatarCircle}>
                        <img src={profileAvatar} alt="profile avatar" className={classes.avatarImg}/>
                    </div>
                </div>

                {/* Social media */}
                <div className="hidden lg:flex fixed flex-col top-[26%] left-8">
                    <Typography variant="subtitle1" className={classes.socialText}><span></span>Follow me</Typography>
                </div>
                <div className="hidden lg:flex fixed flex-col top-[61%] left-0">
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300">
                            <a href="https://www.facebook.com/LeYing86" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
                            Facebook <FaFacebookF size={23}/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300">
                            <a href="#ds" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
                            Instagram <FaInstagram size={23}/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300">
                            <a href="#ds" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
                            Github <FaGithub size={23}/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300">
                            <a href="#ds" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
                            Linkedin <FaLinkedinIn size={23}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}

export default Home;