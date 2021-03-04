import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

import DayContent from './DayContent';

import { Grid, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerStyle: {
    flex: 1
  }
});

const Day = () => {
  const {id} = useParams();
  let history = useHistory();
  const classes = useStyles();
  
  return (
    <Grid container direction="column">
      <Grid item>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.headerStyle}>Training - Day {id}</Typography>
            <IconButton aria-label="go-back" color="inherit" onClick={() => history.goBack()}>
              <ArrowBackIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={12} sm={6}>
          <DayContent />
        </Grid>
      </Grid>
      
      <div onClick={() => history.push(`/training/${id}`)}>
        Start Training
      </div>
    </Grid>
  );
}

export default Day;