import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import { Container,CssBaseline,IconButton } from '@material-ui/core';

import {Link } from "react-router-dom";

import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';

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
                      
                       <span>
                         <WifiOutlinedIcon />
                       </span>
                       
                       </Link>
                   <h1 className="ml-2 text-xl font semibold text-white">Nitish</h1>
                   
                   </div>
                   
               
              
           
           <IconButton className={classes.mobileNav}>
            <div>

            </div>

           </IconButton>
           <Tabs value={value} onchange={handleChange} indicatorColor="primary" textColor="#fff" className={classes.desktopNav}>
               <Link to="/workspace">
                 <Tab label="Workspace" value="/workspace" />
               </Link>
               <Link to="/achievements">
                 <Tab label="Achievements" value="/achievements" />
               </Link>
               <Link to="/about">
                 <Tab label="About" value="/about" />
               </Link>
           </Tabs>
       </Container>
       
      </AppBar>
    </div>
    </>
  );
}