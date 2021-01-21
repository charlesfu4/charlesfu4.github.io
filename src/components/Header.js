import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: '#81c784',
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#50C878',
  },
  label: {
    fontSize: '22px',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
}))


const Header = ({ tabValue, handleChange }) => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
