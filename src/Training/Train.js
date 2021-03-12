import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/ducks/progress";

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

const Train = (props) => {
  const {current, setCurrent, setDoBreak, id, todayTraining} = props;
  const {name, desc, reps, repeatMode, duration} = todayTraining[current];
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  let history = useHistory();
  const classes = useStyles();

  const handleSetProgress = () => {
    dispatch(setProgress(id));
  }

  const handleFinished = () => {
    console.log(current);
    if(current < todayTraining.length-1) {
      setCurrent(current + 1);
      setDoBreak(true);
    } else {
      handleSetProgress();
      history.push(`/`);
    }
  }

  useEffect(() => {
    setTimeout(() => setCounter(1), 100);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter + 1), (duration*1000));
    if(counter > reps){
      handleFinished();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <Grid container className={classes.containerStyle} direction="column" justify="space-between">

      <Grid className={classes.contentStyle} item container direction="column" justify="space-around">
        <Grid item>
          <TrainingStepper waitingVariant={false} current={current} todayTraining={todayTraining} />
        </Grid>
       <Grid item>
          <TrainingHeader>{name}</TrainingHeader>
        </Grid>
        <Grid item>
          <TimeProgress counter={ counter > 0 ? counter : "1" } value={Math.round(((counter*duration)/(reps*duration))*100)} />
        </Grid>
       <Grid item>
         <TrainingButton onClick={handleFinished}>Skip</TrainingButton>
        </Grid>
      </Grid>

      <Grid item>
        <TrainingDescription name={name} reps={reps} desc={desc} repeatMode={repeatMode} />
      </Grid>

    </Grid>
  )
}

export default Train;