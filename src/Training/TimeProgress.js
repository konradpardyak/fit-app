import { CircularProgress, Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  outerBox: {
    position: "relative",
    display: "inline-flex",
    left: "50%",
    transform: "translateX(-50%)"
  },
  innerBox: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position:"absolute",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  }
}));

const TimeProgress = (props) => {
  const {counter, value} = props;
  const classes = useStyles();
  return (
    <Box className={classes.outerBox}>
      <CircularProgress size={140} variant="determinate" value={value} />
      <Box className={classes.innerBox}>
        {counter && <Typography variant="h4" component="div">{`${counter-1}`}</Typography>}
      </Box>
    </Box>
  );
}

export default TimeProgress;