import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); 
  };

  return (
    <>
      <h1>
        <span style={{ color: "red" }}> Error 404! </span> No Page Found
      </h1>
      <button style={{ backgroundColor: "Green" }} onClick={handleClick}>Go back</button>
    </>
  );
};

export default PageNotFound;
