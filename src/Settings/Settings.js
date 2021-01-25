import { useDispatch } from "react-redux";
import { setProgress } from "../redux/ducks/progress";

const Settings = () => {
  const dispatch = useDispatch();

  const handleSetProgress = () => {
    dispatch(setProgress(0));
  }

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleSetProgress}>Reset progress</button>
    </div>
  );
}

export default Settings;