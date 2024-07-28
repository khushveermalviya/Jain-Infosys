
import { Link } from 'react-router-dom';
import Laptop from '../Data/Laptop';

export default function LaptopList() {
  return (
    <div>
    <div className='flex justify-center w-full'>
    <h1 className="text-3xl w-full text-center font-semibold text-gray-900 mb-5">Storage</h1>
    </div>
    <div className="laptop-list flex flex-wrap justify-between w-full h-full">
      {Laptop.map((laptop, index) => (
        <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border border-solid border-gray-200 rounded-2xl transition-all duration-500">
          <div className="block overflow-hidden">
            <img className="w-full h-auto object-cover" src={laptop.img} alt={`Laptop ${index + 1}`} />
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
    </div>
  );
}
