import React from 'react';
import classes from './LoadingStyles.module.css';

function Loading() {
    return (  
        <div className={classes.loadingContainer}>
            <div className={classes.loadingText}>
                <p>Loading</p>
            </div>
            <div className={classes.reverseSpinner}></div>
        </div>
    );
}

export default Loading;