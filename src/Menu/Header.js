import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, LinearProgress } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(135deg, #f54ea2, #ff7676)"
  },
  headerStyle: {
    flex: 1
  }
});

const Header = () => {
  const progress = useSelector((state) => state.progress.progress);
  let history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar id="back-to-top-anchor">
        <Typography className={classes.headerStyle} >Fit App - Current progress: {progress}/30</Typography>
        <IconButton aria-label="menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
          <MenuItem onClick={() => history.push(`/settings`)}>Settings</MenuItem>
        </Menu>
      </Toolbar>
      <LinearProgress color="primary" variant="determinate" value={Math.round((progress/30)*100)} />
    </AppBar>
  )
}

export default Header;