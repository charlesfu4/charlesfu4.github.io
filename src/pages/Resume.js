import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'

const ColorButton = withStyles(() => ({
  root: {
    backgroundColor: '#000000',
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
}))(Button)


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
    minHeight: '20vh',
  },
  clickableIcon: {
    '&:hover': {
      color: '#B9E97C',
      cursor: 'pointer'
    },
  },
  margin: {
    margin: theme.spacing(1),
    fontSize: '0.3rem',
    '@media (min-width:333px)': {
      fontSize: '0.5rem',
    },
    '@media (min-width:384px)': {
      fontSize: '1.0rem',
    },
    '@media (min-width:576px)': {
      fontSize: '1.4rem',
    },
    '@media (min-width:768px)': {
      fontSize: '1.6rem',
    },
    '@media (min-width:960px)': {
      fontSize: '1.8rem',
    },
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    color: '#81c784',
    '&:hover':{
      color:'#B9E97C',
    }
  },
  hoverbox:{
    '&:hover':{
      backgroundColor: '#B9E97C',
      cursor: 'pointer',
    }
  },
}))
const theme = createMuiTheme()
theme.typography= {
  h4: {
    fontFamily: 'Courier New',
    fontSize: '6px',
    '@media (min-width:333px)': {
      fontSize: '0.2rem',
    },
    '@media (min-width:384px)': {
      fontSize: '0.8rem',
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
    fontFamily: 'Helvetica',
    fontSize: '1.0rem',
    '@media (min-width:300px)': {
      fontSize: '1.6rem',
    },
    '@media (min-width:384px)': {
      fontSize: '1.7rem',
    },
    '@media (min-width:576px)': {
      fontSize: '2.2rem',
    },
    '@media (min-width:768px)': {
      fontSize: '2.6rem',
    },
    '@media (min-width:960px)': {
      fontSize: '3.0rem',
    },
  },
}


const Resume = ({ checked }) => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Fade in={checked} style={{ transitionDelay: '300ms' }} timeout={300}>
        <Box p={4} m={0}>
          <Grid
            container
            spacing={2}
            direction='column'
            alignItems='center'
            justify='center'
            className={classes.container}
          >
            <ColorButton
              variant='contained'
              color='primary'
              href='https://github.com/charlesfu4/charlesfu4.github.io/raw/main/cv/Chu_Cheng_CV.pdf'
              className={classes.margin}
            >
              Download pdf file
            </ColorButton>
          </Grid>
          <Box p={1}>
            <Grid
              container
              direction="row"
              align="center"
              wrap="wrap"
              className={classes.container}
              spacing={2}
            >
              <Grid item xs={4} align="center">
                <Box
                  p={1}
                  width='80%'
                  border={3}
                  borderColor="text.primary"
                  borderRadius={16}
                  className={classes.hoverbox}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h4">Education</Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
              <Grid item xs={4} align="center">
                <Box
                  p={1}
                  width='80%'
                  align="center"
                  border={3}
                  borderColor="text.primary"
                  borderRadius={16}
                  className={classes.hoverbox}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h4">Experience</Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
              <Grid item xs={4} align="center">
                <Box
                  p={1}
                  width='80%'
                  align="center"
                  border={3}
                  borderColor="text.primary"
                  borderRadius={16}
                  className={classes.hoverbox}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h4">Skills</Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </div>
  )
}

export default Resume