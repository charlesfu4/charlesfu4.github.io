import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#81c784',
    flex: '1 1 auto',
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
    fontSize: '0.1rem',
    '@media (min-width:384px)': {
      fontSize: '0.3rem',
    },
    '@media (min-width:576px)': {
      fontSize: '0.5rem',
    },
    '@media (min-width:768px)': {
      fontSize: '0.6rem',
    },
    '@media (min-width:960px)': {
      fontSize: '0.7rem',
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