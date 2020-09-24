import {Typography} from "@material-ui/core";
import SocialMediaLinks from "../../molecules/socialmedia-links";
import React from "react";
import {useStyles} from './index.styles';
import Grid from "@material-ui/core/Grid";

export const ContentTop = (props: any) => {
    const {body, header, subHeader} = props;
    const classes = useStyles();

    if (!props) {
        return <h1> Loading ... </h1>
    }

    return (
        <header className={classes.top}>
            <div className={classes.topCover}>
                <Typography variant="h1" component="h1" className={classes.header}>
                    {header}
                </Typography>
                <div className={classes.textCover}>
                    <Typography variant="h3" component="h3" className={classes.subHeader}>
                        {subHeader}
                    </Typography>
                    <div>
                        <Typography variant="body1" className={classes.body}>
                            {body}
                        </Typography>
                        <SocialMediaLinks styles={classes}/>
                    </div>
                </div>
            </div>
        </header>
    );
};
