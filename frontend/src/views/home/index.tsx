import React, { Suspense, lazy } from 'react';
import Me from '../../assets/images/m8.jpg';

const HomeTemplate = lazy(() => import('../../components/templates/home'));

const props = {
  content: {
    leftColumn: <span> hello world</span>,
    rightColumn: <img srcSet={Me} style={{width: '100%', textAlign: "center"}} />
  },
};

const Home: React.FC = (): React.ReactElement => (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeTemplate {...props} />
    </Suspense>
  );

export default Home;
