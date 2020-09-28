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
        path: '#',
        name: 'Portfolio',
        Component: Contact,
    },
    {
        path: '#',
        name: 'Blog',
        Component: Contact,
    },
    {
        path: '#',
        name: 'Contact',
        Component: Contact,
    },
];
