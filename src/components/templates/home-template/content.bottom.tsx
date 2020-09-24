import React from "react";
import Me from "../../../assets/images/me5.jpg";
import {useStyles} from "./index.styles";

export const ContentBottom: React.FC = () => {
    const classes = useStyles();

    return (
        <section className={classes.bottom}>
            <div className={classes.portfolio}>
                <div className={classes.portfolioContainer}>
                    HelloWorld
                </div>
            </div>
            <div className={classes.contact}>
                <div className={classes.contactContainer}>
                    <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </div>
        </section>
    )
};
