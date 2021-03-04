import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import TrainingCard from './TrainingCard';

import { Grid, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contentStyle: {
    padding: "8px 0 8px 0"
  }
});

const DayContent = () => {
  const {id} = useParams();
  const plan = useSelector((state) => state.plan.plan);
  const classes = useStyles();

  return (
    <Grid container className={classes.contentStyle} direction="column">
      <List>
        {plan.days[id-1].todayPlan.map((exercise) => {
          const foundExercise = plan.exercisesList.find((searched) => (searched.exId === exercise.exId));
          return <TrainingCard name={foundExercise.name} desc={foundExercise.desc} reps={exercise.reps} key={exercise.exId} />
        })}
      </List>
    </Grid>
  )
}

export default DayContent;