import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: '50vh',
  },
  label: {
    fontSize: '22px',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  container: {
    minHeight: '20vh',
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
    fontSize: '0.85rem',
    '@media (min-width:600px)': {
      fontSize: '0.85rem',
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

const Projects = ({ checked }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fade in={checked===1} style={{ transitionDelay: '300ms' }} timeout={300}>
        <Box p={4} m={0}>
          <Grid
            container
            direction="row"
            alignContent="center"
            alignItems="center"
            wrap="wrap"
            className={classes.container}
            spacing={6}
          >
            <Grid item xs={6} className={classes.items} style={{ textAlign: 'center' }} >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Academic</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item xs={5} className={classes.items} style={{ textAlign: 'center' }} >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Self-study</Typography>
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignContent="center"
            alignItems="center"
            wrap="wrap"
            className={classes.container}
            spacing={0}
          >
            <Grid
              xs={6}
              item
              className={classes.container}
            >
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid item className={classes.items} style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Master Thesis: Automated Machine Learning for Energy Forecasting</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid container alignContent='center' style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Big data analytics programming</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid item className={classes.items} style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Super convergence in Convolutional Neural Network</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid item className={classes.items} style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Anaylsis of Danish traffic network</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>

            </Grid>

            <Grid
              xs={6}
              item
              className={classes.container}
            >
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid item className={classes.items} style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Full-stack open</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid container alignContent='center' style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Algorithm, Priceton</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>
              <Box
                m={1}
                width='80%'
                border={3}
                borderColor="text.primary"
                borderRadius={16}
                className={classes.hoverbox}
              >
                <Grid item className={classes.items} style={{ textAlign: 'left' }} >
                  <Box p={1}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="h4">Managing Big Data with MySQL</Typography>
                    </ThemeProvider>
                  </Box>
                </Grid>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Fade>
    </div>
  )
}


export default Projects