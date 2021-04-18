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
    minHeight: '100vh',
  },
  clickableIcon: {
    '&:hover': {
      color: '#B9E97C',
      cursor: 'pointer'
    },
    fontSize: '0.8rem',
    '@media (min-width:192px)': {
      fontSize: '0.7rem',
    },
    '@media (min-width:288px)': {
      fontSize: '1rem',
    },
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
      fontSize: '3.0rem',
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
}

const Contact = ({ checked }) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Fade in={checked} style={{ transitionDelay: '500ms' }} timeout={800}>
          <Grid item className={null}>
            <ThemeProvider theme={theme}>
              <Typography variant="h2">Get in touch with me</Typography>
            </ThemeProvider>
          </Grid>
        </Fade>
        <Fade in={checked} style={{ transitionDelay: '1500ms' }} timeout={2000}>
          <Grid item xs={8} className={null}  style={{ textAlign: 'left' }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4">I am currently based in Stockholm and work as a full-stack web developer in a start-up for Digital Footprints Decentralization. If you are also an enthusiast in Data Science or Software Engineering, please connect with me!</Typography>
            </ThemeProvider>
          </Grid>
        </Fade>
        <Box p={10}>
          <Fade in={checked} style={{ transitionDelay: '1000ms' }} timeout={1500}>
            <Grid
              container
              spacing={3}
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item >
                <GitHubIcon
                  className={classes.clickableIcon}
                  onClick={() =>  window.location.href='https://github.com/charlesfu4'}
                ></GitHubIcon>
              </Grid>
              <Grid item >
                <LinkedInIcon
                  className={classes.clickableIcon}
                  onClick={() =>  window.location.href='https://www.linkedin.com/in/chu-cheng-fu-053631148/'}
                ></LinkedInIcon>
              </Grid>
              <Grid item >
                <MailOutlineIcon
                  className={classes.clickableIcon}
                  onClick={() =>  window.location.href='mailto:charles@pluss.app'}
                >
                </MailOutlineIcon>
              </Grid>
            </Grid>
          </Fade>
        </Box>
      </Grid>

    </div>
  )
}

export default Contact