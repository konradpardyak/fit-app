import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  typographyStyle: {
    color: "#fff"
  }
});

const TrainingHeader = (props) => {
  const {children} = props;
  const classes = useStyles();

  return (
    <Typography className={classes.typographyStyle} variant="h4" align="center" >{children}</Typography>
  )
}

export default TrainingHeader;