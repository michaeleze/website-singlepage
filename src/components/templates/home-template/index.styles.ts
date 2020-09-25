import {makeStyles} from '@material-ui/core/styles';

//D90368
//FFDA2C
//541388

export const useStyles = makeStyles((theme) => ({
    body: {
        color: 'rgba(0,0,0,0.77)',
        lineHeight: 2,
        fontFamily: '"Montserrat Alternates", sans-serif',
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
        display: 'flex',
        height: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },

    contentTopContainer: {
        background: '#fff',
        flexGrow: 1
    },

    contentBottomContainer: {
        height: '20%'
    },

    header: {
        boxSizing: 'border-box',
        color: '#000',
        margin: '10vh 0',
        fontFamily: '"Montserrat Alternates", sans-serif',
        fontWeight: 900,
        whiteSpace: 'pre-line',

        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },

    },

    icon: {
        boxSizing: 'border-box',
        color: 'rgba(0,0,0,0.77)',
        fontSize: '2rem',

        '&:hover': {
            color: '#fff',
        },
    },

    portfolio: {
        background: '#D90368',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#fff',
        fontFamily: '"Montserrat Alternates", sans-serif',
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'capitalize',
        transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
        padding: '2vh 0',

        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },

        '&:hover': {
            background: '#fff',
            color: '#D90368',
            cursor: 'pointer'
        },
    },

    portfolioMenu: {
        background: '#ffdd00',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#fff',
        fontFamily: '"Montserrat Alternates", sans-serif',
        fontSize: '5rem',
        fontWeight: 900,
        textTransform: 'capitalize',
        transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
        padding: '2vh 0',

        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',
        },

        '&:hover': {
            background: '#fff',
            color: '#ffdd00',
            cursor: 'pointer'
        },
    },

    socialMedia: {
        margin: '1vw 2vw',
        padding: 0,
    },

    socialMediaIcon: {
        display: 'inline-flex',
        padding: '.5em 1em',
    },

    subHeader: {
        color: '#614E00',
        fontFamily: '"Montserrat Alternates", sans-serif',
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
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10vh',
        width: '80%',
        margin: 'auto'
    },
}));
