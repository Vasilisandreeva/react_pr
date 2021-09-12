import {useReducer} from "react";

const reduser = (state = {a: 0, b: 0, c: 0}, action) => {
if (action.obj === '1'){
  return {...state, a: state.a+action.diya}
} else if (action.obj === '2') {
  return {...state, b: state.b+action.diya}
} else if (action.obj === '3') {
  return {...state, c: state.c+action.diya}
}}

function App() {
  const [state, dispatch] = useReducer(reduser, {a: 0, b: 0, c: 0})
  const {a, b, c} = state;

  return (
    <div>
      <h1>State 1 - {a}</h1>
      <button onClick={() => dispatch({obj: '1', diya: 1})}>inc</button>
        <button onClick={() => dispatch({obj: '1', diya: -1})}>dec</button>
        <h1>State 1 - {b}</h1>
        <button onClick={() => dispatch({obj: '2', diya: 1})}>inc</button>
        <button onClick={() => dispatch({obj: '2', diya: -1})}>dec</button>
        <h1>State 1 - {c}</h1>
        <button onClick={() => dispatch({obj: '3', diya: 1})}>inc</button>
        <button onClick={() => dispatch({obj: '3', diya: -1})}>dec</button>
    </div>
  );
}

export default App;
