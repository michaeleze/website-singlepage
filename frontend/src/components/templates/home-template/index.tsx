import React from 'react';
import TwoColumnLayout from '../../organisms/two-column-layout';
import { IContent } from '../../organisms/two-column-layout'

const HomeTemplate: React.FC<IContent> = (props) => <TwoColumnLayout {...props} />;

export default HomeTemplate;
