import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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

const App = () => {
  const [tabVal, setTabVal] = useState(0)

  const handleChange = (event, tabVal) => {
    setTabVal(tabVal)
  }

  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Header tabValue={tabVal} handleChange={handleChange} />
      <Content />
      <Footer />
    </div>
  )
}

export default App