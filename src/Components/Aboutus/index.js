import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { data } from "../cards"

const AboutUs = () => {
    return (
        <div>
             <Grid container spacing={1}>
            {data.length > 0 ? (
              data.map((item) => {
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
            ) : (
              <div>No product yet!</div>
            )}
          </Grid>
        </div>
    )
}

export default AboutUs
