import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/ducks/progress";

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

const Train = (props) => {
  const {current, setCurrent, setDoBreak, id, todayTraining} = props;
  const {name, desc, reps} = todayTraining[current];
  const [counter, setCounter] = useState(16);
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
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
      handleFinished();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <Grid container className={classes.containerStyle} direction="column" justify="space-between">
      <Grid item>
        <TrainingHeader>{name}</TrainingHeader>
      </Grid>
      <Grid item>
        <TimeProgress counter={counter} value={Math.round(100 - ((counter-1)/15)*100)} />
      </Grid>
      <Grid item>
        <TrainingButton onClick={handleFinished}>Skip</TrainingButton>
      </Grid>
      <Grid item container direction="row" justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <TrainingDescription name={name} reps={reps} desc={desc} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Train;