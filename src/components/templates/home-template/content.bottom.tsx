import React from "react";
import Grid from '@material-ui/core/Grid';
import { useStyles } from "./index.styles";
import { Link } from "react-router-dom";

export const ContentBottom: React.FC<any> = (props) => {
    const { links } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.bottomContainer}>
            <Grid item md={4} sm={12} xs={12}>
                    <Link className={classes.portfolio} to='#'>{links?.portfolio}</Link>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                    <Link className={classes.portfolioMenu} to='#'>{links?.blog}</Link>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                    <Link className={classes.portfolioMenu} to='#'>{links?.contact}</Link>
            </Grid>
        </Grid>
    );
};
