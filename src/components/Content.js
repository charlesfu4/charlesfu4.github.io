import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Projects from '../pages/Projects'
import {
  Switch,
  Route,
} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#81c784',
  },
  container:{
    minHeight: '60vh'
  },
}))

const Content = () => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container className={classes.container} justify='center'>
        <Switch>
          <Route path='/projects'>
            <Projects checked={true}/>
          </Route>
          <Route path='/resume'>
            <Resume checked={true} />
          </Route>
          <Route path='/contact'>
            <Contact checked={true} />
          </Route>
          <Route path='/'>
            <About checked={true} />
          </Route>
        </Switch>
      </Grid>
    </div>
  )
}

export default Content