import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER } from './redux/actionType'


function App() {
  let { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log(counter);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=> {
        dispatch({
          type: INCREMENT_COUNTER
        })
      }}>Increment</button>
      <button onClick={()=> {
         dispatch({
          type: RESET_COUNTER
        })
      }}>Reset</button>
      <button onClick={()=> {
         dispatch({
          type: DECREMENT_COUNTER
        })
      }}>Decrement</button>
    </div>
  );
}

export default App;
