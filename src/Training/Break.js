import React, { useEffect, useState } from 'react';

const Break = (props) => {
  const {current, setDoBreak, id} = props;
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    if(counter == 0){
      handleSetCurrent();
    }
    return () => clearTimeout(timeout);
  }, [counter]);

  const handleSetCurrent = () => {
    setDoBreak(false);
  }

  return (
    <div>
      <h1>Day {id}</h1>
      <p>Break {counter} </p>
      <button onClick={handleSetCurrent}>Next</button>
      <p>Exercise {current+1}</p>
      <p>Description</p>
    </div>
  )
}

export default Break;