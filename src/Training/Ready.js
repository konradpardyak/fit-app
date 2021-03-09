import { useEffect, useState } from 'react';

import TrainingHeader from './TrainingHeader';
import TimeProgress from './TimeProgress';
import TrainingButton from './TrainingButton';
import TrainingDescription from './TrainingDescription';
import TrainingStepper from './TrainingStepper';

import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  containerStyle: {
    height: "100vh"
  },
  contentStyle: {
    height: "75vh",
    background: "linear-gradient(135deg, #f38181, #fce38a)"
  }
});

const Ready = (props) => {
  const { setCurrent, todayTraining} = props;
  const {name, desc, reps} = todayTraining[0];
  const [counter, setCounter] = useState(11);
  const classes = useStyles();

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
      handleSetCurrent();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  const handleSetCurrent = () => {
    setCurrent(0);
  }

  return (
    <Grid className={classes.containerStyle} container direction="column" justify="space-between">

      <Grid className={classes.contentStyle} item container direction="column" justify="space-around">
        <Grid item>
          <TrainingStepper waitingVariant={true} current={0} todayTraining={todayTraining} />
        </Grid>
        <Grid item>
          <TrainingHeader>Get ready!</TrainingHeader>
        </Grid>
        <Grid item>
          <TimeProgress counter={counter} value={Math.round(100- ((counter-1)/10)*100)} />
        </Grid>
        <Grid item>
          <TrainingButton onClick={handleSetCurrent}>Start</TrainingButton>
        </Grid>
      </Grid>
      <Grid item>
        <TrainingDescription name={name} reps={reps} desc={desc} />
      </Grid>

    </Grid>
  )
}

export default Ready;