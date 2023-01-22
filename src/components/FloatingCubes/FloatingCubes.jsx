import React from 'react';
import classes from './FloatingCubesStyles.module.css';

function FloatingCubes() {
    return (  
        <div className={classes.animationArea}>
            <div className={classes.cube}>
                <div className={classes.cubeItem}></div>
                <div className={classes.cubeItem}></div>
                <div className={classes.cubeItem}></div>
                <div className={classes.cubeItem}></div>
                <div className={classes.cubeItem}></div>
                <div className={classes.cubeItem}></div>
            </div>
        </div>
    );
}

export default FloatingCubes;