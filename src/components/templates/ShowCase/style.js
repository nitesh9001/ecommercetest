import { makeStyles, fade } from "@material-ui/core/styles";
import { Ad, G3, Gun } from "../../../assets";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 0px !important",
    margin: "0 auto",
  },
  root_slider: {
    width: "98%",
    margin: "0 auto",
    marginBottom: "70px",
    "@media (max-width: 1090px)": {
      width: "100%",
      margin: "0 auto",
      marginLeft: "-10px",
    },
  },
  leftslider: {
    width: "55%",
    display: "flex",
    flexDirection: "row",
    height: "500px",
    "@media (max-width: 1496px)": {
      width: "50%",
      margin: "0 auto",
    },
    "@media (max-width: 1000px)": {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
    },
  },
  btn_slider_changer_prev: {
    background: "#CAB580",
    padding: "15px 3px",
    outline: "none",
    border: "none",
    position: "absolute",
    cursor: "pointer",
    left: "0px",
    zIndex: "10",
    top: "150px",
    boxShadow: "1px 4px 6px grey",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    "@media (max-width: 1456px)": {
      top: "120px",
    },
    "@media (max-width: 590px)": {
      top: "100px",
      padding: "10px 2px",
    },
  },
  btn_slider_changer_nect: {
    background: "#CAB580",
    padding: "15px 3px",
    outline: "none",
    border: "none",
    position: "absolute",
    right: "0px",
    cursor: "pointer",
    top: "150px",
    zIndex: "10",
    boxShadow: "-1px 2px 6px grey",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    "@media (max-width: 1456px)": {
      top: "120px",
    },
    "@media (max-width: 590px)": {
      top: "100px",
      padding: "10px 2px",
    },
  },
  likeicon: {
    marginLeft: "-50px",
    marginTop: "10px",
    zIndex: 4,
    cursor: "pointer",
    "&hover": {
      color: "red",
      background: "red",
    },
  },
  divider: {
    width: "80%",
    margin: "0 auto",
    paddingTop: "1px",
    background: "grey",
  },
  btn_slider_changer: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  img_slider_size: {
    width: "350px",
    height: "350px",
    margin: "0 auto",
    "@media (max-width: 1456px)": {
      width: "250px",
      height: "300px",
      margin: "0 auto",
    },
  },
  styling_carosul: {
    height: "360px",
    boxShadow: "2px 5px 8px grey",
    borderRadius: "15px",
    border: "1px solid #E1E1E1",
    "@media (max-width: 1456px)": {
      height: "300px",
    },
    "@media (max-width: 590px)": {
      height: "250px",
    },
  },
  right_custom: {
    width: "45%",
    height: "auto",
    "@media (max-width: 1456px)": {
      width: "40%",
    },
    "@media (max-width: 1000px)": {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      marginLeft: "10px",
      justifyContent: "center",
    },
    "@media (max-width: 786px)": {
      width: "95%",
      margin: "0 auto",
      display: "flex",
      marginLeft: "25px",
      justifyContent: "center",
    },
  },
  typo_heading_title: {
    fontWeight: "bold",
    letterSpacing: ".1px",
    wordSpacing: "4px",
    // fontSize: "18px",
  },
  typo_heading_note: {
    marginTop: "50px",
  },
  typo_heading_not: {
    paddingTop: "10px",
    position: "relative",
  },
  typo_heading_seller_flex: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typo_heading_seller_c: {
    fontSize: "14px",
  },
  typo_heading_views: {
    fontSize: "14px",
    margin: "10px auto",
    position: "relative",
  },
  btn_bit_value_flex: {
    display: "flex",
    flexDirection: "row",
    margin: "20px auto",
    justifyContent: "flex-start",
  },
  btn_bit_value: {
    display: "block",
    marginRight: "30px",
    boxShadow: "2px 3px 6px rgba(0,0,0,.36)",
    fontSize: "15px",
    textTransform: "capitalize",
    padding: "4px 10px !important",
    borderRadius: "15px",
  },
  btn_bit_submit: {
    padding: "5px 25px !important",
    margin: "10px",
    width: "100px !important",
  },
  input_bid_submit_flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input_bid_submit: {
    color: "grey",
    height: "30px",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,.26)",
    margin: "10px 15px 0px 1px",
    padding: "6px !important",
    fontSize: "15px",
    outline: "none",
    width: "60% !important",
    "&:hover": {
      border: "none",
    },
    "&::placeholder": {
      color: "grey",
    },
  },
  inputFocused: {
    border: "2px solid #CAB580",
  },
  typo_heading_rating: {
    paddingTop: "10px",
    position: "relative",
  },
  typo_heading_assure: {
    paddingTop: "10px",
    marginTop: "10px",
    position: "relative",
  },
  right_flex_button: {
    float: "right",
    marginTop: "4px",
  },
  paper_productdet: {
    width: "86%",
    margin: "0 auto",
    borderRadius: "15px",
    border: "1.5px solid #CAB580",
    "@media (max-width: 500px)": {
      marginLeft: "35px",
    },
  },
  dividercustom: {
    height: "20px",
  },
  flexslider: {
    width: "86%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    marginTop: "40px",
    marginBottom: "70px",
    justifyContent: "space-between",
    "@media (max-width: 1456px)": {
      width: "94%",
    },
    "@media (max-width: 1090px)": {
      width: "100%",
    },
    "@media (max-width: 1000px)": {
      width: "94%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  product_det_flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "1",
    flexGrow: "1.5",
    justifyContent: "center",
    padding: "10px",
  },
  product_det_icon: {
    padding: "1px",
    fontSize: "30px",
    fontWeight: "bold",
  },
  product_det_text: {
    padding: "0 10px",
    fontWeight: "700",
  },
  product_det_flex_center: {
    width: "70%",
    textAlgin: "center",
    dispaly: "flex",
    margin: "0 auto",
  },
  list_text_flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "1",
    flexGrow: "1.5",
    justifyContent: "flex-start",
    "@media (max-width: 500px)": {
      display: "block",
    },
  },
  list_text_icon: {
    width: "30%",
  },

  root_inner: {
    width: "90%",
    margin: "0 auto",
    "@media (max-width: 1024px)": {
      justifyContent: "space-around",
      margin: "0 -90px",
    },
  },
  root_flex: {
    width: "80%",
    margin: "0 auto",
    "@media (min-width: 1900px)": {
      // marginTop: "100px !important",
      width: "60%",
      margin: "0 auto",
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  logo: {
    textAlign: "center",
  },
  logoText: {
    // paddingLeft: 100,
    whiteSpace: "nowrap",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    color: " #434343",
    opacity: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "@media (max-width: 1000px)": {
      padding: "6px 5px",
    },
  },

  root_menuheader: {
    margin: "15px auto",
    "@media (max-width: 1150px)": {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  topHeaderRoot: {
    backgroundColor: "#5A5A5A",
    height: 50,
  },
  topHeaderText: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#e4e4e4",
    opacity: 1,
    "@media (max-width: 6000px)": {
      fontSize: "13px",
      // marginLeft: "-15px",
    },
  },
  regsiter_btn_border: {
    "@media (max-width: 1000px)": {
      margin: "10px auto",
      width: "50%",
    },
    "@media (max-width: 560px)": {
      margin: "10px auto",
      width: "80%",
    },
    "@media (max-width: 375px)": {
      margin: "20px 10%",
      width: "100%",
    },
  },
  search_btn: {
    "@media (max-width: 1000px)": {
      margin: "10px auto",
      width: "100%",
    },
  },
  searchBox: {
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    background: "#ffffff",
    boxShadow: "3px 3px 6px #00000029",
    border: "1px solid #DEDEDE",
    opacity: 1,
    "@media (max-width: 1000px)": {
      margin: "20px auto",
      width: "380px",
    },
    "@media (max-width: 450px)": {
      margin: "20px auto",
      width: "280px",
    },
    "@media (max-width: 375px)": {
      margin: "20px auto",
      width: "100%",
    },
  },

  search_btn_in: {
    borderRadius: "8px",

    "@media (max-width: 1000px)": {
      margin: "0px auto",
      // marginLeft: "-15px",
    },
    "@media (max-width: 375px)": {
      width: "100%",
    },
  },

  selectCategories: {
    borderLeft: "1px solid #DEDEDE",
    textAlign: "center",
  },
  btnBrowseCategories: {
    // marginLeft: 110,
    boxShadow: "3px 3px 6px #00000029",
    border: "1px solid #B5B5B5",
    opacity: 1,
    color: "#3B3B3B",
    marginLeft: 55,
    "@media (max-width: 1000px)": {
      margin: "0px 30px",
      width: "300px",
    },
    "@media (max-width: 375px)": {
      margin: "10px 0%",
      marginLeft: "-10px !important",
    },
  },
  navigationMenu: {
    justifyContent: "flex-end",
    marginLeft: "95px !important",
    color: "black",
    fontWeight: "bold",
    "@media (max-width: 1000px)": {
      // margin: "0px -120px",
      width: "300px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      marginLeft: "9px !important",
    },
    "@media (max-width: 375px)": {
      margin: "10px 0%",
      marginLeft: "-20px !important",
    },
  },
  btnSignup: {
    background: "#5A5A5A 0% 0% no-repeat padding-box",
    boxShadow: "10px 6px 6px #00000029",
    color: "#E2E2E2 !important",
    border: ".5px solid #707070",
    borderRadius: 38,
    opacity: 1,
    "& .MuiTypography-button": {
      color: "#E2E2E2 !important",
    },
    "@media (max-width: 1000px)": {
      margin: "10px 10%",
      width: "80%",
    },
    "@media (max-width: 560px)": {
      margin: "10px 0%",
      width: "200px",
    },
  },
  iconMenu: {
    marginLeft: 5,
  },
  activeLink: {
    borderBottom: "2px solid #b79d5c",
  },
  btnMenuLink: {
    fontFamily: "Poppins",
    // font: 'bold',
    color: "black",
    textDecoration: "none",
    "&:hover": {
      borderBottom: "2px solid #b79d5c",
    },
  },
  adImage: {
    backgroundImage: `url(${Ad})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 400,
    width: "100%",
    justifyContent: "center",
    letterSpacing: 0,
    color: "#FFFFFF",
    opacity: 1,
    fontFamily: "Poppins",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px !important",
    margin: "0 auto",
    "& .txt1": {
      marginBottom: 5,
      textAlign: "center",
    },
    "& .txt2": {
      marginBottom: 80,
      textAlign: "center",
    },
    "& .txt3": {
      marginBottom: 75,
      textAlign: "center",
    },
    "@media (max-width: 1000px)": {
      marginTop: "100px !important",
    },
  },
  root_maintop: {
    "@media (max-width: 1000px)": {
      margin: "20px auto",
      width: "90%",
      display: "block",
    },
  },
  root_header: {
    justifyContent: "space-between",
    margin: "20px auto !important",
    width: "100%",
    "@media (max-width: 375px)": {
      margin: "20px auto",
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
    },
  },
  root_featured: {
    background: "#F6F6F6",
    padding: "40px 0",
  },
  listTitle: {
    marginLeft: "20px",
    "@media (max-width: 375px)": {
      width: "100%",
      marginLeft: "0px",
    },
  },
  listTitle_h: {
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  cardBid_icon: {
    width: "14px",
    marginTop: "-5px",
  },
  root_flex_slider: {
    margin: "40px auto",
    "@media (max-width: 1000px)": {
      zoom: 0.5,
    },
  },
  listTitleCenter: {
    margin: "0 auto",
  },
  listViewAll: {
    marginRight: "20px !important",
    "@media (max-width: 375px)": {
      marginRight: "0px",
    },
  },
  cardGrid: {
    width: "300px",
    position: "relative",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    "@media (min-width: 1800px)": {
      // marginTop: "100px !important",
      width: "400px",
      margin: "0 auto",
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 30,
    },
  },
  cardGridSlider: {
    width: "350px",
    position: "relative",
    margin: "10px",
  },
  button: {
    height: "25px",
    borderRadius: "5px",
    boxShadow: "4px 2px 6px #0000003E",
  },
  btn_shadow: {
    boxShadow: "4px 2px 6px #0000003E",
  },
  card: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "4px 4px 10px #0000002E",
    border: "1px solid #E1E1E1",
    borderRadius: "20px",
    opacity: 1,
    cursor: "pointer",
    position: "relative",
  },
  tag_card: {
    background: "#3359F2",
    position: "absolute",
    top: "0px",
    left: "0px",
    padding: "10px 15px",
    borderTopLeftRadius: "10px",
    borderBottomRightRadius: "20px",
  },
  fav_icon: {
    background: "white",
    padding: "5px",
    borderRadius: "50%",
    boxShadow: "1px 2px 5px grey",
    border: "1px solid #C8C8C8",
  },
  b_tag: {
    color: "white",
    margin: "4px",
    fontWeight: "bold",
  },
  cardMedia: {
    height: 0,
    paddingTop: "50.25%",
  },
  cardDescription: {
    textAlign: "left",
    // font: 'normal normal normal 16px/25px Poppins',
    letterSpacing: 0,
    color: "#434343",
    opacity: 1,
  },
  cardFooterLine: {
    marginBottom: 0,
  },
  cardFooter: {
    marginBottom: 10,
  },
  cardPrice: {
    textAlign: "left",
    // font: 'normal normal normal 16px/25px Poppins',
    letterSpacing: 0,
    color: "#434343",
    opacity: 1,
  },
  cardBid: {
    marginLeft: 10,
  },
  cardBid_right: {
    marginRight: 15,
    fontSize: "11px",
    display: "flex",
  },
  margin_color_btn: {
    border: "2px solid #b79d5c",
    marginRight: "5px",
    padding: "2px",
    width: "15px",
    height: "15px",
    borderRadius: "4px",
  },
  margin_color: {
    marginLeft: "15px",
  },
  partnersBox: {
    maxWidth: "82%",
    margin: "40px auto",
    opacity: 1,
  },
  partnerCards: {
    marginTop: 12,
    marginBottom: 12,
    maxWidth: "100%",
    margin: "0 auto",
  },
  partnerCard: {
    borderRadius: 18,
    background: "white",
    opacity: 1,
    maxWidth: "20%",
    minWidth: "20%",
  },
  partnerCardTitle: {
    textAlign: "center",
    letterSpacing: 0,
    color: "#3B3B3B",
    textShadow: "10px 3px 6px #00000029",
    opacity: 1,
    marginTop: 12,
    marginBottom: 12,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  aboutImage: {
    backgroundImage: `url(${G3})`,
    backgroundRepeat: "no-repeat",
    height: 500,
    width: "99%",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPositon: "center",
    opacity: 1,
    "@media (max-width: 600px)": {
      height: 600,
    },
    // letterSpacing: 0,
    // color: '#FFFFFF',
    // opacity: 1,
    // fontFamily: 'Poppins',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // "& .txt1": {
    //     marginBottom: 5,
    // },
    // "& .txt2": {
    //     marginBottom: 80,
    // },
    // "& .txt3": {
    //     marginBottom: 75,
    // },
    // //  "& .MuiButton-root":{
    // //     marginBottom: 75,
    // //  },
  },
  aboutImage_content: {
    height: "100%",
    width: "98%",
    display: "flex",
    verticleAlign: "middle",
    marign: "10px auto",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    "@media (max-width: 600px)": {
      justifyContent: "center",
    },
  },
  aboutImage_paper: {
    width: "400px",
    borderRadius: "18px",
    position: "absolute",
    background: "rgba(255,255,255,.5)",
    top: "10%",
    right: "10%",
    textAlgin: "center",
    padding: "40px",
    "@media (max-width: 600px)": {
      top: "5%",
      right: "0%",
      padding: "20px",
      position: "relative",
      width: "350px",
    },
  },
  aboutImage_paper_typotext: {
    margin: "10px auto",
  },
  aboutImage_paper_typo: {
    textAlgin: "center",
    width: "50%",
    dispaly: "flex",
    justifyContent: "center",
    margin: "10px auto",
    padding: "20px auto",
    "@media (max-width: 600px)": {
      width: "80%",
      margin: "20px auto",
    },
  },
  aboutImage_paper_button: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "10px auto",
  },
  div_background_footer_nav: {
    marginTop: "40px",
    width: "99.5%",
    margin: "0 auto",
    height: "450px",
    "@media (max-width: 1024px)": {
      width: "80%",
      height: "auto",
      paddingBottom: "10px",
    },
    "@media (max-width: 515px)": {
      height: "1300px",
      width: "99.5%",
    },
  },

  center_grid_nav: {
    width: "80%",
    padding: "40px 40px 10px 40px",
    margin: "0px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 1024px)": {
      width: "100%",
      margin: "0 auto",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "40px 0px 0px 0px",
      margin: "0 auto",
    },
    // "@media (max-width: 515px)": {
    //   display: "block",
    //   height: "1300px",
    //   textAlign: "center",
    //   margin: "0 -15px",
    //   width: "100%",
    //   justifyContent: "flex-start",
    //   padding: "30px 0px 10px 0px",
    // },
  },
  div_background_footer: {
    position: "relative",
    backgroundImage: `url(${Gun})`,
    marginTop: "40px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // padding: "30px",
    width: "99.5%",
    margin: "0 auto",
    height: "450px",
    "@media (max-width: 768px)": {
      height: "780px",
      width: "99.5%",
    },
    "@media (max-width: 515px)": {
      height: "1300px",
      width: "99.5%",
    },
  },
  bg_icon_socail_c: {
    width: "55px",
    margin: "5px",
    borderRadius: "50%",
    cursor: "pointer",
    "@media (max-width: 1024px)": {
      width: "40px",
      margin: "2px",
    },
    "@media (max-width: 786px)": {
      width: "35px",
      margin: "1px",
    },
  },
  bg_icon_socail: {
    backgroundColor: "black",
    width: "15px",
    padding: "8px",
    margin: "5px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  socail_icon: {
    display: "flex",
    flexDirection: "row",
  },
  socail_icon_list: {
    width: "100%",
    margin: "0 auto",
  },

  center_grid: {
    backgroundColor: "rgba(255,255,255,0.5)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  img_hover_opcatiy: {
    width: "80%",
    padding: "40px 40px 10px 40px",
    margin: "0px auto",
    "@media (max-width: 1020px)": {
      width: "98%",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      display: "flex",
      height: "800px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "40px 0px 0px 0px",
      margin: "0 -15px",
    },
    "@media (max-width: 515px)": {
      display: "block",
      height: "1300px",
      textAlign: "center",
      margin: "0 -15px",
      width: "100%",
      justifyContent: "flex-start",
      padding: "30px 0px 10px 0px",
    },
  },
  gridCardFooter4: {
    height: "100px",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },

  gridCardFooter8_hide: {
    display: "none",
    height: "100px",
    "@media (max-width: 768px)": {
      display: "flex",
      margin: "-150px auto",
      width: "100%",
      padding: "0 12%",
      justifyContent: "center",
    },
  },
  gridCardFooter8: {
    height: "100px",
    "@media (max-width: 768px)": {
      width: "100%",
      margin: "0 auto",
      justifyContent: "center",
      display: "none",
    },
  },
  gridCardFooter_nav: {
    width: "350px",
    "@media (max-width: 768px)": {
      width: "200px",
      margin: "15px auto",
      justifyContent: "center",
    },
  },
  gridCardFooter: {
    height: "300px",
    "@media (max-width: 768px)": {
      height: "320px",
      width: "800px !important",
      display: "flex",
      whiteSpace: "wrap",
      margin: "20px auto",
    },
    "@media (max-width: 515px)": {
      height: "260px",
      display: "flex",
      whiteSpace: "wrap",
      margin: "10px 30%",
    },
  },
  paperCardFooter: {
    height: "100%",
    fontFamily: "poppins",
    backgroundColor: "transparent",
    boxShadow: "0",
    "@media (max-width: 768px)": {
      width: "600px !important",
    },
  },
  paperCardFooter_nav: {
    height: "50%",
    width: "80%",
    textAlgin: "center",
    margin: "20% auto",
    fontFamily: "poppins",
    backgroundColor: "transparent",
    boxShadow: "0",
    "@media (max-width: 768px)": {
      // width: "20px !important",
    },
  },
  typo_footer_normal: {
    fontFamily: "poppins",
    marginLeft: "15px",
    "@media (max-width: 700px)": {
      width: "300px !important",
      textAlign: "center",
      margin: "30px auto",
      marginBottom: "30px",
    },
  },
  link_root: {
    fontFamily: "poppins",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "blue",
    },
  },
  listclass_nav: {
    margin: "0px",
    padding: "0px",
    fontSize: "14px",
  },
  typo_footer_nav: {
    marginLeft: "0px",
    fontWeight: "bold",
    textAlign: "left",
    "@media (max-width: 786px)": {
      textAlign: "center",
      margin: "0 auto",
    },
  },
  typo_footer: {
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "poppins",
    marginLeft: "15px",
    "@media (max-width: 515px)": {
      width: "200px !important",
      textAlign: "center",
      margin: "0 auto",
      marginLeft: "1px",
    },
  },

  ///////.......................Table Heading .................//////////////////
  root_innerflex: {
    display: "flex",
    flexDirection: "row",
    // "@media (max-width: 5000px)": {
    //   margin: "20px auto",
    //   width: "98%",
    //   flexDirection: "column",
    //   justifyContent: "center",
    // },
  },
  selectSorting: {
    position: "relative",
  },
  root_in_table: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
  searchBox_sort: {
    borderRadius: 7,
    display: "flex",
    margin: "0px 10px",
    flexDirection: "row",
    background: "transparent",
    cursor: "pointer",
    // padding: "0px 10px"
    paddingLeft: "5px",
    boxShadow: "3px 3px 6px #00000029",
    border: "1px solid #DEDEDE",
    opacity: 1,
    "@media (max-width: 1000px)": {
      margin: "20px auto",
      // width: "380px",
    },
    "@media (max-width: 450px)": {
      margin: "20px auto",
      width: "280px",
    },
    "@media (max-width: 375px)": {
      marginLeft: "0px",
      width: "96%",
    },
    "@media (max-width: 768px)": {
      width: "400px",
    },
    "@media (max-width: 455px)": {
      width: "300px",
    },
  },
  selectCustom: {
    width: "300px",
    cursor: "pointer",
    color: "grey",
    "@media (max-width: 768px)": {
      width: "400px",
    },
    "@media (max-width: 455px)": {
      width: "300px",
    },
  },
  search_btn_in_arrow: {
    fontSiZe: "25px",
    zIndex: "-1",
    position: "absolute",
    right: "0px",
    cursor: "pointer",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
  },
  lisitng_style: {
    fontSize: "15px",
    paddingRight: "10px",
  },
  headingTbale: {
    margin: "15px 0",
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  search_btn_in_style: {},
  search_btn_in_list: {
    marginRight: "10px",
    borderRadius: "8px",
  },
  navlink_pageination: {
    textDecoration: "none",
    margin: "auto 5px",
    "@media (max-width: 1024px)": {
      margin: "auto 3px",
    },
    "@media (max-width: 625px)": {
      margin: "3px 3px",
    },
  },
  navlink_paper: {
    // padding: "10px 15px",
    textAlgin: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "35px",
    height: "35px",
    background: "white",
    borderRadius: "10px",
    color: "black",
    "&:hover": {
      background: "#b79d5c",
      color: "white",
      borderRadius: "10px",
      boxShadow: "2px 2px 10px rgba(0,0,0,.4)",
    },
    "@media (max-width: 1024px)": {
      width: "20px",
      height: "20px",
      borderRadius: "5px",
      fontSize: "11px",
    },
  },
  active_page: {
    background: "#b79d5c",
    color: "white",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,.4)",
  },
  count_page: {
    margin: "0 auto",
    width: "60%",
    "@media (max-width: 624px)": {
      width: "100%",
    },
  },
  root_inner_pagination: {
    border: "1px solid #CAB580",
    height: "100px",
    display: "flex",
    flexDirection: "row",
    margin: "60px auto",
    padding: "0 25px 0 25px",
    justifyContent: "space-around",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
    borderRadius: "20px",
    alignItems: "center",
    color: "#787878",
    width: "90%",
    "@media (max-width: 624px)": {
      flexDirection: "column",
      justifyContent: "center",
      padding: "30px",
      paddingBottom: "40px",
      gridGap: "15px",
    },
  },
}));
