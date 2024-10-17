import './post.css'
export default function Post({post}){
  return(
    <div className='post'>
      <h5>Title {post.title}</h5>
      <p><small>userId: {post.userId} </small></p>
      <p><small>postId:{post.postId} </small></p>
      <p></p>
    </div>
  )
}