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
  }
});

const Break = (props) => {
  const {current, setDoBreak, todayTraining} = props;
  const {name, desc, reps} = todayTraining[current];
  const [counter, setCounter] = useState(31);
  const classes = useStyles();

  const handleSetCurrent = () => {
    setDoBreak(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
      handleSetCurrent();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <Grid container className={classes.containerStyle} direction="column" justify="space-between">
      <Grid item>
        <TrainingStepper waitingVariant={true} current={current} todayTraining={todayTraining}  />
      </Grid>
      <Grid item>
        <TrainingHeader>Break</TrainingHeader>
      </Grid>
      <Grid item>
        <TimeProgress counter={counter} value={Math.round(100 - ((counter-1)/30)*100)} />
      </Grid>
      <Grid item>
        <TrainingButton onClick={handleSetCurrent}>I'm ready</TrainingButton>
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <TrainingDescription name={name} reps={reps} desc={desc} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Break;