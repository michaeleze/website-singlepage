import { Contact, Home } from '../pages';

export interface IRoutes {
    path: string;
    name: string;
    Component: React.FunctionComponent;
}

export const routes: Array<IRoutes> = [
    {
        path: '/',
        name: 'Home',
        Component: Home,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        Component: Contact,
    },
    {
        path: '/blog',
        name: 'Blog',
        Component: Contact,
    },
    {
        path: '/contact',
        name: 'Contact',
        Component: Contact,
    },
];
