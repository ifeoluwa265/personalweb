import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { data } from "../cards"
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
            style={{ marginBottom:"3rem", alignItems: "center" }}
          ></Grid>
        </Grid>
        <Grid container spacing={1}>
            { data.map((item) => {
                return (
                  <Grid item xs={6} sm={3} md={3}>
                    <Card className="newcard">
                      <CardActionArea>
                        <CardMedia
                        className='picturez'
                          component="img"
                          alt="thinklogo"
                          height="200"
                          image={item.imagez}
                          style={{ background: "white" }}
                        />
                        <CardContent>
                          <h6 style={{ color: "#43E673" }}>
                            {item.description}
                          </h6>
                        </CardContent>
                      </CardActionArea>
                      <CardContent>
                        <Grid container spacing={0}>
                          <Grid item xs={12} sm={10} md={10}>
                            {item.price}
                          </Grid>
                          <Grid item xs={12} sm={2} md={2}>
                            <FavoriteBorderIcon
                              style={{ color: "#27AADE", align: "right" }}
                            >
                              FavoriteIcon
                            </FavoriteBorderIcon>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
} 
          </Grid>
      </Grid>
    </>
  );
};

export default Works;


