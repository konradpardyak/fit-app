import { Typography } from '@material-ui/core';

const TrainingHeader = (props) => {
  const {children} = props;

  return (
    <Typography variant="h3" align="center" >{children}</Typography>
  )
}

export default TrainingHeader;