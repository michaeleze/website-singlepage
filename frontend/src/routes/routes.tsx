import { AboutMe, Home } from '.././pages';

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
        path: '/:id',
        name: 'About',
        Component: AboutMe,
    },
];
