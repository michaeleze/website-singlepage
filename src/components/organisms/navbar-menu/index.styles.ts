import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  active: {
    color: '#FC173E !important',
    borderBottom: '2px solid #FC173E',
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
    padding: '0 1em',

    '@media (max-width: 978px)': {
      padding: '.5em',
    },
  },

  navLink: {
    textDecoration: 'none',
    transition: 'all 1s ease',
    color: '#020628',

    '&:hover': {
      color: '#FC173E',
    },
  },

  navMenu: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '4.1rem',
    textTransform: 'capitalize',
    flexGrow: 1,
    padding: '2em 0 0 0',
    whiteSpace: 'nowrap',
    overflow: 'auto',

    '@media (max-width: 678px)': {
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '3rem',
      justifyContent: 'flex-start',
    },

    '@media (max-width: 478px)': {
      fontSize: '2.5rem',
    },
  },
}));
