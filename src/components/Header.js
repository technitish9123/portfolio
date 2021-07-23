import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container,CssBaseline,IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import {Link } from "react-router-dom";
import {withRouter} from "react-router-dom";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    padding:"1rem",
    backgroundColor:"#00071c",
   
  },
  appbar:{
      background:"#00071c",
     
  },
  appbarWrapper:{
      display:"flex",
      justifyContent:"space-between",
  },
  title: {
    flexGrow: 1,
  },
  logo:{
    color:"#64FFDA",  
     
      display:"flex",
     
      justifyContent:"center",
      alignItems:"center",
      fontWeight:"500",
      fontSize:"22px",
  },
 
  mobileNav:{
    [theme.breakpoints.up("md")]:{
        display:"none",
    },
  },
  desktopNav:{
    [theme.breakpoints.down("md")]:{
        display:"none",
    },
  },
 
}));

export default function Header() {
  const classes = useStyles();

    const [value, setValue] =useState("/");
    const handleChange=(event,newValue) =>{
    setValue(newValue);
    //history.push(newValue);
}
  return (
      <>
    <div className={classes.root}>
      <AppBar className={classes.appbar} >
          <CssBaseline className="container px-5 py-24 mx-auto text-white" />
       <Container className={classes.appbarWrapper}>
          
              
       <div  className={classes.logo}  >
              <Link to="/">
                       { /*
                       <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7 my-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                          />
                       </svg>*/ }
                       
                       </Link>
                   <h1 className="ml-2 text-xl font semibold text-white">Nitish</h1>
                   
                   </div>
                   
               
              
           
           <IconButton className={classes.mobileNav}>
            <div>

            </div>

           </IconButton>
           <Tabs value={value} onchange={handleChange} indicatorColor="primary" textColor="#fff" className={classes.desktopNav}>
               <Tab label="Workspace" value="/workspace" />
               <Tab label="About" value="/about" />
           </Tabs>
       </Container>
       
      </AppBar>
    </div>
    </>
  );
}