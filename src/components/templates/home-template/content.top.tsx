import {Typography} from "@material-ui/core";
import SocialMediaLinks from "../../molecules/socialmedia-links";
import React from "react";
import Me from "../../../assets/images/me.jpg";
import {useStyles} from './index.styles';

export const ContentTop: React.FC<any> = (props) => {
    const {body, header, subHeader} = props;
    const classes = useStyles();

    if (!props) {
        return <h1> Loading ... </h1>
    }

    return (
        <div className={classes.topContainer}>
            <div className={classes.headerContainer}>
                <div>
                    <Typography variant="h1" component="h1" className={classes.header}>
                        {header}
                    </Typography>
                    <SocialMediaLinks styles={classes}/>
                </div>
                <div className={classes.imgContainer}>
                    <img alt="michael eze" src={Me} className={classes.img}/>
                </div>
            </div>
            <div className={classes.textContainer}>
                <Typography variant="h3" component="h3" className={classes.subHeader}>
                    {subHeader}
                </Typography>
                <Typography variant="body1" className={classes.body}>
                    {body}
                </Typography>
            </div>
            <div className={classes.animatedLineContainer}>
                <hr className={classes.animatedLine}/>
            </div>
        </div>
    );
};
