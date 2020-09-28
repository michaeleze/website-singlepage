import {makeStyles} from '@material-ui/core/styles';

//D90368
//FFDA2C
//541388

export const useStyles = makeStyles((theme) => ({
    animatedLine: {
        animation: '$line cubic-bezier(.2,.4,.9,.56) 860ms infinite',
        alignSelf: 'flex-end',
        border: 'none',
        background: '#D90368',
        borderRadius: '1rem',
        boxSizing: 'border-box',
        height: '8vh',
        width: '10px',
        marginTop: '2vh'
    },

    "@keyframes line": {
        "0%": {
            opacity: 0,
            height: 0,
        },
        "100%": {
            opacity: 1,
            height: '7vh',
        }
    },

    animatedLineContainer: {
        height: '9vh',
    },

    body: {
        color: 'rgba(255,255,255,0.81)',
        lineHeight: 2,
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '1.2rem',
        fontWeight: 400,
        padding: '0 3vw',
        boxSizing: 'border-box',

        [theme.breakpoints.down('sm')]: {
            padding: '20vw 0',
        },
    },

    bottomContainer: {
        height: '100%',
    },

    contactContainer: {
        background: '#541388',
        flexBasis: '25%',
    },

    container: {
        background: '#541388',
        display: 'flex',
        minHeight: '100vh',
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },

    contentTopContainer: {
        background: '#541388',
        flexGrow: 1
    },

    contentBottomContainer: {
        height: '20%'
    },

    header: {
        boxSizing: 'border-box',
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 800,
        whiteSpace: 'pre-line',

        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },
    },

    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10vh 0',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },

    icon: {
        boxSizing: 'border-box',
        color: '#fff',
        fontSize: '2.5rem',

        '&:hover': {
            color: '#D90368',
        },
    },

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'relative',
        right: '3vw',
        top: '3vw',
        transition: 'all cubic-bezier(.4,-.4,.9,.56) .4s',

        '&:hover': {
            right: 0,
            top: 0,
        },

    },

    imgContainer: {
        alignSelf: '',
        border: '3px solid #D90368',
        position: 'relative',
        width: '15rem',
        height: '14rem',
        boxSizing: 'border-box',
    },

    loading: {
        color: "#fff",
        fontFamily: '"Montserrat", sans-serif',
        textAlign: 'center',
        margin:'auto',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifySelf: 'center',
        fontWeight: 800,
        textShadow: '1px 1px 15px rgb(0 0 0 / 18%)',
    },

    portfolio: {
        background: '#D90368',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'capitalize',
        textDecoration: 'none',
        transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
        padding: '2vh 0',

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },

        '&:hover': {
            background: '#fff',
            color: '#D90368',
            cursor: 'pointer'
        },
    },

    portfolioMenu: {
        background: '#fff',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#000',
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'capitalize',
        textDecoration: 'none',
        transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
        padding: '2vh 0',

        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },

        '&:hover': {
            background: '#fff',
            color: '#D90368',
            cursor: 'pointer'
        },
    },

    socialMedia: {
        margin: '4rem 0 4rem 0',
        padding: 0,
    },

    socialMediaIcon: {
        display: 'inline-flex',
        padding: '0 2vw 0 0',
    },

    subHeader: {
        color: '#fff',
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 500,
        textAlign: 'right',

        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },
    },

    textContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },

    topContainer: {
        background: '#541388',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10vh',
        width: '80%',
        margin: 'auto'
    },
}));
