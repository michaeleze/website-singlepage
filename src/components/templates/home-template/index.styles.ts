import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    body: {
        color: 'rgba(255,255,255,0.79)',
        lineHeight: 1.5,
        fontWeight: 100,
        padding: '1vw 3vw',
        boxSizing: 'border-box',

        [theme.breakpoints.down('sm')]: {
            padding: '4vw 0',
        },
    },

    bottom: {
        width: '100%',
        display: 'flex',

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

    contact: {
        background: '#FC173E',
        flexBasis: '40%',
        width: '100%'
    },

    container: {
        background: '#03004d',
        flexDirection: 'column'
    },

    contactContainer: {
        background: 'red',
        width: '80%',
        height: '80%',
        margin: 'auto'
    },

    header: {
        boxSizing: 'border-box',
        margin: '10vh 0',
        fontWeight: 800,

        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },

        '&:after': {}
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

    portfolio: {
        background: '#ffdd00',
        flexGrow: 1,
        flexBasis: '60%',
        width: '100%',

        [theme.breakpoints.down('sm')]: {
            flexGrow: 0,
        },
    },

    portfolioContainer: {
        width: '80%',
        height: '80%',
        margin: 'auto'
    },

    socialMedia: {
        margin: '1.4em',
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

    textCover: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },

    top: {
        color: 'white',
        flexGrow: 1,
        marginBottom: '10vh'
    },

    topCover: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        width: '80%',
        margin: 'auto'
    },
}));
