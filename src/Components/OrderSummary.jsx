import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    //here -1 means go back to last visited page from history stack,
    // if we -2 it'll go to last second visited page and soon...
    navigate(-1); 
  };

  return (
    <>
      <h1>Order Confirmed :)</h1>
      <button onClick={handleClick}>Go back</button>
    </>
  );
};

export default OrderSummary;
