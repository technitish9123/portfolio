import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/Footer'

const useStyles= makeStyles((theme) =>({
root :{
    fontFamily:"Manrope",
    background:"#00071c",
    minHeight:"100vh",
    backgroundColor:"#00071c",
},

}));

function App() {
  const classes=useStyles();
  return (
   <Router>
      <Switch>
      <div className={classes.root}>
          <CssBaseline />
        <Header />
        <Route exact path="/" component={Home} />
       <Footer />
        </div>
      </Switch>

   </Router>
  );
}

export default App;
