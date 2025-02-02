function ProductList({ products, setProducts, searchQuery }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleDelete = (productId) => {
    console.log("Deleting product with ID:", productId);
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="mt-4">
      <h3 className="text-center text-lg font-semibold">Product List</h3>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No Product Found</p>
      ) : (
        <table className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border-b">Product Name</th>
              <th className="p-2 border-b">Price</th>
              <th className="p-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
          {filteredProducts.map((product) => (
  <tr key={product.id} className="text-center border-b">
    <td className="p-2">{product.name}</td>
    <td className="p-2">${product.price}</td>
    <td className="p-2">
      <button
        onClick={() => handleDelete(product.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        X
      </button>
    </td>
  </tr>
))}

          </tbody>
        </table>
      )}
    </div>
  );
}
export default ProductList;
