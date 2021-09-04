import Users from "./component/users/Users";
import Posts from "./component/posts/Posts";
import {
BrowserRouter as Router,
// Switch,
Route,
Link,
// withRouter,
} from "react-router-dom"
import PostDetails from "./component/postDetails/PostDetails";

function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Default page</Link>
        <br/>
        <Link to={'/users'}>Users</Link>
        <br/>
        <Link to={'/posts/:id'}>Posts</Link>
        <br/>
      </div>

      <Route path={'/users'} component={Users}/>
      <Route path={'/posts'} component={Posts}/>
    </Router>

  );
}

export default App;
