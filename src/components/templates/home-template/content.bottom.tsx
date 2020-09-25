import React from "react";
import Grid from '@material-ui/core/Grid';
//import Me from "../../../assets/images/me5.jpg";
import {useStyles} from "./index.styles";
import {Typography} from "@material-ui/core";

export const ContentBottom: React.FC<any> = (props) => {
    const { links } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.bottomContainer}>
            <Grid item md={4} sm={12} xs={12}>
                    <Typography className={classes.portfolio} component='p' variant='body1'>{links?.portfolio}</Typography>
            </Grid>
            <Grid md={4} sm={12} xs={12}>
                    <Typography className={classes.portfolioMenu} component='p' variant='body1'>{links?.blog}</Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                    <Typography className={classes.portfolioMenu} component='p' variant='body1'>{links?.contact}</Typography>
            </Grid>
        </Grid>
    );
};
