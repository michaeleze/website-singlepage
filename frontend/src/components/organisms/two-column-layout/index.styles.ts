import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
  },

  leftColumn: {
    borderTop: '4px solid #ffdd00',
    [theme.breakpoints.down('md')]: {
      order: 2,
    },
  },

  rightColumn: {
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
}));
