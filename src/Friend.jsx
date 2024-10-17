export default function Friend({friend}){
// const {name,email} = friend;
  return (
    <div className="box">
      <h4>Name: {friend.name} </h4>
      <p>Email: {friend.email}  </p>
    </div>
  )
}