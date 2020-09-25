import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    body: {
        color: '#353535',
        lineHeight: 1.7,
        fontSize: '1.3rem',
        fontWeight: 400,
        padding: '0 3vw',
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
        flexBasis: '25%',
    },

    container: {
        background: '#FFDA2C',
        height: '100%',
        flexWrap: 'nowrap',
        flexDirection: 'column'
    },

    contact: {
        height: '100%'
    },

    contentTopContainer: {
        background: '#FFDA2C',
    },

    header: {
        boxSizing: 'border-box',
        color: '#fff',
        margin: '10vh 0',
        fontWeight: 900,
        whiteSpace: 'pre-line',

        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },

    },

    icon: {
        boxSizing: 'border-box',
        color: '#000',
        fontSize: '2rem',

        '&:hover': {
            color: '#fff',
        },
    },

    portfolioContainer: {
        background: '#03004d',
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
        color: '#614E00',
        fontWeight: 600,
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
        background: '#ffda2c',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        marginBottom: '10vh',
        width: '80%',
        margin: 'auto'
    },
}));
