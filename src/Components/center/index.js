import React from "react";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../../images/pursuit.jpg";
import up from "../../images/upquote.jpg";
import Down from "../../images/down.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textes: {
    background: "#f9f9fc",
    padding: "2rem",
    marginTop: "5rem",
  },
  img: {
    background: "#FFB22A",
    padding: "5rem",
  },
  input: {
    border: "none",
    borderRadius: "5px",
    padding: ".9rem",
    width: "20rem",
    fontSize: "20px",
  },
  button: {
    border: "1px solid black",
    borderRadius: "5px",
    padding: ".6rem",
    width: "13rem",
    color: "#FFB22A",
    background: "black",
    fontSize: "20px",
  },

  imgdv: {
    background: "white",
    padding: "2rem",
    height: "650px",
    overflow: " visible",
    marginBottom: "40px",
    marginRight: "-25px",
    position: "relative",
  },
  pic: {
    height: "36rem",
    overflow: " hidden",
    position: "absolute",
    marginRight: "-45px",
    paddingTop: "2rem",
  },
  design: {
    fontSize: "0.6rem",
    color: "#CCCFD5",
    marginTop: "-15px",
    border: "2px solid red",
  },
  screen: {
    alignItems: "center",
    padding: "3rem 5rem 4rem 3rem",
  },
  button1: {
    border: "1px solid #FFB22A",
    borderRadius: "5px",
    padding: "1.2rem",
    width: "10rem",
    color: "#FFB22A",
    background: "transparent",
    fontSize: "15px",
    marginBottom:"5px"
  },
  button2: {
    border: "none",
    borderRadius: "5px",
    padding: "1.2rem",
    width: "10rem",
    color: "#FFB22A",
    background: "black",
    fontSize: "15px",
    marginBottom:"5px"

  },
}));
const Center = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0}  id="section6">
        <Grid item xs={12} sm={7} md={7} className={classes.textes}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={9} md={9}>
              <p style={{ color: "#FFB22A", fontSize: "2.8rem" }}>
                Adeeko Feyisetan
              </p>
              <p style={{ color: "black", fontSize: "2rem" }}>
                Software Developer
              </p>
              <p style={{ color: "black", fontSize: "1.3rem" }}>
                I build very efficient, scaleable and maintainable single
                <br />
                page applications and server- side application
              </p>
              <p
                style={{
                  color: "#34667E",
                  fontSize: "1.2rem",
                  alignItems: "center",
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />I am
                available for full time employment and a cup of coffee
              </p>
            </Grid>
            <Grid container spacing={0} style={{ alignItems: "center" }}>
              <Grid item sm={12} md={8} lg={8}>
                {" "}
                <input
                  className={classes.input}
                  placeholder="Send me a message..........."
                />{" "}
              </Grid>
              <Grid item xs={12} md={4} lg={4} className={classes.buttos}>
                {" "}
                <button className={classes.button}>Connect with me</button>{" "}
              </Grid>
            </Grid>{" "}
          </Grid>
        </Grid>

        <Grid item xs={6} sm={3} md={3} className={classes.imgdv}>
          <img src={pic} alt="Logo" className={classes.pic} />{" "}
        </Grid>

        <Grid item xs={4} sm={2} md={2} className={classes.img}>
          {" "}
        </Grid>
      </Grid>
      <Grid container spacing={0} className={classes.screen}  id="section1">
        <Grid item xs={12} sm={12} md={12}>
          <Typography style={{ fontSize: "1.8rem" }}>About me</Typography>
          <hr
            style={{
              border: "1px solid #FFB22A",
              width: "5%",
              marginLeft: "65px",
            }}
          />
        </Grid>
        <Grid container spacing={0}>
        <Grid item xs={2}  sm={3} md={3}  />
          <Grid item xs={2} sm={3} md={5} >
            <img src={up} alt="Logo" className={classes.quote} />{" "}
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              My name is Adeeko Feyisetan. I am a software developer with over
              five years experience.I build very efficient, scaleable and
              maintainable single page applications and server- side
              application.{" "}
            </p>
            <h2>Experience:</h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "5rem" }}>
              Experience. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Facilisis dictum orci integer vel nulla. Mauris ac nam massa
              eu eu, senectus non. Turpis fringilla eleifend dictum fringilla.
              Nibh Sit nascetur eget purus ultrices feugiat egestas quis nec
              ornare. Sapien vivamus pretium, ultrices lorem sagittis
              pellentesque. Mauris vestibulum mollis sit tempus.
            </p>
          </Grid>{" "}
          <Grid item xs={4} md={4}  />{" "}
        </Grid>


        <Grid container spacing={4}>
          <Grid item xs={4} sm={3} md={3}  />
          <Grid item xs={12} sm={4} md={3} >
            {" "}
            <button className={classes.button1}>View resume</button>{" "}
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            {" "}
            <button className={classes.button2}>Hire me</button>{" "}
          </Grid>
          <Grid item xs={4}  sm={2} md={3}  />

        </Grid>
        <Grid container spacing={0}>
        <Grid item xs={4}  sm={2} md={3}  />
        <Grid item xs={4}  sm={2} md={3}  />

        <Grid item xs={12} sm={4} md={3}>
          </Grid>
        <img src={Down} alt="Logo" className={classes.quote} />{" "}

        </Grid>

      </Grid>













      <Grid container spacing={0} className={classes.screen}>
        <Grid item xs={12} md={12} lg={12} className={classes}>
          <Typography style={{ fontSize: "1.8rem" }}>Tools</Typography>
          <hr
            style={{
              border: "1px solid #FFB22A",
              width: "5%",
              marginLeft: "20px",
            }}
          />            </Grid>

          <Grid
            container
            spacing={0}
            style={{
              alignItems: "center",
              padding:"1.5rem"
            }}
          >

            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                Javascript (ES6+)
              </p>
            </Grid>
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" /> Mongo
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
Angular              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" /> MySQL
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" /> Vue
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                Laravel
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" /> HTML
                & (S) CSS
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" /> PHP
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                Laravel
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              {" "}
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                Express (Node FS)
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />
            <Grid item xs={12} sm={3} md={3}>
              <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" /> PHP
              </p>
            </Grid>{" "}
            <Grid item xs={1} sm={1} md={1}  />     <Grid item xs={12} sm={3} md={3}>
              {" "}
      
            <p
                style={{
                  fontSize: "1.2rem",
                  alignItems: "center",
                  color:"black"
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
Boostrap              </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Center;
