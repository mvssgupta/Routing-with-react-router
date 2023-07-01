import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    auth.login(user);
    navigate("/profile",{replace:true}); // using replace: true, the navigation will replace the current entry in the history stack instead of adding a new one.
  };
  return (
    <>
      <label htmlFor="username">
        <input id="username" type="text" placeholder="Enter your name" onChange={e => setUser(e.target.value)}/>
      </label>

      <button onClick={handleLogin}>Login</button>
    </>
  );
};
export default Login;
