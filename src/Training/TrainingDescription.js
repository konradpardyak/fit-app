import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    padding: theme.spacing(2),
  }
}));

const TrainingDescription = (props) => {
  const { name, reps, desc } = props;
  const classes = useStyles();

  return (
    <Box className={classes.boxStyle}>
      <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5">
              {`x${reps}`}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="textSecondary" variant="body2">
          {desc}
        </Typography>
    </Box>
  );
}

export default TrainingDescription;