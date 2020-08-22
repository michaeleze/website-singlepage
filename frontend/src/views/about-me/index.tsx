import React, { Suspense, lazy } from 'react';
import Me from '../../assets/images/m8.jpg';

const AboutMeTemplate = lazy(() => import('../../components/templates/home'));

const props = {
  content: {
    leftColumn: <span> hello world</span>,
    rightColumn: <img srcSet={Me} style={{width: '100%', textAlign: "center"}} />
  },
};

const AboutMe: React.FC = (): React.ReactElement => (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutMeTemplate {...props} />
    </Suspense>
);

export default AboutMe;
