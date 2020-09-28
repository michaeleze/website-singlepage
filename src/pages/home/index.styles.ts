import {makeStyles} from '@material-ui/core/styles';

//D90368
//FFDA2C
//541388

export const useStyles = makeStyles((theme) => ({
    loader: {
        color: "#fff",
        fontFamily: '"Montserrat", sans-serif',
        textAlign: 'center',
        margin:'auto',
        fontWeight: 800,
        textShadow: '1px 1px 15px rgb(0 0 0 / 18%)',
    },

    loaderContainer: {
        background: '#541388',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
}));
