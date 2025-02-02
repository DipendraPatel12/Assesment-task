import { useState } from "react";

function AddProduct({ setProducts }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (!name || !price) return alert("Please enter all details");

    const newProduct = { id: Date.now(), name, price };
    console.log("Adding new product:", newProduct); 

    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });

    setName("");
    setPrice("");
  };

  return (
    <div className="my-4 flex flex-col sm:flex-row justify-center items-center gap-2 px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full max-w-md">
        <input
          className="border p-2 w-full sm:w-46"
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full sm:w-46"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
          onClick={handleAddProduct}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
