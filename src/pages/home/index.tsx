import React, {
  Suspense,
  lazy,
  useState,
  useEffect
} from 'react';
import Service from '../../service';
import {useStyles} from "./index.styles";
import Loader from 'react-loader-spinner'

const HomeTemplate = lazy(() => import('../../components/templates/home-template'));

const Home: React.FC = (): React.ReactElement => {
  const [state, setState] = useState(null as any);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const query = '{homePage { \n header \n subHeader \n body \n links { \n blog \n portfolio \n contact } }}';
        const response = await Service.useFetch(query);

        setState(response.data.homePage);
      } catch (error) {
        throw new Error(error)
      }
    })()
  }, []);

  if (!state) {
    return (
      <div className={classes.loaderContainer}>
        <Loader
          type="Puff"
          color="#fff"
          height={100}
          width={100}
        />
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
