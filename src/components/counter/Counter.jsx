import { useState } from "react";

const Counter = () => {
    const [count, setState] = useState(0);
    function increment() {
        setState(count + 1);
      }
    
      function decrement() {
        setState(count - 1);
      }
    return (
        <>
      <p>{count}</p>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
        </>
    );
};
export default Counter;