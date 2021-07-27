import React from "react";
import { DashboardTemplate } from "../../templates";

export function Dashboard() {
  return (
    <React.Fragment>
      <DashboardTemplate />
    </React.Fragment>
  );
}

// import React from 'react'
// import {Layout} from '../../atoms';
// import { Header} from '../../molecules'
// import {Grid, Typography} from '@material-ui/core'
// import CssBaseline from '@material-ui/core/CssBaseline';

// export  function Dashboard() {
//     return (
//         <Layout>
//             <Header/>
//             <CssBaseline/>
//             <Grid xs={12} sm={6} lg={3} xl={2} item>
//             <Typography variant={"h2"}>Dashboard</Typography>
//             </Grid>
//         </Layout>
//     )
// }
