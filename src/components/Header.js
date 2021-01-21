import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'

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
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
}))


const Header = ({ tabValue, handleChange }) => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab className={classes.label} label="About" />
            <Tab className={classes.label} label="Projects" />
            <Tab className={classes.label} label="Resume" />
            <Tab className={classes.label} label="Contact" />
          </Tabs>

        </Grid>
      </Grid>
    </div>

  )
}

export default Header
