import React,{useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Container, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {Link as Scroll} from "react-scroll";

const useStyles=makeStyles((theme) =>({

    root:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"80vh",
        padding: "2rem",
        background:"#00071c",
        fontFamily:"Manrope",
        
    },
    goDown: {
        color: "white",
      },
      scrollText: {
        color: "white",
        fontSize: "12px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "16px",
        },
      },

    scroller:{
        position:"absolute",
        alignItems:"center",
        justifyContent:"end",
        bottom:"2rem",
        [theme.breakpoints.up("sm")]:{
            left:"2.5rem",
        },
        [theme.breakpoints.up("lg")]:{
            left:"5rem",
        },

    },
    appbarTitle:{
        opacity:0,
    },
}));

function Hero(){
    const classes=useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(true);
    }, []);
  

return(
    <div className={classes.root} >
        <Container className="container px-5 py-24 mx-auto text-white">
        <Collapse in={checked}
        {...(checked?{timeout:100}:{})}
        collapsedHeight={50}
        > 
            <h1 className="text-white text-4xl sm:text-6xl font-semibold tracking-wide">
                    <h3 className="text-lg text-teal leading-loose">Hi, I'm Nitish kumar </h3>
                    <span className="leading-snug">A <span className="hover:text-teal">CyberSecurity</span> Enthusiast,</span> <br />
                  <span className="leading-snug"> I build Things for Web</span> <br />
                  <span className="text-grey-500 leading-tight"> Currently Building
                  <span id="devColony" className="hover:text-teal"> Dev Colony </span>  
                  for Democratizing mentorship for everyone.
                  </span>
            </h1>
            <div className={classes.scroller}>
                <Scroll to="hero" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon fontSize="small" className={classes.goDown} />
                    </IconButton>
                    <span className={classes.scrollText}>scroll</span>
                </Scroll>
            </div>
            </Collapse>
        </Container>
    </div>
);

}
export default Hero;