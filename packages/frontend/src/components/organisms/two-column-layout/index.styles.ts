import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },

  leftColumn: {
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
