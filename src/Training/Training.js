import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/ducks/progress";

const Training = () => {
  const {id, exercise} = useParams();
  const dispatch = useDispatch();

  const handleSetProgress = () => {
    dispatch(setProgress(id));
  }

  return (
    <div>
      <h1>This is training</h1>
      <h2>exercise:{exercise} day:{id}</h2>
      <button onClick={handleSetProgress}>Set progress to {id}</button>
    </div>
  );
}

export default Training;