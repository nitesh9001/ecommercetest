import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#b79d5c",
    },
    black: {
      main: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#CAB580",
      contrastText: "#fff",
    },
    // error: {
    //   main: "red",
    // },
    // warning: {
    //   main: "yellow",
    // },
    // success: {
    //   main: "green",
    // },
  },
  // typography: {
  //   h1: {
  //     fontSize: 21,
  //   },
  //   h2: {
  //     fontSize: 40,
  //   },
  //   h3: {
  //     fontSize: 30,
  //   },
  //   h4: {
  //     fontSize: 20,
  //   },
  //   h5: {
  //     fontSize: 25,
  //   },
  //   h6: {
  //     fontSize: 18,
  //   },
  //   subtitle1: {
  //     fontSize: 15,
  //   },
  //   subtitle2: {
  //     fontSize: 15,
  //   },
  //   body1: {
  //     fontSize: 16,
  //   },
  //   // body2: {
  //   //   fontSize: 70,
  //   // },
  //   // caption: {
  //   //   fontSize: 70,
  //   // },
  //   // overline: {
  //   //   fontSize: 70,
  //   // },
  //   // button: {},
  // },
  overrides: {
    //text field
    MuiTextField: {
      root: {
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "rgb(253,250,242)",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "rgb(253,250,242)",
            color: "white",
          },
          "&:hover fieldset": {
            borderColor: "rgb(253,250,242)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "rgb(253,250,242)",
          },
        },
      },
      //checkbox
      MuiCheckbox: {
        colorSecondary: {
          color: "rgb(253,250,242)",
          borderColor: "rgb(253,250,242)",
          "&$checked": {
            borderColor: "rgb(253,250,242)",
            color: "rgb(253,250,242)",
          },
        },
      },
    },
  },
  MuiButton: {
    root: {
      borderRadius: 10,
    },
  },
  MuiTypography: {
    button: {
      color: "#3B3B3B",
      textShadow: "0px 3px 6px #00000029",
    },
  },
});

export default theme = responsiveFontSizes(theme);
