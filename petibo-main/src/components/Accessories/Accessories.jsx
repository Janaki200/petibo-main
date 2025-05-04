import React from 'react';

const products = [
  {
    id: 1,
    name: "Cozy Pet Bed",
    price: "$39.99",
    description: "Super soft bed to keep your pet cozy and warm.",
    image: "https://via.placeholder.com/300x200?text=Pet+Bed"
  },
  {
    id: 2,
    name: "Stylish Collar",
    price: "$14.99",
    description: "Durable and trendy collar for daily walks.",
    image: "https://via.placeholder.com/300x200?text=Collar"
  },
  {
    id: 3,
    name: "Chew Toy Set",
    price: "$24.99",
    description: "Fun chewable toys to keep your pet entertained.",
    image: "https://via.placeholder.com/300x200?text=Chew+Toys"
  },
  {
    id: 4,
    name: "Portable Water Bottle",
    price: "$19.99",
    description: "Stay hydrated on the go with this portable bottle.",
    image: "https://via.placeholder.com/300x200?text=Water+Bottle"
  }
];

const Accessories = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-10">Pet Accessories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-primary font-bold">{product.price}</p>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <button className="primary-btn hover:bg-primaryDark">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
