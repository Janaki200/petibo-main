import React from 'react';

const toys = [
  {
    id: 1,
    name: "Chew Ball",
    price: "350",
    description: "Durable rubber ball perfect for chewing and fetching.",
    image: "https://images.unsplash.com/photo-1619983081580-5ff6d6f99d9a", // sample toy ball image
  },
  {
    id: 2,
    name: "Rope Tug",
    price: "405",
    description: "Strong rope toy for tug-of-war games.",
    image: "https://images.unsplash.com/photo-1618423595565-3089a6404d55", // sample rope toy image
  },
  {
    id: 3,
    name: "Plush Squeaky Toy",
    price: "800",
    description: "Soft plush toy with a fun squeaker inside.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238", // sample plush toy image
  },
];

const ToysPage = () => {
  return (
    <div className="container mx-auto my-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-800">Pet Toys</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {toys.map((toy) => (
          <div key={toy.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 duration-300">
            <img src={toy.image} alt={toy.name} className="w-48 h-48 object-contain" />
            <h2 className="text-2xl font-semibold">{toy.name}</h2>
            <p className="text-lg text-gray-600">{toy.price}</p>
            <p className="text-center text-sm text-gray-500">{toy.description}</p>
            <button className="primary-btn hover:bg-primaryDark mt-4">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToysPage;
