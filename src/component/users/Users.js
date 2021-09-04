import User from "../user/User";
import UserDetails from "../userDetails/UserDetails";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import {Route} from "react-router-dom";

export default function Users(props) {

  let {match: {url}, history} = props;
  let [user, setUsers] = useState([]);
  useEffect(() => {
      getUsers().then(response => setUsers(response))
}, [])

  return (
    <div>
      {user.map(value => <User history={history} key={value.id} item={value}/>)}
      <Route path={`${url}/:id`} render={(props) => {
        return <UserDetails {...props}/>
      }}/>
    </div>
  );
}