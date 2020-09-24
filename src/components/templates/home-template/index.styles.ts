import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    height: '100%',
  },
  top: {
    background: 'blue',
    gridColumn: '1 / last-line',
    gridRow: '1 / span 4',
  },
  bottom: {
    gridColumn: '1 /last-line',
    gridRow: '4  / span 6',
  },
  topCover: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
  },
  header: {
    boxSizing: 'border-box',
    gridColumn: '2 / span 7',
    gridRow: '2',
    margin: '1em 0',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gridColumn: '1 / last-line',
    gridRow: '9',
    width: '100%',
  },
  text: {
    gridColumn: '2 / span 7',
    gridRow: '4',
  }
}));
