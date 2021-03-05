import { useSelector } from 'react-redux';

import DayCard from './DayCard';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contentStyle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(9)
  }
}));

const MenuContent = () => {
  const plan = useSelector((state) => state.plan.plan);
  const progress = useSelector((state) => state.progress.progress);
  const classes = useStyles();

  return (
    <Grid container className={classes.contentStyle} direction="column" justify="space-evenly" spacing={2}>
      {plan.days.map((day) => (
        <Grid item key={day.dayId}>
          <DayCard id={day.dayId} isFinished={day.dayId <= progress} key={day.dayId} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MenuContent;