import { useEffect, useState } from 'react';

const Break = (props) => {
  const {current, setDoBreak, id, todayTraining} = props;
  const {name, desc} = todayTraining[current];
  const [counter, setCounter] = useState(30);

  const handleSetCurrent = () => {
    setDoBreak(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter === 0){
      handleSetCurrent();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <div>
      <h1>Day {id}</h1>
      <p>Break {counter} </p>
      <button onClick={handleSetCurrent}>Next</button>
      <p>Next exercise {current+1} - {name}</p>
      <p>{desc}</p>
    </div>
  )
}

export default Break;