import { useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import { numberDecrement, numberIncrement } from "./store/reducers/number";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((store) => store.number);
  return (
    <div>
      {number}
      <div>
        <button
          onClick={() => {
            //anonymous function
            dispatch(numberIncrement(10));
          }}
          // dispatch({
          //   type: "Increment",
          //   payload: 7,
          // });
        >
          Increment
        </button>
        <button
          onClick={() => {
            // dispatch(numberDecrement(10));
            dispatch({
              type: "Decrement",
              payload: 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
