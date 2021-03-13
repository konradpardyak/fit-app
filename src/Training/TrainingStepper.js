import { Stepper, Step, StepLabel, StepConnector, StepIcon, Typography  } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    background: "rgba(0,0,0,0)"
  }
});

const StyledConnector = withStyles((theme) => ({
  active: {
    "& $line": {
      borderColor: theme.palette.success.main
    }
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.success.main
    }
  },
  line: {
    borderColor: theme.palette.secondary.main,
    borderTopWidth: 3,
    borderRadius: 0,
    marginLeft: "-18px",
    marginRight: "-10px"
  }
}))(StepConnector);

const useStyledStepIconStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    padding: 0
  },
  active: {
    color: theme.palette.success.main
  },
  circle: {
    width: 16,
    height: 16,
    margin: 2,
    borderRadius: "50%",
    border: "2px solid",
    borderColor: "currentColor",
    backgroundColor: "rgba(0,0,0,0)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
  },
  text: {
    color: "currentColor",
    position:"absolute",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold"
  },
  completed: {
    color: theme.palette.success.main,
    zIndex: 1,
    width: 24,
    height: 24,
  }
}));

const StyledStepIcon = (props) => {
  const classes = useStyledStepIconStyles();
  const { active, completed, icon } = props;

  console.log(props);

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <CheckCircleOutlineIcon className={classes.completed} />
      ) : (
        <div className={classes.circle}>
          <Typography className={classes.text}>{icon}</Typography>
        </div>
      )}
    </div>
  );
}

const TrainingStepper = (props) => {
  const { waitingVariant, current, todayTraining} = props;
  const classes = useStyles();
  return (
    <Stepper className={classes.root} activeStep={current} connector={<StyledConnector />}>
      {todayTraining.map((exercise) => (
        <Step key={exercise.name}>
          {waitingVariant ? <StepLabel active={false} StepIconComponent={StyledStepIcon}></StepLabel> : <StepLabel StepIconComponent={StyledStepIcon}></StepLabel> }
        </Step>
      ))}
    </Stepper>
  )
}

export default TrainingStepper;