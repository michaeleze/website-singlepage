import {Helmet} from "react-helmet";
import App from "./App";
import React from "react";

const ReactApp = () => (
    <>
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="author" content="Michael Eze <https://linkedin.com/in/michaeleze>"/>
            <meta
                title="Michael Eze, Eze, Michael, Software engineer, frontend, portfolio, developer, typescript, React, node, full-stack, UI, UX"/>
            <meta name="description"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and full-stack React developer also skilled in UI designing based in Germany. Hobbies are programming, dancing, music, cooking and sports(basket ball and football)"/>
            <link rel="canonical" href="https://michaeleze.de"/>
            <link rel="publisher" href="https://linkedin.com/in/michaeleze"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and Full-Stack - React Node Engineer "/>
            <meta property="og:description"
                  content="Michael Eze is a passionate Software Engineer | FrontEnd and Full-Stack - React Node Engineer also skilled in UX designing based in Germany. Hobbies are programming, dancing, music, cooking and sports(basket ball and football)"/>
            <meta property="og:url" content="https://www.michaeleze.de"/>
            <meta property="og:site_name" content="Michael Eze"/>
            <meta property="og:image" content="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg"/>
            <meta name="linkedin:card" content="summary"/>
            <meta name="linkedin:site" content="https://linkedin.com/in/michaeleze"/>
            <meta name="linkedin:title" content="Michael Eze &mdash; Germany Based Full-Stack - Node React Engineer"/>
            <meta name="github:site" content="https://github.com/michaeleze"/>
            <meta name="github:title" content="Michael Eze &mdash; Germany Based Full-Stack - Node React Engineer"/>
            <meta name="medium:site" content="https://medium.com/@michael.eze"/>
            <meta name="medium:title" content="Michael Eze &mdash; Germany Based Full-Stack - Node React Engineer"/>
            <meta name="linkedin:description"
                  content="Michael Eze is a passionate Software Engineer <FrontEnd /> and Full-Stack - React Node Engineer also skilled in UX designing based in Germany. Hobbies are programming, dancing, music, cooking and sports(basket ball and football)"/>
            <meta name="linkedin:image" content="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg"/>
            <link rel="icon" href="https://github.com/michaeleze/portfolio/blob/master/public/me.jpg"/>
            <meta name="xing:site" content="https://www.xing.com/profile/michael_eze3"/>
            <meta name="xing:title" content="Michael Eze &mdash; Germany Based Full-Stack - Node React Engineer"/>
            <meta name="twitter:site" content="https://twitter.com/michaelcityboy"/>
            <meta name="twitter:title" content="Michael Eze &mdash; Germany Based Full-Stack - Node React Engineer"/>
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
