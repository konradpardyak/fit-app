import React from 'react';
import { useHistory } from 'react-router-dom';

const DayCard = (props) => {
  const {id} = props;
  let history = useHistory();
  return (
    <div onClick={() => history.push(`/day/${id}`)}>
      <p>Day {id}</p>
    </div>
  );
}

export default DayCard;