import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  bottom: {
    height: '30%'
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
   width: '35%'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },

  header: {
    boxSizing: 'border-box',
    margin: '1em 0',
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
    flexGrow: 1,

    [theme.breakpoints.down('sm')]: {
      flexGrow: 0,
    },
  },

  top: {
    background: 'blue',
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
  }
}));
