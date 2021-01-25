import { useEffect, useState } from 'react';

const Ready = (props) => {
  const {setCurrent, id} = props;

  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter == 0){
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
      <p>Exercise 1</p>
      <p>Description</p>
    </div>
  )
}

export default Ready;