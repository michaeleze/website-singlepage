import React, {
    Suspense,
    lazy,
    useState,
    useEffect
} from 'react';
import Service from '../../service';

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const Home: React.FC = (): React.ReactElement => {
    const [state, setState] = useState({});

    useEffect(() => {
        (async () => {
            const query = '{homePage{ \n header \n subHeader \n body }}';
            const response = await Service.useFetch(query);

            setState(response.data.homePage);
        })()
    },[]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeTemplate {...state} />
        </Suspense>
    )
};

export default Home;
