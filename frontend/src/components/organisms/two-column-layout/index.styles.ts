import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },

  leftColumn: {
    padding: '15px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },

  rightColumn: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
}));
