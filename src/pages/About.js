import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: '70vh',
  },
  label: {
    fontSize: '22px',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  container: {
    minHeight: '70vh',
  },
  clickableIcon: {
    '&:hover': {
      color: 'grey',
      cursor: 'pointer'
    },
  },
}))
const theme = createMuiTheme()
theme.typography= {
  h4: {
    fontFamily: 'Courier Prime',
    fontSize: '0.8rem',
    '@media (min-width:384px)': {
      fontSize: '1.0rem',
    },
    '@media (min-width:576px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width:768px)': {
      fontSize: '1.4rem',
    },
    '@media (min-width:960px)': {
      fontSize: '1.6rem',
    },
  },
  h2: {
    fontFamily: 'Courier Prime',
    fontSize: '1.1rem',
    '@media (min-width:384px)': {
      fontSize: '1.6rem',
    },
    '@media (min-width:576px)': {
      fontSize: '2.0rem',
    },
    '@media (min-width:768px)': {
      fontSize: '2.4rem',
    },
    '@media (min-width:960px)': {
      fontSize: '2.8rem',
    },
  },
  h3: {
    fontFamily: 'Courier New',
    fontSize: '0.95rem',
    '@media (min-width:384px)': {
      fontSize: '1.3rem',
    },
    '@media (min-width:576px)': {
      fontSize: '1.7rem',
    },
    '@media (min-width:768px)': {
      fontSize: '2.0rem',
    },
    '@media (min-width:960px)': {
      fontSize: '2.2rem',
    },
  },
}

const About = ({ checked }) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Box p={5} m={-2}>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="flex-start"
          justify="center"
          className={classes.container}
        >
          <Fade in={checked} style={{ transitionDelay: '600ms' }} timeout={800}>
            <Grid item  className={null} style={{ textAlign: 'left' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h3">Hi!</Typography>
              </ThemeProvider>
            </Grid>
          </Fade>
          <Fade in={checked} style={{ transitionDelay: '1000ms' }} timeout={1400}>
            <Grid item className={null}  style={{ textAlign: 'left' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h2">My name is Charles Fu.</Typography>
              </ThemeProvider>
            </Grid>
          </Fade>
          <Fade in={checked} style={{ transitionDelay: '2000ms' }} timeout={2200}>
            <Grid item xs={12} className={null}  style={{ textAlign: 'left' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h4">I am an enthusiast in Data Science and Software Development.</Typography>
              </ThemeProvider>
            </Grid>
          </Fade>
          <Fade in={checked} style={{ transitionDelay: '3000ms' }} timeout={3100}>
            <Grid item xs={12} className={null}  style={{ textAlign: 'left' }}>
              <ThemeProvider theme={theme}>
                <Typography variant="h4">My experience covers Machine Learning, Big Data Engineering, and Web Development.</Typography>
              </ThemeProvider>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </div>
  )
}

export default About