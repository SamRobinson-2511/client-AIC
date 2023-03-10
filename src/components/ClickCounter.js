import { useRef } from 'react'
import {useState} from 'react'

function ClickCounter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Visits: {count}</h2>
      <button onClick={add}>Add Visit</button>
    </div>
  );
}

export default ClickCounter;





//   const countRef = useRef(0);
  
//   const handle = () => {
//     countRef.current++;
//     console.log(`Clicked ${countRef.current} times`);
//   };
//   console.log('I rendered!');
//   return <button onClick={handle}>Add Visit</button>;
// }
