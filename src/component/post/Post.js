import {
BrowserRouter as Router,
Switch,
Route,
Link,
withRouter,
} from "react-router-dom"
export default function Post({item}) {
  return (
    <div>
      Post Details - <Link to={{pathname: '/posts/' + item.id, state: item}}>more info</Link>
    </div>
  );
}