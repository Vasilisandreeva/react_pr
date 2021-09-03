import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Default page</Link>
        <br/>
        <Link to={'/users'}>Users</Link>
        <br/>
        <Link to={'/posts'}>Posts</Link>
        <br/>
        <Route path={'/users'}></Route>
        <Route path={'/posts'}></Route>

      </div>
    </Router>

  );
}

export default App;
