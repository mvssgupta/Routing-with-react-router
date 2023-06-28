import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("order-summary");
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default Home;
