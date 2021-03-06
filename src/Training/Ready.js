import { useEffect, useState } from 'react';

import TrainingHeader from './TrainingHeader';
import TimeProgress from './TimeProgress';
import TrainingButton from './TrainingButton';
import TrainingDescription from './TrainingDescription';

import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  containerStyle: {
    height: "100vh"
  }
});

const Ready = (props) => {
  const {setCurrent, todayTraining} = props;
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
    <Grid container className={classes.containerStyle} direction="column" justify="space-between">
      <Grid item>
        <TrainingHeader>Get ready!</TrainingHeader>
      </Grid>
      <Grid item>
        <TimeProgress counter={counter} value={Math.round(100- ((counter-1)/10)*100)} />
      </Grid>
      <Grid item>
        <TrainingButton onClick={handleSetCurrent}>Start</TrainingButton>
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <TrainingDescription name={name} reps={reps} desc={desc} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Ready;