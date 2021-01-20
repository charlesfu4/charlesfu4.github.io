import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'


const Header = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }))
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Hi, this is Charles</Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="About" />
            <Tab label="Projects" />
            <Tab label="Contact" />
          </Tabs>

        </Grid>
      </Grid>
    </div>

  )
}

export default Header
