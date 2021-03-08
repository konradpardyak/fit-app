import { Stepper, Step, StepLabel } from '@material-ui/core';

const TrainingStepper = (props) => {
  const { waitingVariant, current, todayTraining} = props;
  return (
    <Stepper activeStep={current}>
      {todayTraining.map((exercise) => (
        <Step key={exercise.name}>
          {waitingVariant ? <StepLabel active={false}></StepLabel> : <StepLabel></StepLabel> }
        </Step>
      ))}
    </Stepper>
  )
}

export default TrainingStepper;