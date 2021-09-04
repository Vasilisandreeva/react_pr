import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.service";
import PostDetails from "../postDetails/PostDetails";
import {Route} from "react-router-dom";


export default function Posts(props) {
    let {match:{url}} = props
    let [post, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(response => setPosts(response))
    }, [])

  return (
    <div>
        {post.map(value => <Post key={value.id} item={value}/>)}
        <Route path={`${url}/:id`} render={(props) => {
            return <PostDetails {...props}/>
        }}/>
    </div>
  );
}