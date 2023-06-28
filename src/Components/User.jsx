import { Link ,useSearchParams } from "react-router-dom";

const User = () => {

  const [searchParams , setSearchParams] = useSearchParams();

  const applyFilter = searchParams.get('filter') === "active";

  return (
    <>
       <Link className="user" to='1'>User 1</Link> 
       <Link className="user" to='2'>User 2</Link> 
       <Link className="user" to='3'>User 3</Link> 
       <div>
        <button onClick={() => {setSearchParams({filter:"active"})}}>Search Active Users</button>
        <button onClick={() => {setSearchParams({})}}>Reset</button>
       </div>
       {applyFilter ? (<h2>Showing Active Users</h2>) : (<h2>Showing All Users</h2>)}
    </>
    
  )
}

export default User;