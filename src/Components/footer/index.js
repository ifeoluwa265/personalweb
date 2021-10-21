import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import logo from '../../images/logof.png'
import  instagram from "../../images/insta.png";
import facebook from "../../images/facebook.png";
import  twitter from "../../images/twitter.png";
import  watsapp from "../../images/watsap.png";
import  mail from "../../images/gmail.png";
import phone from "../../images/Mask.png";

const useStyles = makeStyles((theme) => ({
home:{
    background:"#081929",
    color:"white",
    alignItems:"center",
    padding:"1.5rem",
textAlign:"center"
},
picture:{
    width:"7.9vw"
       },
pices:{
borderRadius:"50%",
alignContent:"center",
alignItems:"center",
margin:"0",
padding:"7px",
background:"white",
border:"none",
}
}))
const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={0}className={classes.home}>
            <Grid item xs={12} sm={12} md={12} >    <h3>Hit me up</h3> </Grid>

            <Grid container spacing={0}>
            <Grid item  xs={4} sm={4}  md={3} > 
            <img src={logo} alt="Logo" className={classes.picture} /> 
            </Grid>
            <Grid item  xs={2} sm={2}  md={2} /> 

            <Grid item  xs={4} sm={4}  md={3} > 

            <div style={{display:"flex", alignItems:"center",justifyContent:"space-around"}}>
            <div  className={classes.pices}> 
            <img src={instagram} alt="Logo" className={classes.pics} /> 
            </div>
            <div  className={classes.pices}> 
            <img src={facebook} alt="Logo" className={classes.pics} /> 
            </div> 
            <div  className={classes.pices}> 
            <img src={twitter} alt="Logo" className={classes.pics} /> 
            </div>
            <div  className={classes.pices}> 
            <img src={watsapp} alt="Logo" className={classes.pics} /> 
            </div>
            <div  className={classes.pices}> 
            <img src={mail} alt="Logo" className={classes.pics} /> 
            </div>
            <div  className={classes.pices}> 
            <img src={phone} alt="Logo" className={classes.pics} /> 
            </div>
          
            </div>
            </Grid>
            </Grid>

            <Grid item sm={12} md={12} lg={12}>    <h3>&#xa9; 2021 Adeeko Feyisetan</h3> </Grid>


            </Grid>
        </>
    )
}

export default Footer
