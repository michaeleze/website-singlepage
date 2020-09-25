import React from 'react';
import {ContentTop} from './content.top';
import {ContentBottom} from './content.bottom';
import {useStyles} from './index.styles';

const HomeTemplate: React.FC = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <header className={classes.contentTopContainer}>
                <ContentTop {...props} />
            </header>
            <main className={classes.contentBottomContainer}>
                <ContentBottom {...props}/>
            </main>
        </div>
    );
};

export default HomeTemplate;
