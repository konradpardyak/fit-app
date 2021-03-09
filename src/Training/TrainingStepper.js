import { Stepper, Step, StepLabel, StepConnector, StepIcon  } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    background: "rgba(0,0,0,0)"
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: 'red',
    borderRadius: 0,
  }
});

const StyledConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 10,
  },
  active: {
    "& $line": {
      borderColor: theme.palette.success.light
    }
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.success.light
    }
  },
  line: {
    borderColor: theme.palette.secondary.main,
    borderTopWidth: 3,
    borderRadius: 1,
    marginLeft: "-8px"
  }
}))(StepConnector);

const StyledStepIcon = withStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    "&$completed": {
      color: theme.palette.success.light
    },
    "&$active": {
      color: theme.palette.success.light
    }
  },
  active: {
    color: theme.palette.success.light
  },
  completed: {
    zIndex: 1
  },
  iconContainer: {
    padding: 0
  }
}))(StepIcon);

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