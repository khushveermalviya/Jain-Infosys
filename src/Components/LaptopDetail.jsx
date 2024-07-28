import React from 'react';
import { useParams } from 'react-router-dom';
import Laptop from '../Data/Laptop';

export default function LaptopDetail() {
  const { id } = useParams();
  const laptop = Laptop[id];

  return (
    <div className="laptop-detail p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-2">
          <img className="w-full h-auto object-cover mb-4" src={laptop.img} alt={`Laptop ${parseInt(id) + 1}`} />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <h2 className="text-3xl font-bold mb-4">{laptop.processor}</h2>
          <p className="text-lg mb-2"><strong>RAM:</strong> {laptop.ram}</p>
          <p className="text-lg mb-2"><strong>Storage:</strong> {laptop.storage}</p>
          <p className="text-lg mb-2"><strong>Price:</strong> {laptop.price}</p>
          <p className="text-lg mb-4"><strong>Description:</strong> {laptop.description}</p>
          <p className="text-lg mb-4"><strong>Features:</strong></p>
          <ul className="list-disc list-inside mb-4">
            {laptop.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-lg mb-4"><strong>Overall Rating:</strong> {laptop.rating} / 5</p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {laptop.reviews.map((review, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">{review.username}</p>
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-sm text-yellow-500">Rating: {review.rating} / 5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
