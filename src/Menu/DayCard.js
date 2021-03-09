import { useHistory } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "48px",
  },
  typographyStyle: {
    flex: 1,
  },
  iconStyle: {
    color: props => (props.isFinished ? theme.palette.success.main : theme.palette.secondary.main)
  }
}));

const DayCard = (props) => {
  const {id, isFinished} = props;
  let history = useHistory();
  const classes = useStyles(props);

  return (
    <Button className={classes.root} variant="outlined" component="div" fullWidth onClick={() => history.push(`/day/${id}`)}>
      <Typography className={classes.typographyStyle}>Day {id}</Typography>
      {isFinished ? <CheckCircleOutlineIcon className={classes.iconStyle} /> : <HighlightOffIcon className={classes.iconStyle}/>}
    </Button>
  );
}

export default DayCard;