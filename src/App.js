import {useReducer} from "react";

const reduser = (state = {a: 0, b: 0, c: 0}, action) => {
if (action.obj === '1' && action.diya === '+'){
  return {...state, a: state.a++}
} else if (action.obj === '1' && action.diya === '-') {
  return {...state, a: state.a--}
} else if (action.obj === '2' && action.diya === '+') {
  return {...state, b: state.b++}
} else if (action.obj === '2' && action.diya === '-') {
  return {...state, b: state.b--}
} else if (action.obj === '3' && action.diya === '+') {
  return {...state, c: state.c++}
} else if (action.obj === '3' && action.diya === '-') {
  return {...state, c: state.c--}
}}

function App() {
  let [state, dispatch] = useReducer(reduser, {a: 0, b: 0, c: 0})
  let {a, b, c} = state;

  return (
    <div>
      <h1>State 1 - {a}</h1>
      <button onClick={() => dispatch({obj: '1', diya: '+'})}>inc</button>
        <button onClick={() => dispatch({obj: '1', diya: '-'})}>dec</button>
        <h1>State 1 - {b}</h1>
        <button onClick={() => dispatch({obj: '2', diya: '+'})}>inc</button>
        <button onClick={() => dispatch({obj: '2', diya: '-'})}>dec</button>
        <h1>State 1 - {c}</h1>
        <button onClick={() => dispatch({obj: '3', diya: '+'})}>inc</button>
        <button onClick={() => dispatch({obj: '3', diya: '-'})}>dec</button>
    </div>
  );
}

export default App;