import {Typography} from "@material-ui/core";
import SocialMediaLinks from "../../molecules/socialmedia-links";
import React from "react";
import { useStyles } from './index.styles';

export const ContentTop = (props: any) => {
    const { body, header, subHeader } = props;
    const classes = useStyles();

    if (!props) {
        return <h1> Loading ... </h1>
    }

    return(
        <div className={classes.topCover}>
            <Typography variant="h2" component="h2" className={classes.header}>
                {header}
            </Typography>
            <Typography variant="body1" className={classes.text}>
                {subHeader}
                {body}
            </Typography>
            <div className={classes.icons}>
             <SocialMediaLinks />
            </div>
        </div>
    );
};
