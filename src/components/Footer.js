import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#81c784',
    flex: '1 1 auto',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#50C878',
  },
  label: {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
      fontSize: '0.9rem',
    },
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  container:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '2.5rem',
  }
}))
const theme = createMuiTheme()
theme.typography= {
  h6: {
    fontFamily: 'Courier New',
    fontSize: '0.6rem',
    '@media (min-width:600px)': {
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.8rem',
    },
  },
  h2: {
    fontFamily: 'Helvetica',
    fontSize: '1.6rem',
    '@media (min-width:600px)': {
      fontSize: '2.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.0rem',
    },
  },
}


const Footer = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid container
          alignItems="center"
          justify="center"
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h6"> © Charles Fu 2021</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>

  )
}

export default Footer