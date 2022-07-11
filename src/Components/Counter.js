import React from "react";
import { increment, decrement, reset } from "../Redux/slice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./Counter.css";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        id="increase-button"
        className="add"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        id="reset-button"
        className="reset"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
      <button
        id="decrease-button"
        className="subtract"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <p id="countervalue">{count}</p>
    </div>
  );
}

export default Counter;
