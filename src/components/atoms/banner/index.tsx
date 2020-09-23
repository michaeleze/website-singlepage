import React from 'react';
import { useStyles } from './index.styles';

interface IBanner {
  src?: string;
}

const Banner: React.FC<IBanner> = ({ text= `MIC\nHAEL` }: any) => {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.text}>{text}</h1>
    </div>
  );
};

export default Banner;
