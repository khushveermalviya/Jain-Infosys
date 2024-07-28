import React from 'react';
import Store from '../Data/Store';
import { Link } from 'react-router-dom';

export default function Storage() {
    return (
        <div className="laptop-list flex flex-wrap justify-between w-full h-full">
          {Store.map((laptop, index) => (
            <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border border-solid border-gray-200 rounded-2xl transition-all duration-500">
              <div className="block overflow-hidden h-48"> {/* Set a fixed height for the image container */}
                <img className="w-full h-full object-cover" src={laptop.img} alt={`Laptop ${index + 1}`} /> {/* Ensure the image covers the container */}
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500">{laptop.processor}</h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                  RAM: {laptop.ram}, Storage: {laptop.storage}, Price: {laptop.price}
                </p>
                <Link to={`/laptop/${index}`}>
                  <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      );
}