import React from 'react'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles'


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 66,
      width: '100%',
      backgroundColor: '#000',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#000',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 5,
    },
  },
}))((props) => <Tab disableRipple {...props} />)

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
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
      fontSize: '1.6rem',
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
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid container
          alignItems="center"
          justify="center"
        >
          <StyledTabs
            value={tabValue}
            onChange={handleChange}
            centered
          >
            <StyledTab component={Link} className={classes.label} label="About" to="/" />
            <StyledTab component={Link} className={classes.label} label="Projects" to="/projects" />
            <StyledTab component={Link} className={classes.label} label="Resume" to="/resume" />
            <StyledTab component={Link} className={classes.label} label="Contact" to="/contact" />
          </StyledTabs>

        </Grid>
      </Grid>
    </div>

  )
}

export default Header