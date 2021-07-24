import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Home from './views/Home';
import Achievements from  './views/Achievements'
import Workspace from './views/Workspace';
import Footer from './components/Footer';
import About from './views/About';

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
        <Route exact path="/workspace" component={Workspace} />
        <Route exact path="/achievements" component={Achievements} />
        <Route exact path="/about" component={About} />
       <Footer />
        </div>
      </Switch>

   </Router>
  );
}

export default App;
