import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";

export default function Users() {
let [user, setUsers] = useState([]);
useEffect(() => {
  getUsers().then(response => setUsers(response))
})

  return (
    <div>
      {
        user.map(value => <User key={value.id} item={value}/>)
      }
    </div>
  );
}