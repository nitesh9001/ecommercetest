import React, { useMemo } from "react";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Button,
} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Gun1, Gun2, Gun3, Gun4 } from "../../../assets/index.js";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

export function CardAtom({ classes, type }) {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardFooter = useMemo(() => {
    if (type === "showcase") {
      return (
        <div className={classes.cardFooter}>
          <hr className={classes.cardFooterLine} />
          <Grid container direction="row" xs={12} justify="space-around">
            <Grid item xs={5}>
              <Typography variant="caption" className={classes.cardPrice}>
                $3,672.99
              </Typography>
            </Grid>
            <Grid item direction="column" justify="center">
              <Typography variant="caption">color options</Typography>
              <br />
              <Typography className={classes.margin_color}>
                <button
                  aria-label="delete"
                  className={classes.margin_color_btn}
                  style={{
                    background: "grey",
                  }}
                ></button>
                <button
                  aria-label="delete"
                  className={classes.margin_color_btn}
                  style={{
                    background: "black",
                  }}
                ></button>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            xs={11}
            justify="space-around"
            style={{ margin: "0 auto" }}
          >
            <Grid item xs={5}>
              <Typography
                className={classes.cardBid}
                variant="body2"
                style={{ margin: "0 -15px" }}
              >
                0 Bid
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">4d +</Typography>
            </Grid>
          </Grid>
        </div>
      );
    } else if (type === "slider") {
      return (
        <div className={classes.cardFooter}>
          <hr className={classes.cardFooterLine} />
          <Grid container direction="row" xs={12} justify="space-around">
            <Grid item xs={5}>
              <Typography variant="caption" className={classes.cardPrice}>
                $3,672.99
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" xs={12} justify="space-between">
            <Grid item xs={2}>
              <Typography className={classes.cardBid} variant="body2">
                [ 10 ]
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className={classes.cardBid_right}>
                <AccessTimeIcon className={classes.cardBid_icon} />
                Run Until Sold
              </Typography>
            </Grid>
          </Grid>
        </div>
      );
    } else if (type === "listing") {
      return (
        <div className={classes.cardFooter}>
          <hr className={classes.cardFooterLine} />
          <Grid container direction="row" xs={12} justify="space-around">
            <Grid item xs={5}>
              <Typography variant="caption" className={classes.cardPrice}>
                $3,672.99
              </Typography>
            </Grid>
            <Grid item direction="column" justify="center">
              <Typography variant="caption">color options</Typography>
              <br />
              <Typography className={classes.margin_color}>
                <button
                  aria-label="delete"
                  className={classes.margin_color_btn}
                  style={{
                    background: "grey",
                  }}
                ></button>
                <button
                  aria-label="delete"
                  className={classes.margin_color_btn}
                  style={{
                    background: "black",
                  }}
                ></button>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            xs={11}
            justify="space-around"
            style={{ margin: "0 auto" }}
          >
            <Grid item xs={5}>
              <Typography
                className={classes.cardBid}
                variant="body2"
                style={{ margin: "0 -15px" }}
              >
                0 Bid
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">4d +</Typography>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return (
        <div className={classes.cardFooter}>
          <hr className={classes.cardFooterLine} />
          <Grid container direction="row" xs={12} justify="space-between">
            <Grid item xs={4}>
              <Typography className={classes.cardBid} variant="body2">
                Starting Bid
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="caption">1hr12m | 9Bids</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            xs={12}
            justify="space-around"
            align="center"
          >
            <Grid item xs={2} style={{ marginRight: 60 }}>
              <Typography variant="caption" className={classes.cardPrice}>
                $3,672.99
              </Typography>
            </Grid>
            <Grid item xs={2} style={{ marginRight: 50 }}>
              {/* <Typography variant="body2">
              4d +
        </Typography> */}
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Bid
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    }
  }, type);

  return (
    <>
      {type === "sponsoredList" ? (
        <Card className={classes.cardHorizontal}>
          <Grid className={classes.cardInHorizontal}>
            <Typography className={classes.tag_card_hori}>
              <div>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.787"
                    height="18.787"
                    viewBox="0 0 24.787 18.787"
                  >
                    <path
                      id="Icon_feather-message-circle"
                      data-name="Icon feather-message-circle"
                      d="M20.287,11.955a7.35,7.35,0,0,1-.789,3.333,7.455,7.455,0,0,1-6.666,4.122A7.35,7.35,0,0,1,9.5,18.621l-5,1.666,1.666-5a7.35,7.35,0,0,1-.789-3.333A7.455,7.455,0,0,1,9.5,5.289,7.35,7.35,0,0,1,12.832,4.5h.439a7.437,7.437,0,0,1,7.017,7.017Z"
                      transform="translate(-3 0)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                    />
                  </svg>
                </span>
                <span className={classes.b_tag}>Make an Offer</span>
              </div>
            </Typography>
            <IconButton
              aria-label="add to favorites"
              className={classes.fav_icon_hori}
            >
              <FavoriteBorderIcon
                color="primary"
                style={{
                  color: "grey",
                }}
              />
            </IconButton>
            <img
              alt=""
              onClick={() => {
                window.location.href = "/products/Paella-dish";
              }}
              className={classes.cardMedia_hori}
              src={Gun3}
            />
            <Grid
              item
              direction="column"
              justify="center"
              className={classes.color_bar_absolute}
            >
              <Typography variant="caption">color options : Black</Typography>
              <br />
              <Typography className={classes.margin_color}>
                <button
                  aria-label="delete"
                  className={classes.margin_color_btn}
                  style={{
                    background: "grey",
                  }}
                ></button>
                <button
                  aria-label="delete"
                  className={classes.margin_color_btn}
                  style={{
                    background: "black",
                  }}
                ></button>
              </Typography>
            </Grid>
          </Grid>
          <Grid className={classes.cardInHorizontal_content}>
            <CardContent>
              <Typography
                className={classes.cardDescription_h}
                variant="body2"
                component="p"
              >
                Pre May Dealer Sample Danish Madsen M50 9mm Sub Machine Gun M-50
                1950
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                className={classes.cardDescription_h}
                variant="body2"
                component="p"
              >
                Condition : Used or New Product
              </Typography>
            </CardContent>
          </Grid>
          <Grid className={classes.cardInHorizontal_content_pricing}>
            <CardContent>
              <Typography className={classes.cardInHorizontal_typo}>
                Starting Bid
              </Typography>
              <Typography className={classes.cardInHorizontal_typo}>
                $ 1,234.99
              </Typography>
            </CardContent>
            <CardContent>
              <Typography className={classes.cardInHorizontal_typo}>
                Buy Now
              </Typography>
              <Typography className={classes.cardInHorizontal_typo}>
                $ 3,672{" "}
                <span
                  style={{
                    color: "grey",
                    textDecoration: "line-through",
                  }}
                >
                  $ 4,500{" "}
                </span>{" "}
                <span
                  style={{
                    color: "red",
                    fontSize: "14px",
                  }}
                >
                  20% OFF
                </span>
              </Typography>
            </CardContent>
          </Grid>{" "}
          <Grid className={classes.cardInHorizontal_content_profit}>
            <CardContent>
              <Typography>ITEM CODE : #1234567 </Typography>
            </CardContent>
            <CardContent>
              <Typography className={classes.cardInHorizontal_time_sec}>
                1hr12m | 9 Bids
              </Typography>

              <Grid
                item
                direction="row"
                justify="space-between"
                className={classes.cardInHorizontal_biding}
              >
                <Typography className={classes.cardBid} variant="body2">
                  [ 10 ]
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.cardBid_right_hori}
                >
                  <AccessTimeIcon className={classes.cardBid_icon} />
                  Run Until Sold
                </Typography>
              </Grid>
            </CardContent>
          </Grid>{" "}
          <Grid className={classes.cardInHorizontal_content_action}>
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
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Bid
            </Button>
          </Grid>
        </Card>
      ) : (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <>
                {type === "listing" ? (
                  <Typography className={classes.tag_card}>
                    <div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18.787"
                          height="18.787"
                          viewBox="0 0 24.787 18.787"
                        >
                          <path
                            id="Icon_feather-message-circle"
                            data-name="Icon feather-message-circle"
                            d="M20.287,11.955a7.35,7.35,0,0,1-.789,3.333,7.455,7.455,0,0,1-6.666,4.122A7.35,7.35,0,0,1,9.5,18.621l-5,1.666,1.666-5a7.35,7.35,0,0,1-.789-3.333A7.455,7.455,0,0,1,9.5,5.289,7.35,7.35,0,0,1,12.832,4.5h.439a7.437,7.437,0,0,1,7.017,7.017Z"
                            transform="translate(-3 0)"
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="3"
                          />
                        </svg>
                      </span>
                      <span className={classes.b_tag}>Make an Offer</span>
                    </div>
                  </Typography>
                ) : (
                  ""
                )}
              </>
            }
            action={
              <IconButton
                aria-label="add to favorites"
                className={classes.fav_icon}
              >
                <FavoriteBorderIcon
                  color="primary"
                  style={{
                    color: "grey",
                  }}
                />
              </IconButton>
            }
          />
          <CardMedia
            onClick={() => {
              window.location.href = "/products/Paella-dish";
            }}
            className={classes.cardMedia}
            image={Gun4}
            title="Paella dish"
          />
          <CardContent>
            <Typography
              className={classes.cardDescription}
              variant="body2"
              component="p"
            >
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your
            </Typography>
          </CardContent>
          {cardFooter}
        </Card>
      )}
    </>
  );
}
