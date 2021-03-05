import { useDispatch } from "react-redux";
import { setProgress } from "../redux/ducks/progress";
import { useHistory } from 'react-router-dom';

import { Grid, AppBar, Toolbar, Typography, IconButton, List, ListSubheader, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerStyle: {
    flex: 1
  }
});

const Settings = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSetProgress = () => {
    dispatch(setProgress(0));
  }
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.headerStyle}>Fit App</Typography>
            <IconButton aria-label="go-back" color="inherit" onClick={() => history.goBack()}>
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={12} md={10} lg={6}>
          <List subheader={<ListSubheader>Settings</ListSubheader>}>
            <ListItem button onClick={handleSetProgress}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete progress" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Settings;