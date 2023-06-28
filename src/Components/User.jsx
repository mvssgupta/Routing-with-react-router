import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
       <Link className="user" to='1'>User 1</Link> 
       <Link className="user" to='2'>User 2</Link> 
       <Link className="user" to='3'>User 3</Link> 
    </>
    
  )
}

export default User;