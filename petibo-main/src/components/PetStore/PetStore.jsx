import React from 'react';
import pet1 from '../../assets/images/pet1.jpeg';
import pet2 from '../../assets/images/pet2.jpeg';
import pet3 from '../../assets/images/pet3.jpeg';
import Navbar from '../Navbar/Navbar';

const PetsData = [
  {
    id: 1,
    Image: pet1,
    name: "Golden Retriever",
    description: "Friendly and loyal companion.",
    aosDelay: "300",
  },
  {
    id: 2,
    Image: pet2,
    name: "Road wheeler",
    description: "Fluffy and calm house cat.",
    aosDelay: "500",
  },
  {
    id: 3,
    Image: pet3,
    name: "White bull",
    description: "Cute and low-maintenance pet.",
    aosDelay: "700",
  },
  {
    id: 4,
    Image: pet3,
    name: "white lab",
    description: "Cute and low-maintenance pet.",
    aosDelay: "600",
  },
  {
    id: 5,
    Image: pet3,
    name: "Rogger",
    description: "Cute and low-maintenance pet.",
    aosDelay: "500",
  },
];

const PetStore = () => {
  const storeName = "Happy Paws Pet Store";
  const location = "123 Pet Street, Pawsville";
  const totalPets = PetsData.length;

  return (
    <div className='container my-16 space-y-8'>
      <Navbar />

      {/* Page Header */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-purple-950'>Our Lovely Pets</h1>
        <p className='text-lg text-gray-700'>Explore our adorable companions ready for adoption</p>
      </div>

      {/* Pet Cards */}
      <div className='flex flex-wrap justify-center gap-10'>
        {PetsData.map(({ id, Image, name, description, aosDelay }) => (
          <div
            key={id}
            data-aos="fade-up"
            data-aos-delay={aosDelay}
            className='bg-white rounded-xl shadow-md max-w-xs p-6 text-center space-y-4 hover:scale-105 duration-300'
          >
            <img
              src={Image}
              alt={name}
              className='w-full h-64 object-cover rounded-lg'
            />
            <h2 className='text-2xl font-bold text-purple-900'>{name}</h2>
            <p className='text-sm text-gray-600'>{description}</p>
            <div className='border-t pt-4 text-left text-sm text-gray-700 space-y-1'>
              <p><span className="font-semibold">Store:</span> {storeName}</p>
              <p><span className="font-semibold">Location:</span> {location}</p>
              <p><span className="font-semibold">Pets Available:</span> {totalPets}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetStore;
