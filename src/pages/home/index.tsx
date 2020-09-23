import React, {
    Suspense,
    lazy,
    useState,
    useEffect
} from 'react';
import Me from '../../assets/images/me5.jpg';
import SocialMediaLinks from '../../components/molecules/socialmedia-links'
import Service from '../../service';
import {Typography} from "@material-ui/core";

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const LeftContent = (props: any) => {
    const { content } = props;

    return(
        <div style={{height: '100%', display: 'flex', justifyContent:'space-around', flexDirection: 'column', maxWidth: '90%', margin: 'auto', position: "relative"}}>
            <Typography variant="h2" component="h2">
                {content?.header}
            </Typography>
            <Typography variant="body1">
                {content?.subHeader}
                {content?.body}
            </Typography>
            <SocialMediaLinks />
        </div>
    );
};

const RightContent: React.FC = () => (
    <div style={{height: '100%', background:'#0d1b2a'}}>
        <div style={{borderRadius: "3rem", height: "60%"}}>
            <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
    </div>
);



const Home: React.FC = (): React.ReactElement => {
    const [state, setState] = useState({});
    const content = { leftContent: <LeftContent content={state} />, rightContent: <RightContent /> };

    useEffect(() => {
        (async () => {
            const endpoint = 'https://portfolio-graphql-server.herokuapp.com/';
            const query = '{homePage{ \n header \n subHeader \n body }}';
            const response = await Service.useFetch(endpoint, query);

            setState(response.data.homePage);
        })()
    },[]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeTemplate {...content} />
        </Suspense>
    )
};

export default Home;
