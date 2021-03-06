import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    paddingTop: theme.spacing(2)
  },
}));

const TrainingHeader = (props) => {
  const {children} = props;
  const classes = useStyles();

  return (
    <Typography className={classes.headerStyle} variant="h3" align="center" >{children}</Typography>
  )
}

export default TrainingHeader;