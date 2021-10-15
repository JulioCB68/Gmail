import React from 'react';
import TopBar from '../TopBar';
import SidePanel from '../SidePanel';
import MainBar from '../MainBar';

import { Grid } from './styles';

function Layout() {
  return (
    <Grid>
      <TopBar />
      <MainBar />
      <SidePanel />
    </Grid>
  );
};

export default Layout;