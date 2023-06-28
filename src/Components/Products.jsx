import { Link ,Outlet} from "react-router-dom";

const Products = () => {
  return (
    <>
      <input type="search" placeholder="Search Products" />
      <button>Search</button>
      <nav className="productsNavbar">
        <Link className="link" to='featured'>Featured</Link>
        <Link className="link" to='new'>New</Link>
      </nav>
      <Outlet/>
    </>
  );
};
export default Products;
