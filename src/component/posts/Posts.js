import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";

export default function Posts() {
    let [post, setPosts] = useState([])
    useEffect(() => {
        getPosts()
    })

  return (
    <div>
    Posts

    </div>
  );
}