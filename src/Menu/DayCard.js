import { useHistory } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonStyle: props => {
    return {
      color: props.isFinished && "red"
    }
  }
});

const DayCard = (props) => {
  const {id} = props;
  let history = useHistory();
  const classes = useStyles(props);
  return (
    <Button className={classes.buttonStyle} variant="outlined" color="default" fullWidth onClick={() => history.push(`/day/${id}`)}>
      <Typography>Day {id}</Typography>
    </Button>
  );
}

export default DayCard;