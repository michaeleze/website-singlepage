import React, {
    Suspense,
    lazy,
    useState,
    useEffect
} from 'react';
import Me from '../../assets/images/me5.jpg';
import SocialMediaLinks from '../../components/molecules/socialmedia-links'
import { homeService } from '../../services/home';
import {Typography} from "@material-ui/core";

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const LeftContent = (props: any) => {
    const { content } = props;

    return(
        <div style={{backgroundColor: '#ee2330', color: 'white', height: '100%', display: 'flex', justifyContent:'space-around', flexDirection: 'column', maxWidth: '90%', margin: 'auto', position: "relative"}}>
            <Typography variant="h2" component="h2">
                {content?.title}
            </Typography>
            <Typography variant="body1">
                {content?.body}
                {content?.body2}
            </Typography>
            <SocialMediaLinks />
        </div>
    );
};

const RightContent: React.FC = () => <div style={{height: '100%', background:'#0d1b2a'}}>
                       <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    </div>;



const Home: React.FC = (): React.ReactElement => {
    const [state, setState] = useState();
    const content = { leftContent: <LeftContent content={state} />, rightContent: <RightContent /> };

    useEffect(() => {
        (async () => {
            const response = await homeService.fetchData();
            setState(response);
        })()
    },[homeService.fetchData])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeTemplate {...content} />
        </Suspense>
    )
};

export default Home;
