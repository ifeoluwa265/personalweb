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
       padding:"1rem",
       alignItems:"center",
       fontSize:"1.4rem",
       color:"black",
       overflow: "hidden",
       position: "fixed",
       top:" 0",
       left: "0",
       zIndex:" 9999",
       minWidth:" 100%",
       backgroundColor: "white",
       right:"0"
    },
    links:{
        color:"black",
        textDecoration:"none"
    },
   

  }));
const Header = () => {
    const classes = useStyles();
    return (
        
        <Grid container spacing={2} className={classes.nav}>
         <Grid item sm={2} md={4} lg={2}>  <img src={logo} alt="Logo" className={classes.pic} /> </Grid> 
         <Grid item sm={2} md={2} lg={1}>  <h3 > <a href="#abc" className={classes.links}>Home</a></h3>
    </Grid> 
         <Grid item sm={3} md={2} lg={1}>  <h3 > <a href="#abc"className={classes.links} >About Me</a></h3>  </Grid> 
         <Grid item sm={3} md={2} lg={1}>  <h3 > <a href="#abc"className={classes.links} >Works</a></h3>     </Grid> 
         <Grid item sm={3} md={2} lg={1}>  <h3 > <a href="#abc"className={classes.links} >Blogs</a>  </h3>    </Grid> 
         <Grid item sm={3} md={2} lg={1}>  <h3 > <a href="#abc" className={classes.links}>Contact me</a> </h3>     </Grid> 
         <Grid item sm={2} md={1} lg={1}>   </Grid> 

         <Grid item sm={6} md={2} lg={1}>  <InstagramIcon style={{ color:  "#34667E",fontSize: "40px"  }}/> </Grid> 
         <Grid item sm={6} md={2} lg={1}>  < FacebookIcon style={{ color: "#34667E",fontSize: "40px"  }}/> </Grid> 
         <Grid item sm={6} md={2} lg={1}>  <TwitterIcon style={{ color: "#34667E",  fontSize: "40px" }} /> </Grid> 

             </Grid> 
    )
}

export default Header
