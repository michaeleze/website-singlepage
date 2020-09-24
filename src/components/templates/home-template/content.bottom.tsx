import React from "react";
import Me from "../../../assets/images/me5.jpg";
import Me2 from "../../../assets/images/me.jpg";
import {useStyles} from "./index.styles";

export const ContentBottom: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.bottomCover}>
            <div className={classes.portfolio}>
              Hello World
            </div>
            <div className={classes.contact}>
                <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
        </div>
    )
};
