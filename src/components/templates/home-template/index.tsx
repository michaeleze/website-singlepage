import React from 'react';
import {ContentTop} from './content.top';
import {ContentBottom} from './content.bottom';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './index.styles';

const HomeTemplate: React.FC = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item sm={12} className={classes.contentTopContainer}>
                <ContentTop {...props} />
            </Grid>
            <Grid item sm={12}>
                <ContentBottom {...props}/>
            </Grid>
        </Grid>
    );
};

export default HomeTemplate;
