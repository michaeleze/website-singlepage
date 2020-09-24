import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    body: {
        color: 'rgba(255,255,255,0.79)',
        lineHeight: 1.5,
        fontWeight: 100,
        padding: '1vw 3vw',
        boxSizing: 'border-box',

        [theme.breakpoints.down('sm')]: {
            padding: '20vw 0',
        },
    },

    bottomContainer: {
        display: 'flex',
        height: '100%',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            transition: 'all ease-in .6s'
        },
    },

    bottomCover: {
        display: 'flex',
        height: '100%',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            transition: 'all ease-in .6s'
        },
    },

    contactContainer: {
        background: '#FC173E',
    },

    container: {
        background: '#03004d',
        height: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },

    contact: {
        width: '40%',
    },

    contentTopContainer: {
        background: '#03004d',
    },

    header: {
        boxSizing: 'border-box',
        margin: '10vh 0',
        fontWeight: 800,

        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },

    },

    icon: {
        boxSizing: 'border-box',
        color: 'rgba(255,255,255,0.71)',
        fontSize: '1.7rem',

        '&:hover': {
            color: '#FC173E',
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },

    portfolioContainer: {
        background: '#ffdd00',
        width: '100%',

        [theme.breakpoints.down('sm')]: {
            flexGrow: 0,
        },
    },

    portfolio: {
        width: '80%',
        height: '80%',
        margin: 'auto'
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
        color: '#fff',
        fontWeight: 400,
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
        background: '#03004d',
        color: '#fff',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        marginBottom: '10vh',
        width: '80%',
        margin: 'auto'
    },
}));
