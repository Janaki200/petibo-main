import React from 'react';

const foods = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: "200",
    description: "Nutritious dry food made for active and healthy dogs.",
    image: "https://images.unsplash.com/photo-1625215271135-184c1e8152ef", // example food image
  },
  {
    id: 2,
    name: "Cat Kibble Delight",
    price: "320",
    description: "Specially formulated for a cat’s healthy coat and digestion.",
    image: "https://images.unsplash.com/photo-1616364538185-c79f9b96cc1d", // example cat food image
  },
  {
    id: 3,
    name: "Puppy Starter Pack",
    price: "430",
    description: "High-protein food blend ideal for growing puppies.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1d3a5ec", // example puppy food image
  },
];

const FoodPage = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-800">Pet Food</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div key={food.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 duration-300">
            <img src={food.image} alt={food.name} className="w-48 h-48 object-contain" />
            <h2 className="text-2xl font-semibold">{food.name}</h2>
            <p className="text-lg text-gray-600">{food.price}</p>
            <p className="text-center text-sm text-gray-500">{food.description}</p>
            <button className="primary-btn hover:bg-primaryDark mt-4">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;
