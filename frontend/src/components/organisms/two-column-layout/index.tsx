import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './index.styles';

export interface IContent {
    leftContent?: ReactElement | undefined;
    rightContent?: ReactElement | undefined;
}

const TwoColumnLayout: React.FC<IContent> = (props) => {
  const classes = useStyles();

  const { leftContent, rightContent } = props;

  return (
    <Grid container className={classes?.container}>
      <Grid
        item
        className={classes?.leftColumn}
        sm={8}
        xs={12}
      >
          {leftContent}
      </Grid>
      <Grid
        item
        className={classes.rightColumn}
        sm={4}
        xs={12}
      >
          {rightContent}
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
