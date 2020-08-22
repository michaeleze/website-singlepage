import React from 'react';
import TwoColumnLayout from '../../organisms/two-column-layout';
import { useStyles } from './index.styles';
import { IContent } from '../../organisms/two-column-layout'

interface IHomeTemplate {
  content?: IContent
}

const HomeTemplate: React.FC<IHomeTemplate> = (props) => {
  const { content } = props;

  const classes = useStyles();

  const styles = {
    leftColumn: classes.leftColumn,
    rightColumn: classes.rightColumn,
  };

  return (<TwoColumnLayout content={content} styles={styles} />);
};

export default HomeTemplate;
