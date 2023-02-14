import React, {useEffect} from 'react';
import classes from './HomeStyles.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import profileAvatar from '../../assets/avatar_profile.svg';
import FloatingCubesBG from '../FloatingCubes/FloatingCubes';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import 'animate.css';

function Home() {
    
    return (  
        <div className="w-full h-screen bg-gradient-to-b from-dark-navy to-light-navy">
            {/* Floating cubes background */}
            <FloatingCubesBG/>
            <Container maxWidth="lg" className="flex flex-col mx-auto h-full justify-center items-center px-4 md:flex-row">
                <div className="flex flex-col h-full justify-center">
                    <div className="animate__animated animate__fadeInUp animate__slow">
                        <div className={classes.headingTitleContent}>
                            <Typography variant="h4" className={classes.subHeadingText}><span></span>Hello,</Typography>
                            <Typography variant="h2" className="text-gray-100 font-semibold text-4xl sm:text-7xl mt-[2px]">I'm Leanne</Typography>
                            <Typography variant="h5" className="text-gray-400 text-[13px] sm:text-xl uppercase tracking-[1px] sm:tracking-[5px] ml-[3px] mt-[3px]">
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
                    <div className="relative right-[10em] top-[2px]">
                        <Link to="projects" smooth={true} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden h-[45px] font-medium text-gray-100 transition duration-300 ease-out bg-gradient-to-r from-orange to-light-yellow rounded-md shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-100 duration-300 -translate-x-full bg-navy-black border-2 border-light-yellow rounded-md group-hover:translate-x-0 ease">
                                <HiArrowRight size={25} className="fill-gray-100"/>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-dark-navy transition-all duration-300 transform group-hover:translate-x-full ease">View Portfolio</span>
                            <span className="relative invisible">View Portfolio</span>
                        </Link>
                    </div>
                </div>
                <div className="relative right-[4em] sm:left-[10em]">
                    <div className={classes.avatarCircle}>
                        <img src={profileAvatar} alt="profile avatar" className={classes.avatarImg}/>
                    </div>
                </div>

                {/* scroll animation */}
                <div className="absolute left-[12.7%] bottom-[18%]">
                    <div className={classes.scrollArea}>
                        <div className={classes.mouseScroll}></div>
                        <p className="text-gray-400 ml-[14px] mt-[5px]">scroll down</p>
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
                            <a href="https://www.instagram.com/octtolab985" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
                            Instagram <FaInstagram size={23}/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300">
                            <a href="https://github.com/OtterLab" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
                            Github <FaGithub size={23}/>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300">
                            <a href="https://www.linkedin.com/in/ltruong29" className="flex justify-between items-center w-full pl-[25px] text-gray-100 text-[14px]">
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