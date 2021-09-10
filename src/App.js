import {useReducer} from "react";

const reduser = (state, action) => {
    switch (action) {
        case '+':
        return state + 10;
        case '-':
        return state - 2;
        default:
            return state
    }
}

function App() {
    let [state, dispatch] = useReducer(reduser, 0);
    console.log(state)

  return (
    <div>
      <h1>State 1 - {state}</h1>
        <button onClick={() => dispatch('+')}>inc</button>
        <button onClick={() => dispatch('-')}>dec</button>
    </div>
  );
}

export default App;