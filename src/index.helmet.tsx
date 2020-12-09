import {Helmet} from "react-helmet";
import App from "./App";
import React from "react";

const ReactApp = () => (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="image" content="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg" />
            <meta name="author" content="Michael Eze <https://linkedin.com/in/michaeleze>"/>
            <meta
                title="Michael Eze, Eze, Michael, Software engineer, frontend, portfolio, frontend engineer, React developer, node developer, full-stack engineer"/>
            <meta name="description"
                  content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX designing based in Germany."/>
            <link rel="canonical" href="https://michaeleze.de"/>
            <link rel="publisher" href="https://linkedin.com/in/michaeleze"/>
            {/* OpenGraph tags */}
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX based in Germany."/>
            <meta property="og:description"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and Full-Stack - React Node Engineer also skilled in UX based in Germany. "/>
            <meta property="og:url" content="https://www.michaeleze.de"/>
            <meta property="og:site_name" content="Michael Eze"/>
            <meta name="og:image" content="https://media-exp1.licdn.com/dms/image/C5603AQFlrTfCPAFPqw/profile-displayphoto-shrink_400_400/0/1571994913221?e=1613001600&v=beta&t=gNWvl1k5nTFbQEtHgGCiCtLGXXAyaKw1lT29jBDJtdw"/>
            <meta property="fb:app_id" content="emeze" />
            {/* Linkedin Card tags */}
            <meta name="linkedin:card" content="summary_large_image" />
            <meta name="linkedin:site" content="https://linkedin.com/in/michaeleze"/>
            <meta name="linkedin:title" content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX based in Germany."/>
            <meta name="linkedin:description"
                  content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX designing based in Germany. "/>
            <meta name="linkedin:image" content="https://media-exp1.licdn.com/dms/image/C5603AQFlrTfCPAFPqw/profile-displayphoto-shrink_400_400/0/1571994913221?e=1613001600&v=beta&t=gNWvl1k5nTFbQEtHgGCiCtLGXXAyaKw1lT29jBDJtdw"/>
            {/* Github Card tags */}
            <meta name="github:card" content="summary_large_image" />
            <meta name="github:site" content="https://github.com/michaeleze"/>
            <meta name="github:title" content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX based in Germany."/>
            <meta name="github:image" content="https://media-exp1.licdn.com/dms/image/C5603AQFlrTfCPAFPqw/profile-displayphoto-shrink_400_400/0/1571994913221?e=1613001600&v=beta&t=gNWvl1k5nTFbQEtHgGCiCtLGXXAyaKw1lT29jBDJtdw"/>
            {/* Medium Card tags */}
            <meta name="medium:card" content="summary_large_image" />
            <meta name="medium:site" content="https://medium.com/@michael.eze"/>
            <meta name="medium:title" content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX based in Germany."/>
            <meta name="medium:image" content="https://media-exp1.licdn.com/dms/image/C5603AQFlrTfCPAFPqw/profile-displayphoto-shrink_400_400/0/1571994913221?e=1613001600&v=beta&t=gNWvl1k5nTFbQEtHgGCiCtLGXXAyaKw1lT29jBDJtdw"/>
            <link rel="icon" href="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg"/>
            {/* Xing Card tags */}
            <meta name="xing:card" content="summary_large_image" />
            <meta name="xing:site" content="https://www.xing.com/profile/michael_eze3"/>
            <meta name="xing:title" content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX based in Germany."/>
            <meta name="xing:image" content="https://profile-images.xing.com/images/86fc6f0795b7edc5e298bffc6516885d-1/michael-eze.256x256.jpg"/>
            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://twitter.com/michaelcityboy"/>
            <meta name="twitter:title" content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX based in Germany."/>
            <meta name="twitter:image" content="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg" />
            <meta name="viewport"
                  content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes"/>
            <meta name="theme-color" content="#000000"/>
            <title ng-bind="_title">Michael Eze &mdash; Germany Based Full-Stack Software Engineer</title>
            <link rel="apple-touch-icon" href="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg"/>
            <title> Michael Eze </title>
        </Helmet>
        <App/>
    </>
);

export default ReactApp
