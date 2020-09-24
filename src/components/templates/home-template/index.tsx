import React from 'react';
import { ContentTop } from './content.top';
import { ContentBottom } from './content.bottom';
import { useStyles } from './index.styles';

const HomeTemplate: React.FC = (props) => {
    const classes = useStyles();

    return (
          <div className={classes.container}>
              <header className={classes.top}>
                  <ContentTop {...props} />
              </header>
              <section className={classes.bottom}>
                  <ContentBottom />
              </section>
          </div>
    );
};

export default HomeTemplate;
