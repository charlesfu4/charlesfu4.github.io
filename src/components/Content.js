import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Projects from '../pages/Projects'

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
  container:{
    minHeight: '60vh'
  },
}))

const Content = ({ tabValue }) => {
  const classes = useStyles()

  const threeCases = (value) => {
    console.log(value)
    switch(value){
    case 0:{
      return <About className={classes.container} checked={tabValue} />
    }
    case 1:{
      return <Projects className={classes.container} checked={tabValue} />
    }
    case 2:{
      return <Resume className={classes.container} checked={tabValue} />
    }
    case 3:{
      return <Contact className={classes.container} checked={tabValue} />
    }
    default:
      return 'This is 0'
    }
  }

  return(
    <Grid container className={classes.root} justify='center'>
      {threeCases(tabValue)}
    </Grid>
  )
}

export default Content