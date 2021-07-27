import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { adminRoutes, routes, userRoutes, commomRoutes } from "./routes";
import { useSelector } from "react-redux";
import theme from "./utils/theme";
import { ThemeProvider } from "@material-ui/core/styles";
const RenderRoutes = () => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const loginMode = useSelector((state) => state.auth.loginMode);

  if (token) {
    return (
      <Router>
        {commomRoutes.map((x, i) => (
          <Route
            key={i}
            path={x.path}
            exact={x.exact}
            component={x.component}
          />
        ))}
      </Router>
    );
  } else {
    return (
      <Router>
        {routes.map((x, i) => (
          <Route
            key={i}
            path={x.path}
            exact={x.exact}
            component={x.component}
          />
        ))}
      </Router>
    );
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RenderRoutes />
    </ThemeProvider>
  );
}

export default App;
