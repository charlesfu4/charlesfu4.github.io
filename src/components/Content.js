import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import About from './About'
import Contact from './Contact'

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
      return <About className={classes.container} />
    }
    case 1:{
      return 'This is 1'
    }
    case 2:{
      return 'This is 2'
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