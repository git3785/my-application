import React from 'react'; 

const ProductCategories = () => {
  const products = [
    {
      id: 1,
      name: "Samsung",
      price: "$49.99",
      image: "/images/ph.jpg",
    },
    {
      id: 2,
      name: "Metrola",
      price: "$59.99",
      image: "/images/naver.jpg",
    },
    {
      id: 3,
      name: "Real Me",
      price: "$79.99",
      image: "/images/n.jpg",
    },
    {
      id: 4,
      name: "OPPO",
      price: "$89.99",
      image: "/images/m3.jpg",
    },
    {
      id: 5,
      name: "VIVO",
      price: "$39.99",
      image: "/images/mobile1.jpg",
    },
    {
      id: 6,
      name: "Never Settele 12",
      price: "$69.99",
      image: "/images/m2.jpg",
    },
  ];

  return (
    <section className="p-10 bg-blue-950">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-100 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-lg text-white">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button
              className="mt-2 bg-white text-blue py-1 px-3 rounded hover:bg-blue-950"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
