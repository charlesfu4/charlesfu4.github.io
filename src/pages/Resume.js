import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
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
      color: 'grey',
      cursor: 'pointer'
    },
  },
  margin: {
    margin: theme.spacing(1),
    fontSize: '22px',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    color: '#81c784',
    '&:hover':{
      color:'#F0EC15',
    }
  },
  hoverbox:{
    '&:hover':{
      backgroundColor: '#F866C7',
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


const Resume = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
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
      <Box p={4}>
        <Grid
          container
          direction="row"
          alignContent="center"
          alignItems="center"
          wrap="wrap"
          className={classes.container}
          spacing={6}
        >
          <Grid item xs={4} className={classes.items} style={{ textAlign: 'center' }} >
            <Box
              p={3}
              m={2}
              width='80%'
              border={3}
              borderColor="text.primary"
              borderRadius={16}
              className={classes.hoverbox}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Education</Typography>
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item xs={4} className={classes.items} style={{ textAlign: 'center' }} >
            <Box
              p={3}
              m={2}
              width='80%'
              border={3}
              borderColor="text.primary"
              borderRadius={16}
              className={classes.hoverbox}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Experience</Typography>
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item xs={4} className={classes.items} style={{ textAlign: 'center' }} >
            <Box
              p={3}
              m={2}
              width='80%'
              border={3}
              borderColor="text.primary"
              borderRadius={16}
              className={classes.hoverbox}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h2">Skills</Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Resume