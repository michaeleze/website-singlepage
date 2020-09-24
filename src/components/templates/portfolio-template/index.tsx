import React from 'react';
import TwoColumnLayout from '../../organisms/two-column-grid';
import { IContent } from '../../organisms/two-column-grid'

const AboutMe: React.FC<IContent> = (props) => <TwoColumnLayout {...props} />;

export default AboutMe;
