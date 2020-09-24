import React from 'react';
import TwoColumnGrid, { IContent } from '../../organisms/two-column-grid';
import { ContentTop } from './content.top';
import { ContentRight } from './content.right';
import { useStyles } from './index.styles';

const HomeTemplate: React.FC<IContent> = (props) => {
    const classes = useStyles();
    const gridContent = { leftContent: <ContentTop {...props} />, rightContent: <ContentRight /> };

    return (
          <div className={classes.container}>
              <div className={classes.top}>
                  <ContentTop {...props} />
              </div>
              <div className={classes.bottom}>
              </div>
          </div>
    );
}

export default HomeTemplate;
