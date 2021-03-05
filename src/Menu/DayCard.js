import { useHistory } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';

const DayCard = (props) => {
  const {id, isFinished} = props;
  let history = useHistory();
  return (
    <Button variant="outlined" color={ isFinished ? "secondary" : "default"} fullWidth onClick={() => history.push(`/day/${id}`)}>
      <Typography>Day {id}</Typography>
    </Button>
  );
}

export default DayCard;