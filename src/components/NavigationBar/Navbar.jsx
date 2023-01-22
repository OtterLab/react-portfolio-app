import React, {useState} from 'react';
import classes from './NavbarStyles.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from '../../assets/ltcreative_logo_design.svg';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from "react-icons/hi";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const navMenuItems = [
    { id: 1, title: "about" },
    { id: 2, title: "skills" },
    { id: 3, title: "projects" },
    { id: 4, title: "contact" }
];

function Navbar() {
    const [navMenu, setNavMenu] = useState(false);
    const handleClick = () => setNavMenu(!navMenu);

    const trigger = useScrollTrigger();

    return (  
        <AppBar elevation={0} sx={{backgroundColor: trigger ? "#1A1F28" : "transparent"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{height: "80px"}}>
                    <Box sx={{flexGrow: 1}}>
                        <img src={Logo} alt="LT Creative logo design" className={classes.logoImg}/>
                    </Box>
                    <ul className="md:flex hidden">
                        {navMenuItems.map(({id, title}) => (
                            <li key={id} className={classes.navLinks}>
                                <Link to={title} smooth={true} duration={700} offset={-80}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
                        {!navMenu ? <HiMenu size={30}/> : <HiX size={30}/>}
                    </div>
                </Toolbar>
                <ul className={!navMenu ? "hidden" : "w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-dark-navy to-light-navy flex flex-col justify-center items-center"}>
                    {navMenuItems.map(({id, title}) => (
                        <li key={id} className={classes.navMenuLists}>
                            <Link to={title} onClick={handleClick} smooth={true} duration={500}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </AppBar>
    );
}

export default Navbar;