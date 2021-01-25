import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/ducks/progress";

const Train = (props) => {
  const {current, setCurrent, setDoBreak, id} = props;
  const [counter, setCounter] = useState(15);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSetProgress = () => {
    dispatch(setProgress(id));
  }

  const handleFinished = () => {
    if(current <3) {
      setCurrent(current + 1);
      setDoBreak(true);
    } else {
      handleSetProgress();
      history.goBack();
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter == 0){
      handleFinished();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <div>
      <h1>Day {id}</h1>
      <p>Do! {counter} </p>
      <button onClick={handleFinished}>Finished</button>
      <p>Exercise {current+1}</p>
      <p>Description</p>
    </div>
  )
}

export default Train;