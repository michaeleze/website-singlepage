import React, { Suspense, lazy } from 'react';
import Me from '../../assets/images/me2.png';

const Contactemplate = lazy(() => import('../../components/templates/contact-template'));

const content = {
    leftContent: <div style={{backgroundColor: '#fff'}}> <span> hello world</span></div>,
    rightContent:  <div style={{height: '100%'}}>
        <img alt='michael-eze' srcSet={Me} style={{width: '100%', boxSizing: 'content-box'}} />
    </div>
};

const Contact: React.FC = (): React.ReactElement => (
    <Suspense fallback={<div>Loading...</div>}>
        <Contactemplate {...content} />
    </Suspense>
);

export default Contact;
