import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function HomePage({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <AddProduct products={products} setProducts={setProducts} />
      <SearchBar setSearchQuery={setSearchQuery} />
      <ProductList products={products} setProducts={setProducts} searchQuery={searchQuery} />

    </div>
  );
}

export default HomePage;
