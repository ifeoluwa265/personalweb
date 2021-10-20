import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  screen: {
    alignItems: "center",
    padding: "3rem 5rem 4rem 3rem",
    background:"#F9F9FC"
  },
}));
const Works = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={0} className={classes.screen}>
        <Grid item sm={12} md={12} lg={12} className={classes}>
          <p style={{ fontSize: "2.4rem", margin: "0px" }}>My Works</p>
          <hr
            style={{
              border: "1px solid #FFB22A",
              width: "5%",
              marginLeft: "65px",
            }}
          />
          <Grid
            item
            sm={12}
            md={12}
            lg={12}
            style={{ padding: "5rem 20rem 5rem 20rem", alignItems: "center" }}
          ></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Works;
