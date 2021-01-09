import React from 'react';
import { useParams } from "react-router-dom";

const Training = () => {
  const {id, exercise} = useParams();
  return (
    <div>
      <h1>This is training</h1>
      <h2>exercise:{exercise} day:{id}</h2>
    </div>
  );
}

export default Training;