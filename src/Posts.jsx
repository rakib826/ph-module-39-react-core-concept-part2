import { useEffect, useState } from 'react'
import './friends.css'
import Post from './Post'
export default function Posts(){
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>setPosts(data))
  },[])
  return(
    <div className='box'>
      <h3>Posts: {posts.length} </h3>
      {
        posts.map(post=><Post post={post}></Post>)
      }
    </div>
  )
}