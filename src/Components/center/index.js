import React from "react";
import Grid from "@material-ui/core/Grid";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../../images/pursuit.jpg";
import up from "../../images/upquote.jpg";
import Down from "../../images/down.jpg";

const useStyles = makeStyles((theme) => ({
  textes: {
    background: "#f9f9fc",
    padding: "5rem",
    marginTop: "12rem",

  },
  img: {
    background: "#FFB22A",
    padding: "5rem",
  },
  input: {
    border: "none",
    borderRadius: "5px",
    padding: "2rem",
    width: "34.6vw",
    fontSize: "25px",
  },
  button: {
    border: "1px solid black",
    borderRadius: "5px",
    padding: "1.5rem",
    width: "15.6vw",
    color: "#FFB22A",
    background: "black",
    fontSize: "30px",
  },
  buttos: {
    marginLeft: "-220px",
  },
  imgdv: {
    background: "white",
    padding: "3rem",
    height: "650px",
    overflow: " visible",
    marginBottom: "20px",
    marginRight: "-30px",
    position: "relative",
  },
  pic: {
    height: "93vh",
    //   overflow:" visible",
    position: "absolute",
    marginRight: "-50px",
    top: " -70px",
    paddingTop: "2rem",
  },
  design: {
    fontSize: "0.8rem",
    color: "#CCCFD5",
    marginTop: "-15px",
  },
  screen: {
    alignItems: "center",
    padding: "3rem 5rem 4rem 3rem",
  },
  button1: {
    border: "1px solid #FFB22A",
    borderRadius: "5px",
    padding: "1.5rem",
    width: "14vw",
    color: "#FFB22A",
    background: "transparent",
    fontSize: "30px",
  },
  button2: {
    border: "none",
    borderRadius: "5px",
    padding: "1.5rem",
    width: "14vw",
    color: "#FFB22A",
    background: "black",
    fontSize: "30px",
  },
}));
const Center = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={10} md={10} lg={10} className={classes.textes}>
          <Grid container spacing={0}>
            <Grid item xs={9} md={9} lg={9}>
              <p style={{ color: "#FFB22A", fontSize: "5rem" }}>
                Adeeko Feyisetan
              </p>
              <p style={{ color: "black", fontSize: "3rem" }}>
                Software Developer
              </p>
              <p style={{ color: "black", fontSize: "1.6rem" }}>
                I build very efficient, scaleable and maintainable single page
                <br />
                applications and server- side application
              </p>
              <p
                style={{
                  color: "#34667E",
                  fontSize: "1.8rem",
                  alignItems: "center",
                }}
              >
                <FiberManualRecordIcon color="#34667E" fontSize="small" />I am
                available for full time employment and a cup of coffee
              </p>
            </Grid>
            <Grid item xs={12} md={3} lg={3} className={classes.imgdv}>
              {" "}
              <img src={pic} alt="Logo" className={classes.pic} />{" "}
            </Grid>{" "}
            <Grid container spacing={0}>
              <Grid item sm={8} md={8} lg={8}>
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
        <Grid item xs={12} md={2} lg={2} className={classes.img}>
          {" "}
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12} className={classes.design}>
            IOIOIOIOIOIOIOIOIIOOIOIOIOOIOIOOIOIOIOIOOIOIOOIOIOIOIOOIOIOIOIOIOIOIOIOOIOIOIOOIOIOIOIOIOIOOIOIOOIOIOIOOIOOIOIOIOOIOIOOIOIOOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOOIOIOOIOIOOIOIOIOIOOIOIOIOOIOIOOIOIOOIOIOIOIOIOOIOIOIOOIOIOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOIOIO
            <br />
            IOIOIOIOIOIOIOIOIIOOIOIOIOOIOIOOIOIOIOIOOIOIOOIOIOIOIOOIOIOIOIOIOIOIOIOOIOIOIOOIOIOIOIOIOIOOIOIOOIOIOIOOIOOIOIOIOOIOIOOIOIOOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOOIOIOOIOIOOIOIOIOIOOIOIOIOOIOIOOIOIOOIOIOIOIOIOOIOIOIOOIOIOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOIOIO
            <br />
            IOIOIOIOIOIOIOIOIIOOIOIOIOOIOIOOIOIOIOIOOIOIOOIOIOIOIOOIOIOIOIOIOIOIOIOOIOIOIOOIOIOIOIOIOIOOIOIOOIOIOIOOIOOIOIOIOOIOIOOIOIOOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOOIOIOOIOIOOIOIOIOIOOIOIOIOOIOIOOIOIOOIOIOIOIOIOOIOIOIOOIOIOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOIOIO
            <br />
            IOIOIOIOIOIOIOIOIIOOIOIOIOOIOIOOIOIOIOIOOIOIOOIOIOIOIOOIOIOIOIOIOIOIOIOOIOIOIOOIOIOIOIOIOIOOIOIOOIOIOIOOIOOIOIOIOOIOIOOIOIOOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOOIOIOOIOIOOIOIOIOIOOIOIOIOOIOIOOIOIOOIOIOIOIOIOOIOIOIOOIOIOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOOIOOIOIOIOIOIOIOIOIOIO{" "}
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.screen}>
          <Grid item xs={12} md={12} lg={12} className={classes}>
            <p style={{ fontSize: "2.4rem", margin: "0px" }}>About me</p>
            <hr
              style={{
                border: "1px solid #FFB22A",
                width: "5%",
                marginLeft: "65px",
              }}
            />
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              style={{ padding: "5rem 20rem 5rem 20rem", alignItems: "center" }}
            >
              <img src={up} alt="Logo" className={classes.quote} />{" "}
              <p style={{ fontSize: "1.8rem" }}>
                My name is Adeeko Feyisetan. I am a software developer with over
                five years experiance. i I build very efficient, scaleable and
                maintainable single page applications and server- side
                application.{" "}
              </p>
              <h2>Experience:</h2>
              <p style={{ fontSize: "1.8rem", marginBottom: "5rem" }}>
                Experience. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Facilisis dictum orci integer vel nulla. Mauris ac nam
                massa eu eu, senectus non. Turpis fringilla eleifend dictum
                fringilla. Nibh Sit nascetur eget purus ultrices feugiat egestas
                quis nec ornare. Sapien vivamus pretium, ultrices lorem sagittis
                pellentesque. Mauris vestibulum mollis sit tempus.
              </p>
              <Grid container spacing={0}>
                <Grid item xs={4} md={4} lg={4} />
                <Grid item xs={3} md={3} lg={3}>
                  {" "}
                  <button className={classes.button1}>View resume</button>{" "}
                </Grid>
                <Grid item xs={3} md={3} lg={3}>
                  {" "}
                  <button className={classes.button2}>Hire me</button>{" "}
                </Grid>
                <Grid item xs={4} md={4} lg={4} />
              </Grid>
              <img src={Down} alt="Logo" className={classes.quote} />{" "}
            </Grid>
          </Grid>
        </Grid>{" "}
        <Grid container spacing={0} className={classes.screen}>
          <Grid item xs={12} md={12} lg={12} className={classes}>
            <p style={{ fontSize: "2.4rem", margin: "0px" }}>Tools</p>
            <hr
              style={{
                border: "1px solid #FFB22A",
                width: "5%",
                marginLeft: "20px",
              }}
            />
            <Grid
              container
              spacing={0}
              style={{
                padding: "5rem 25rem 5rem 25rem",
                alignItems: "center",
                color: "#34667E",
              }}
            >
              <Grid item sm={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Javascript (ES6+)
                </p>
              </Grid>
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Mongo
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Laravel
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  MySQL
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" /> Vue
                </p>
              </Grid>{" "}
              <Grid item sm={1} md={1} lg={1} />
              <Grid item sm={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Laravel
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  HTML & (S) CSS
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" /> PHP
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Laravel
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Express (Node FS)
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" /> PHP
                </p>
              </Grid>{" "}
              <Grid item xs={1} md={1} lg={1} />
              <Grid item xs={3} md={3} lg={3}>
                {" "}
                <p
                  style={{
                    fontSize: "1.8rem",
                    alignItems: "center",
                  }}
                >
                  <FiberManualRecordIcon color="#34667E" fontSize="small" />{" "}
                  Laravel
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Center;
