import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { mainStayles } from "../../generalStyles";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(../../../img/cover.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    padding: 25,
    justifyContent: "space-around"
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  }
}));
function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: mainStayles.mainColor
            }}
          >
            Crypto Market
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              display: "inline",
              color: "black",
              background: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
          >
            Get All Informations about your favorite Crypro currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
