import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Day = () => {
  const {id} = useParams();
  const exercise = 3;
  let history = useHistory();
  return (
    <div>
      <h1>This is training day {id}</h1>
      <div onClick={() => history.push(`/training/${id}/${exercise}`)}>
        Start Training
      </div>
    </div>
  );
}

export default Day;