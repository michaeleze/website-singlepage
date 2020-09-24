import React from 'react';
import { ContentTop } from './content.top';
import { ContentBottom } from './content.bottom';
import { useStyles } from './index.styles';

const HomeTemplate: React.FC = (props) => {
    const classes = useStyles();

    return (
          <div className={classes.container}>
              <div className={classes.top}>
                  <ContentTop {...props} />
              </div>
              <div className={classes.bottom}>
                  <ContentBottom />
              </div>
          </div>
    );
}

export default HomeTemplate;
