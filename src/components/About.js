import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
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
    minHeight: '65vh',
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
    fontFamily: 'Courier New',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.8rem',
    },
  },
  h3: {
    fontFamily: 'Courier New',
    fontSize: '1.4rem',
    '@media (min-width:600px)': {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  },
  h2: {
    fontFamily: 'Courier New',
    fontSize: '1.6rem',
    '@media (min-width:600px)': {
      fontSize: '2.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.0rem',
    },
  },
}

const About = ({ checked }) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="flex-start"
        justify="center"
        className={classes.container}
      >
        <Fade in={!checked} style={{ transitionDelay: '600ms' }}>
          <Grid item className={null}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">Hi,</Typography>
            </ThemeProvider>
          </Grid>
        </Fade>
        <Fade in={!checked} style={{ transitionDelay: '1600ms' }}>
          <Grid item xs={8} className={null}  style={{ textAlign: 'left' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h2">This is Charles Fu.</Typography>
            </ThemeProvider>
          </Grid>
        </Fade>
        <Fade in={!checked} style={{ transitionDelay: '2500ms' }}>
          <Grid item xs={8} className={null}  style={{ textAlign: 'left' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">I am an enthusiast in Data Science and Software Development.</Typography>
            </ThemeProvider>
          </Grid>
        </Fade>
        <Fade in={!checked} style={{ transitionDelay: '2500ms' }}>
          <Grid item xs={8} className={null}  style={{ textAlign: 'left' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4">My experience covers Machine Learning, Big Data Engineering, and Web Development.</Typography>
            </ThemeProvider>
          </Grid>
        </Fade>
      </Grid>

    </div>
  )
}

export default About