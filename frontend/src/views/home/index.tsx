import React, {
    Suspense,
    lazy,
    useState,
    useEffect
} from 'react';
import Me from '../../assets/images/me5.jpg';
import SocialMediaLinks from '../../components/molecules/socialmedia-links'
import { homeService } from '../../services/home';

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const LeftContent = (props: any) => {
    const { content = [] } = props;

    return(
        <div style={{backgroundColor: '#fff', display: 'grid', gridTemplateColumns: 'repeat(9,1fr)', gridTemplateRows: 'repeat(9,1fr)', height: '100%'}}>
            <div style={{gridRow: '3/8', gridColumn: "2/3"}}>
                {
                    content.map((item: any) => <> {item.country} </>)
                }
            </div>
            <div style={{gridRow: '9', gridColumn: "10/1", background: '#ebebeb', padding: '10px 0', boxSizing: 'border-box', width: '100%'}}>
                <SocialMediaLinks />
            </div>
        </div>
    );
}

const RightContent: React.FC = () => <div style={{height: '100%', background:'#0d1b2a'}}>
                       <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    </div>;



const Home: React.FC = (): React.ReactElement => {
    const [state, setState] = useState<Array<string>>();
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
