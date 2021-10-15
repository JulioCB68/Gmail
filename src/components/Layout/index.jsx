import React from 'react';
import TopBar from '../TopBar';
import MainBar from '../MainBar';

import { Grid } from './styles';

function Layout() {
  return (
    <Grid>
      <TopBar />
      <MainBar />
    </Grid>
  );
};

export default Layout;