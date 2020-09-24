import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './index.styles';

export interface IContent {
    leftContent?: ReactElement | undefined;
    rightContent?: ReactElement | undefined;
}

const TwoColumnGrid: React.FC<IContent> = (props) => {
  const classes = useStyles();

  const { leftContent, rightContent } = props;

  return (
    <Grid container className={classes?.container}>
      <Grid
        item
        lg={4}
        md={5}
        sm={6}
        xs={12}
      >
          {leftContent}
      </Grid>
      <Grid
        item
        lg={8}
        md={7}
        sm={6}
        xs={12}
      >
          {rightContent}
      </Grid>
    </Grid>
  );
};

export default TwoColumnGrid;
