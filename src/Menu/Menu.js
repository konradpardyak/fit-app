import React from 'react';
import DayCard from './DayCard';
import { useHistory } from 'react-router-dom';

const Menu = () => {
  let history = useHistory();
  return (
    <div>
      <h1>This is menu</h1>
      <DayCard id={1} />
      <DayCard id={2} />
      <DayCard id={3} />
      <div onClick={() => history.push(`/settings`)}>Settings</div>
    </div>
  );
}

export default Menu;