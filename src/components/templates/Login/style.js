import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
  root_login: {
    backgroundImage: "url(https://source.unsplash.com/random?gun)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  rootShadow: {
    background: "rgba(0,0,0,0.5)",
  },
  margin_login: {
    width: "50%",
    background: "transparent",
  },
  loginDailog: {
    height: "auto",
    padding: "5px",
    borderRadius: "40px",
    boxShadow: "15px 15px 10px rgba(0,0,0,0.6)",
    background: "rgba(202,181,128,1)",
    position: "relative",
  },
  avatarIcon: {
    color: "rgba(202,181,128,1)",
    height: theme.spacing(8),
    width: theme.spacing(8),
    background: "transparent",
  },
  paper_right: {
    width: "400px",
    background: "transparent",
    margin: "5% auto",
    "@media (max-width: 760px)": {
      width: "300px",
      margin: "20% auto",
    },
  },
  paper: {
    background: "transparent",
    margin: theme.spacing(3, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  avatar: {
    height: theme.spacing(12),
    width: theme.spacing(12),
    marginTop: theme.spacing(-5),
    margin: "0 auto",
    background: "rgb(253,250,242)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    color: "white",
  },
  submit: {
    margin: theme.spacing(5, "auto"),
    borderRadius: "50px !important",
    background: "white !important",
    color: "rgba(202,181,128,1) !important",
  },
  forgetMargin: {
    paddingTop: theme.spacing(1.4),
  },
  checkboxcolor: {
    color: "rgb(253,250,242) !important",
    borderColor: "rgb(253,250,242) !important",
    "&$checked": {
      borderColor: "rgb(253,250,242) !important",
      color: "rgb(253,250,242) !important",
    },
  },
  forgetColor: {
    color: "red",
  },
  center_signup: {
    textAlign: "center",
    margin: "10px auto",
  },
}));
