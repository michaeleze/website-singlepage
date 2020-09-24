import React from "react";
import Me from "../../../assets/images/me5.jpg";
import {useStyles} from "./index.styles";

export const ContentBottom: React.FC = () => {
    const classes = useStyles();

    return (
        <section className={classes.bottomContainer}>
            <div className={classes.portfolioContainer}>
                <div className={classes.portfolio}>
                    HelloWorld
                </div>
            </div>
            <div className={classes.contactContainer}>
                <div className={classes.contact}>
                    <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </div>
        </section>
    )
};
