import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import Ready from './Ready';
import Train from './Train';
import Break from './Break';

const Training = () => {
  const {id} = useParams();
  const [current, setCurrent] = useState(null);
  const [doBreak, setDoBreak] = useState(false);
  const plan = useSelector((state) => state.plan.plan);
  const todayTraining = plan.days[id-1].todayPlan.map((exercise) => {
    const foundExercise = plan.exercisesList.find((searched) => (searched.exId === exercise.exId));
    return {name : foundExercise.name, desc : foundExercise.desc, reps : exercise.reps}
  })

  useEffect(() => {
    return () => {
      setCurrent(null);
    }
  }, []);

  return (
    <div>
      {
        current == null ? (<Ready setCurrent={setCurrent} id={id} todayTraining={todayTraining} />) :
        doBreak ? (<Break current={current} setDoBreak={setDoBreak} todayTraining={todayTraining} />) : 
        (<Train current={current} setCurrent={setCurrent} setDoBreak={setDoBreak} id={id} todayTraining={todayTraining} />)
        }
    </div>
  );
}

export default Training;