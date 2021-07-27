import React from "react";
import { ShowCaseListTemplate } from "../../templates";

export function ShowCase() {
  return (
    <React.Fragment>
      <ShowCaseListTemplate />
    </React.Fragment>
  );
}

// // import React from 'react'
// // import {Layout} from '../../atoms';
// import { Header } from "../../molecules";
// import { Grid, Typography } from "@material-ui/core";
// import CssBaseline from "@material-ui/core/CssBaseline";

// export function ShowCaseSingle() {
//   return (
//     <Layout>
//       <Header />
//       <CssBaseline />
//       <Grid xs={12} sm={6} lg={3} xl={2} item>
//         <Typography variant={"h2"}>ShowCase</Typography>
//       </Grid>
//     </Layout>
//   );
// }
