import React, {
    Suspense,
    lazy,
    useState,
    useEffect
} from 'react';
import Service from '../../service';
import { Typography } from "@material-ui/core";
import { useStyles } from "./index.styles";

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const Home: React.FC = (): React.ReactElement => {
    const [state, setState] = useState({});
    const classes = useStyles();

    useEffect(() => {
        (async () => {
            const query = '{homePage { \n header \n subHeader \n body \n links { \n blog \n portfolio \n contact } }}';
            const response = await Service.useFetch(query);

            setState(response.data.homePage);
        })()
    }, []);

    if (!state) {
        return (
            <div className={classes.loaderContainer}>
                <Typography component="h1" variant="h1" className={classes.loader}> Loading ... </Typography>
            </div>
        )
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeTemplate {...state} />
        </Suspense>
    )
};

export default Home;
