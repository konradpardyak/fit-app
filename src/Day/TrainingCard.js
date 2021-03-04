import { useState } from 'react';

import { ListItem, ListItemText, Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: props => ({
    margin: 0,
    padding: theme.spacing(2)
  }),
  closeButton: props => ({
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  })
}));

const TrainingCard = (props) => {
  const {name, desc, reps } = props;
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem button onClick={handleClickOpen}>
        <ListItemText primary={name} secondary={`Reps x${reps}`} />
      </ListItem>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle disableTypography className={classes.root}>
          <Typography variant="h6">{name}</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {desc}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TrainingCard;