import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    minHeight: "25vh",
    borderRadius: "1rem",
    background: "#fff",
    opacity: ".8",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    marginBottom: "0"
  }
}));

const TrainingDescription = (props) => {
  const { name, reps, desc, repeatMode } = props;
  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row" justify="center">
      <Grid item xs={12} sm={10} md={6}>
        <Box className={classes.boxStyle}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h5">{name}</Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5">{ repeatMode ? `x${reps} ` : `${reps} seconds`}</Typography>
            </Grid>
          </Grid>
          <Typography color="textSecondary" variant="body2">{desc}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TrainingDescription;
