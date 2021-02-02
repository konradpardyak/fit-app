import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import TrainingCard from './TrainingCard';
import { logDOM } from '@testing-library/react';

const Day = () => {
  const {id} = useParams();
  let history = useHistory();
  const plan = useSelector((state) => state.plan.plan);
  
  return (
    <div>
      <h1>This is training day {id}</h1>
      {plan.days[id-1].todayPlan.map((exercise) => {
        const foundExercise = plan.exercisesList.find((searched) => (searched.exId === exercise.exId));
        return <TrainingCard name={foundExercise.name} desc={foundExercise.desc} reps={exercise.reps} key={exercise.exId} />
      })}
      
      <div onClick={() => history.push(`/training/${id}`)}>
        Start Training
      </div>
    </div>
  );
}

export default Day;