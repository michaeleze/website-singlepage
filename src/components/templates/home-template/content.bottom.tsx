import React from "react";
import Me from "../../../assets/images/me5.jpg";
import {useStyles} from "./index.styles";
import {Typography} from "@material-ui/core";

export const ContentBottom: React.FC<any> = (props) => {
    const { links } = props;
    const classes = useStyles();

    return (
        <section className={classes.bottomContainer}>
            <div className={classes.portfolioContainer}>
                <div className={classes.portfolio}>
                    <Typography component='p' variant='body1'>{links?.portfolio}</Typography>
                    <Typography component='p' variant='body1'>{links?.blog}</Typography>
                    <Typography component='p' variant='body1'>{links?.contact}</Typography>
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
