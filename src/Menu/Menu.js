import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DayCard from './DayCard';

const Menu = () => {
  const progress = useSelector((state) => state.progress.progress);
  const plan = useSelector((state) => state.plan.plan);
  let history = useHistory();
  return (
    <div>
      <h1>This is menu</h1>
      <p>Current progress: {progress}</p>

      {plan.days.map((day) => (
        <DayCard id={day.dayId} key={day.dayId} />
      ))}
      
      <div onClick={() => history.push(`/settings`)}>Settings</div>
    </div>
  );
}

export default Menu;