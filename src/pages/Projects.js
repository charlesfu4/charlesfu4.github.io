import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
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
      backgroundColor: 'grey',
      cursor: 'pointer',
    }
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

const Projects = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
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
          <Grid item xs={6} className={classes.items} style={{ textAlign: 'center' }} >
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
            container
            direction="column"
            alignContent="center"
            alignItems="center"
            wrap="wrap"
            className={classes.container}
            spacing={0}
          >
            <Box
              m={1}
              width='80%'
              border={3}
              borderColor="text.primary"
              borderRadius={16}
              className={classes.hoverbox}
            >
              <Grid item xs={0} className={classes.items} style={{ textAlign: 'left' }} >
                <Box p={2}>
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
              <Grid container alignContent='center' xs={0}  style={{ textAlign: 'left' }} >
                <Box p={2}>
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
              <Grid item xs={0} className={classes.items} style={{ textAlign: 'left' }} >
                <Box p={2}>
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
              <Grid item xs={0} className={classes.items} style={{ textAlign: 'left' }} >
                <Box p={2}>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h4">Anaylsis of Danish traffic network</Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Box>

          </Grid>

          <Grid
            xs={6}
            container
            direction="column"
            alignContent="center"
            alignItems="center"
            wrap="wrap"
            className={classes.container}
            spacing={0}
          >
            <Box
              m={1}
              width='80%'
              border={3}
              borderColor="text.primary"
              borderRadius={16}
              className={classes.hoverbox}
            >
              <Grid item xs={0} className={classes.items} style={{ textAlign: 'left' }} >
                <Box p={2}>
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
              <Grid container alignContent='center' xs={0}  style={{ textAlign: 'left' }} >
                <Box p={2}>
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
              <Grid item xs={0} className={classes.items} style={{ textAlign: 'left' }} >
                <Box p={2}>
                  <ThemeProvider theme={theme}>
                    <Typography variant="h4">Managing Big Data with MySQL</Typography>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}


export default Projects