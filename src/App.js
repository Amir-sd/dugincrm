import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import logo from './logo.svg';
import './App.css';
import MainMenu from './mainMenu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  topmenu: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    height: '100px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const App = (props) => {
  const { classes } = props;
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Кукареку</h1>
      </header>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={classes.topmenu}>Верхнее меню</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}><MainMenu text={'Амир-кефир'} abc={5}/></Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>Рабочий стол</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default withStyles(styles)(App);
