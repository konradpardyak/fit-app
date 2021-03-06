import { Fab } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyle: {
    left: "50%",
    transform: "translateX(-50%)"
  }
});

const TrainingButton = (props) => {
  const {children} = props;
  const classes = useStyles();

  return (
    <Fab className={classes.buttonStyle} variant="extended" color="secondary" {...props}>
      {children}
    </Fab>
  )
}

export default TrainingButton;