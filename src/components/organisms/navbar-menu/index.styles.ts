import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  active: {
    color: '#541388 !important',
  },

  container: {
    background: 'white',
    display: 'flex',
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 2,
  },

  linkContainer: {
    boxSizing: 'border-box',
    padding: '2vh 0',
    fontSize: '5rem',

    '@media (max-width: 978px)': {
      padding: '.5em',
      fontSize: '4rem',
    },
  },

  navLink: {
    textDecoration: 'none',
    transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
    color: 'rgba(0,0,0,0.77)',

    '&:hover': {
      color: '#D90368',
    },
  },

  navMenu: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 800,
    textTransform: 'capitalize',
    flexGrow: 1,
    whiteSpace: 'nowrap',
    overflow: 'auto',

    '@media (max-width: 478px)': {
      fontSize: '2.5rem',
    },
  },
}));
