import React, { useState, useEffect } from "react";
import { Button, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { Gun4 } from "../../../assets/index.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";

export function ImageSlider({ classes }) {
  const [currentImage, setcurrentImage] = useState(0);
  const [widthS, setWidths] = useState(650);

  const previous = () => {
    if (currentImage > 0) return setcurrentImage(currentImage - 1);
  };
  const next = () => {
    if (currentImage < 3) return setcurrentImage(currentImage + 1);
  };
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 590
        ? setWidths(300)
        : window.innerWidth < 786
        ? setWidths(500)
        : window.innerWidth < 1000
        ? setWidths(650)
        : window.innerWidth < 1090
        ? setWidths(400)
        : window.innerWidth < 1460
        ? setWidths(500)
        : window.innerWidth < 1800
        ? setWidths(650)
        : window.innerWidth < 2300
        ? setWidths(800)
        : window.innerWidth < 27020
        ? setWidths(1000)
        : setWidths(650);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <Grid item conatiner className={classes.root_slider}>
      <Grid item conatiner className={classes.flexslider}>
        <Grid className={classes.leftslider}>
          <div className={classes.btn_slider_changer}>
            <button
              className={classes.btn_slider_changer_prev}
              onClick={previous}
            >
              <PlayArrowIcon
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  transform: "scaleX(-1)",
                }}
              />
            </button>
          </div>

          <Carousel
            showArrows={false}
            autoFocus={true}
            // centerMode={true}
            centerSlidePercentage={100}
            width={widthS}
            selectedItem={currentImage}
            showIndicators={false}
            statusFormatter={() => null}
            className={classes.styling_carosul}
          >
            <Grid item className={classes.img_slider_size}>
              <img alt="" src={Gun4} />
            </Grid>
            <Grid item className={classes.img_slider_size}>
              <img alt="" src={Gun4} />
            </Grid>

            <Grid item className={classes.img_slider_size}>
              <img alt="" src={Gun4} />
            </Grid>
            <Grid item className={classes.img_slider_size}>
              <img alt="" src={Gun4} />
            </Grid>
          </Carousel>

          <div className={classes.btn_slider_changer}>
            <button className={classes.btn_slider_changer_nect} onClick={next}>
              <PlayArrowIcon
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  transform: "scaleX(1)",
                }}
              />
            </button>
          </div>

          <div className={classes.likeicon}>
            <IconButton
              style={{
                background: "white",

                padding: "5px",
                borderRadius: "50%",
                boxShadow: "1px 2px 5px grey",
              }}
            >
              <FavoriteBorderIcon
                color="primary"
                style={{
                  color: "grey",
                }}
              />
            </IconButton>
          </div>
        </Grid>
        <Grid className={classes.right_custom}>
          <Paper elevation={0}>
            <Grid>
              <Grid>
                <Typography className={classes.typo_heading_title} variant="h6">
                  MAXIM DEFENSE PDX SBR FDE 5.56 NATO MXM- 47806 NOT A PISTOL
                  EFORM 3{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.right_flex_button}
                  >
                    ITEM CODE : 1234567{" "}
                  </Button>
                </Typography>
                <Typography className={classes.typo_heading_note}>
                  Q LWRC Colt Daniel Defense FN Noveske SIG LMT POF
                </Typography>
                <Typography className={classes.typo_heading_rating}>
                  <b>4.5 | </b>{" "}
                  <b
                    style={{
                      position: "absolute",
                      top: "8px",
                      left: "25px",
                      padding: "0 10px",
                    }}
                  >
                    {" "}
                    <StarIcon
                      color="secondary"
                      style={{ fontSize: "25px" }}
                    />{" "}
                  </b>
                  <span style={{ marginLeft: "30px" }}>577 Rating</span>
                </Typography>
                <Typography className={classes.typo_heading_assure}>
                  <b
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "0px",
                      padding: "0 1px",
                    }}
                  >
                    {" "}
                    <VerifiedUserIcon
                      color="secondary"
                      style={{ fontSize: "25px" }}
                    />{" "}
                  </b>
                  <span
                    style={{
                      marginLeft: "30px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    Assured Item
                  </span>
                </Typography>
                <Typography className={classes.typo_heading_seller_flex}>
                  <Typography className={classes.typo_heading_seller_c}>
                    Condition : <b>FFL</b> is Required
                  </Typography>
                  <Typography
                    className={classes.typo_heading_seller_c}
                    color={"secondary"}
                  >
                    <Link
                      to="/"
                      color="secondary"
                      style={{ color: "#b79d5c", textDecoration: "none" }}
                    >
                      Ask Seller a Question ?
                    </Link>
                  </Typography>
                </Typography>
                <Grid className={classes.btn_bit_value_flex}>
                  <Grid>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn_bit_value}
                    >
                      Starting Bid
                      <br />$ 53.5
                    </Button>
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn_bit_value}
                    >
                      Current Bid
                      <br />$ 53.5
                    </Button>
                  </Grid>
                </Grid>
                <Typography>
                  <Link
                    to="#"
                    color="secondary"
                    style={{ color: "red", textDecoration: "none" }}
                  >
                    {" "}
                    SIGN IN / REGISTER TO START BIDDING
                  </Link>
                </Typography>
                <Grid className={classes.input_bid_submit_flex}>
                  <input
                    variant="outlined"
                    margin="normal"
                    required
                    name="bidvalue"
                    placeholder="Enter amount (Min Bid :308.99)"
                    type="text"
                    id="bidvalue"
                    classes={{ focused: classes.inputFocused }}
                    className={classes.input_bid_submit}
                    // autoComplete="current-password"
                  />
                  <Grid>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn_bit_submit}
                    >
                      Bid
                    </Button>
                  </Grid>
                </Grid>
                <Typography className={classes.typo_heading_seller_flex}>
                  <Typography className={classes.typo_heading_seller_c}>
                    No. of Bids Till now: <b> 14 Bids</b>
                  </Typography>
                  <Typography
                    className={classes.typo_heading_seller_c}
                    color={"secondary"}
                  >
                    <Link
                      to="/"
                      color="secondary"
                      style={{ color: "#b79d5c", textDecoration: "none" }}
                    >
                      View Bid History
                    </Link>
                  </Typography>
                </Typography>
                <Typography className={classes.typo_heading_views}>
                  <b
                    style={{
                      position: "absolute",
                      top: "3px",
                      left: "0px",
                      padding: "0 2px",
                    }}
                  >
                    <VisibilityIcon
                      style={{ fontSize: "20px", color: "black" }}
                    />{" "}
                  </b>
                  <span style={{ fontSize: "14px", marginLeft: "35px" }}>
                    Item Viewed Till now:{" "}
                    <b style={{ fontSize: "15px" }}>102 times</b>
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
