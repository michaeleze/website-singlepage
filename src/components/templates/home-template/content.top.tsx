import SocialMediaLinks from "../../molecules/socialmedia-links";
import React from "react";
import Me from "../../../assets/images/me.jpg";
import { useStyles } from './index.styles';

export const ContentTop: React.FC<any> = (props) => {
    const {body, header, subHeader} = props;
    const classes = useStyles();

    function createMarkup() { return {__html: body}; };

    return (
        <section className={classes.topContainer}>
            <div className={classes.headerContainer}>
                <div>
                    <h1 className={classes.header}>
                        {header}
                    </h1>
                    <SocialMediaLinks styles={classes}/>
                </div>
                <div className={classes.imgContainer}>
                    <img alt="michael eze" src={Me} className={classes.img}/>
                </div>
            </div>
            <div className={classes.textContainer}>
                <h3 className={classes.subHeader}>
                    {subHeader}
                </h3>
                <p className={classes.body} dangerouslySetInnerHTML={body && createMarkup()} />
            </div>
            <div className={classes.animatedLineContainer}>
                <hr className={classes.animatedLine}/>
            </div>
        </section>
    );
};
