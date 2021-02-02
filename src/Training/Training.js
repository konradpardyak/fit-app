import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Ready from './Ready';
import Train from './Train';
import Break from './Break';

const Training = () => {
  const {id} = useParams();
  const [current, setCurrent] = useState(null);
  const [doBreak, setDoBreak] = useState(false);

  useEffect(() => {
    return () => {
      setCurrent(null);
    }
  }, []);

  return (
    <div>
      {
        current == null ? (<Ready setCurrent={setCurrent} id={id}/>) :
        doBreak ? (<Break current={current} setDoBreak={setDoBreak} id={id} />) 
        : 
        (<Train current={current} setCurrent={setCurrent} setDoBreak={setDoBreak} id={id} />)
        }
    </div>
  );
}

export default Training;