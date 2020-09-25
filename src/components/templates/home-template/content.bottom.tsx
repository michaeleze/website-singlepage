import React from "react";
import Grid from '@material-ui/core/Grid';
//import Me from "../../../assets/images/me5.jpg";
import { useStyles } from "./index.styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const ContentBottom: React.FC<any> = (props) => {
    const { links } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.bottomContainer}>
            <Grid item md={4} sm={12} xs={12}>
                    <Link className={classes.portfolio} to='/portfolio'>{links?.portfolio}</Link>
            </Grid>
            <Grid md={4} sm={12} xs={12}>
                    <Link className={classes.portfolioMenu} to='blog'>{links?.blog}</Link>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                    <Link className={classes.portfolioMenu} to='contact'>{links?.contact}</Link>
            </Grid>
        </Grid>
    );
};
