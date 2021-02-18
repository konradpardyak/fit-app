import { useEffect, useState } from 'react';

const Ready = (props) => {
  const {setCurrent, id, todayTraining} = props;
  const {name, desc} = todayTraining[0];

  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
      handleSetCurrent();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  const handleSetCurrent = () => {
    setCurrent(0);
  }

  return (
    <div>
      <h1>Day {id}</h1>
      <p>Ready? {counter} </p>
      <button onClick={handleSetCurrent}>Start!</button>
      <p>Get ready for exercise 1 - {name}</p>
      <p>{desc}</p>
    </div>
  )
}

export default Ready;