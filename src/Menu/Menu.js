import Header from './Header';
import MenuContent from './MenuContent';

import { Grid, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  upButtonStyle: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: "linear-gradient(135deg, #f54ea2, #ff7676)"
  }
}));

const Menu = () => {
  const classes = useStyles();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <MenuContent />
        </Grid>
      </Grid>
      <Fab color="primary" size="medium" className={classes.upButtonStyle} onClick={handleClick}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Grid>
  );
}

export default Menu;