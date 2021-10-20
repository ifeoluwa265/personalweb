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
    padding:"3rem"
},
picture:{
    width:"7.9vw"
       },
       pics:{
background:"white",
border:"none",
borderRadius:"50%",
width:" 1.1vw",
height:"3vh",
alignItems:"center",
padding:"3px",
       },
}))
const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={0}className={classes.home}>
            <Grid item sm={12} md={12} lg={12}  style={{alignItem:"center",textAlign:"center"}}>    <h3>Hit me up</h3> </Grid>
            <Grid item sm={4} md={3} lg={3}> 
            <img src={logo} alt="Logo" className={classes.picture} /> 
            </Grid>

            <Grid item sm={1} md={1} lg={1} margin={0}> 
            <img src={instagram} alt="Logo" className={classes.pics} /> 
            </Grid>
            <Grid item sm={1} md={1} lg={1}> 
            <img src={facebook} alt="Logo" className={classes.pics} /> 
            </Grid>
            <Grid item sm={1} md={1} lg={1}> 
            <img src={twitter} alt="Logo" className={classes.pics} /> 
            </Grid>
            <Grid item sm={1} md={1} lg={1}> 
            <img src={watsapp} alt="Logo" className={classes.pics} /> 
            </Grid>
            <Grid item sm={1} md={1} lg={1}> 
            <img src={mail} alt="Logo" className={classes.pics} /> 
            </Grid>
            <Grid item sm={1} md={1} lg={1}> 
            <img src={phone} alt="Logo" className={classes.pics} /> 
            </Grid>
            <Grid item sm={2} md={2} lg={2}> 
            </Grid>
            <Grid item sm={1} md={1} lg={1}/> 
            <Grid item sm={12} md={12} lg={12}  style={{alignItem:"center",textAlign:"center"}}>    <h4>&#xa9; 2021 Adeeko Feyisetan</h4> </Grid>


            </Grid>
        </>
    )
}

export default Footer
