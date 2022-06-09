import { useState } from "react";
const Counter = ({ counter }) => {
  const [count, setCounter] = useState(counter);

  const increment = () => {
    setCounter(count + 1);
  };

  const decrement = () => {
    setCounter(count - 1);
    if (count === 0) {
      setCounter(0);
    }
  };
  const double = () => {
    setCounter(2 * count);
  };
  return (
    <div >
      <p>
        {" "}
        {count % 2 === 0 ? (<h3 style={{ color: "green" }}>{count}</h3>) : (<h3 style={{ color: "red" }}>{count}</h3>)}
      </p>

      <button  onClick={increment}>Increment</button>
      <button  onClick={decrement}>Decrement</button>
      <button  onClick={double}>Double</button>
    </div>
  );
};

export default Counter;