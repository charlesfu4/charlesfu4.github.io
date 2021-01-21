import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
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

const About = ({ checked }) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Fade in={!checked} style={{ transitionDelay: '200ms' }}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
          className={classes.container}
        >
          <Grid item className={null}>
            <ThemeProvider theme={theme}>
              <Typography variant="h2">Get in touch with me</Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={8} className={null}  style={{ textAlign: 'justify' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4">I am currently based in Stockholm and work as a full-stack web developer in a start-up for Digital Footprints Decentralization. If you are also an enthusiast in Data Science or Software Engineering, please connect with me!</Typography>
            </ThemeProvider>
          </Grid>
          <Box p={10}>
            <Grid
              container
              spacing={5}
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item >
                <GitHubIcon
                  style={{ fontSize: 55 }}
                  className={classes.clickableIcon}
                  onClick={() =>  window.location.href='https://github.com/charlesfu4'}
                ></GitHubIcon>
              </Grid>
              <Grid item >
                <LinkedInIcon
                  style={{ fontSize: 60 }}
                  className={classes.clickableIcon}
                  onClick={() =>  window.location.href='https://www.linkedin.com/in/chu-cheng-fu-053631148/'}
                ></LinkedInIcon>
              </Grid>
              <Grid item >
                <MailOutlineIcon
                  style={{ fontSize: 60 }}
                  className={classes.clickableIcon}
                  onClick={() =>  window.location.href='mailto:fuchucheng@gmail.com'}
                >
                </MailOutlineIcon>
              </Grid>
            </Grid>
          </Box>
        </Grid>

      </Fade>
    </div>
  )
}

export default About