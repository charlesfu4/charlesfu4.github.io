import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

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
}))

const Resume = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        className={classes.container}
      >
        <Button variant='contained' color='primary' href='https://github.com/charlesfu4/charlesfu4.github.io/raw/main/cv/Chu_Cheng_CV.pdf'>
          Download pdf file
        </Button>

      </Grid>
    </div>

  )
}

export default Resume