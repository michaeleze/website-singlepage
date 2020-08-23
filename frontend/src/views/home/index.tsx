import React, { Suspense, lazy } from 'react';
import Me from '../../assets/images/me2.png';

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const content = {
      leftContent: <div style={{backgroundColor: '#fff'}}> <span> hello world</span></div>,
      rightContent: <div style={{height: '100%', background:'#0d1b2a'}}>
                       <img alt='michael-eze' srcSet={Me} style={{width: '100%', boxSizing: 'content-box'}} />
                    </div>
};

const Home: React.FC = (): React.ReactElement => (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeTemplate {...content} />
    </Suspense>
  );

export default Home;
