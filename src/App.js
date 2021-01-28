import React, { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Footer from './components/Footer'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    backgroundColor: '#81c784',
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
    <Container className={classes.root} maxWidth={false}>
      <Header tabValue={tabVal} handleChange={handleChange} />
      <Content />
      <Footer />
    </Container>
  )
}

export default App