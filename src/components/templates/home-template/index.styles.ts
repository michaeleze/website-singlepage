import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  bottom: {
    height: '35%'
  },

  bottomCover: {
    display: 'flex',
    height: '100%',

    [theme.breakpoints.down('sm')]: {
     flexDirection: 'row',
      transition: 'all ease-in .6s'
    },
  },

  contact: {
   width: '45%'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },

  header: {
    boxSizing: 'border-box',
    margin: '2.2em 0 1em 0',
  },

  icons: {
    boxSizing: 'border-box',
    display: 'flex',
    height: '20%',
    justifyContent: 'center',
    padding: '1rem 0',
    width: '100%',
  },

  portfolio: {
    background: '#FC173E',
    flexGrow: 1,

    [theme.breakpoints.down('sm')]: {
      flexGrow: 0,
    },
  },

  top: {
    background: '#020628',
    color: 'white',
    flexGrow: 1,
  },

  topCover: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '80%',
    margin: 'auto'
  },

  text: {
    height: '60%',
    color: 'rgba(215,215,215,0.64)'
  }
}));
