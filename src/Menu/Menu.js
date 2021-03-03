import Header from './Header';
import MenuContent from './MenuContent';

import { Grid } from '@material-ui/core';

const Menu = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={10} sm={6}>
          <MenuContent />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Menu;