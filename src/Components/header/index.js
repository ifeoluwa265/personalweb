import React from 'react'
import Grid from '@material-ui/core/Grid';
import logo from '../../images/logof.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
   pic:{
width:"7.9vw"
   },
   nav:{
       padding:".3rem",
       alignItems:"center",
       fontSize:"1.1rem",
       color:"black",
       overflow: "hidden",
       position: "fixed",
       top:" 0",
       left: "0",
       zIndex:" 9999",
       width:" 100vw",
       backgroundColor: "white",
    },
    links:{
        color:"black",
        textDecoration:"none"
    },
   

  }));
const Header = () => {
    const classes = useStyles();
    return (
        
        <Grid container spacing={0} className={classes.nav}>
         <Grid item xs={4}  sm={2} md={2} >  <img src={logo} alt="Logo" className={classes.pic} /> </Grid> 
         <Grid item xs={4} sm={2} md={1} >  <h3 > <a href="#section6"className={classes.links} >Home</a></h3>  </Grid> 
         <Grid item xs={4} sm={2} md={1} >  <h3 > <a href="#section1"className={classes.links} >About Me</a></h3>  </Grid> 
         <Grid item xs={4} sm={2} md={1}>  <h3 > <a href="#section3" className={classes.links} >Works</a></h3>     </Grid> 
         <Grid item xs={4} sm={2} md={1}>  <h3 > <a href="#abc"className={classes.links} >Blogs</a>  </h3>    </Grid> 
         <Grid item xs={4} sm={2} md={1}>  <h3 > <a href="#section4" className={classes.links}>Contact me</a> </h3>     </Grid> 
         <Grid item xs={0} sm={2} md={2}/> 
         <Grid item xs={4} sm={2} md={1}>  <InstagramIcon style={{ color:  "#34667E",fontSize: "40px"  }}/> </Grid> 
         <Grid item xs={4} sm={2} md={1}>  < FacebookIcon style={{ color: "#34667E",fontSize: "40px"  }}/> </Grid> 
         <Grid item xs={4} sm={2} md={1}>  <TwitterIcon style={{ color: "#34667E",  fontSize: "40px" }} /> </Grid> 

             </Grid> 
    )
}

export default Header
