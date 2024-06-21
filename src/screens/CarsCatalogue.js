import { React, useContext, useEffect } from "react";
import CarsContext from "../context/cars/carsContext";
function CarsCatalogue() {
  const carsContext = useContext(CarsContext);
  const { cars, error, getCars } = carsContext;
  useEffect(() => {
    // Call getCars when the component mounts
    getCars();
  }, []);
  // console.log("here:", cars);

  return cars ? (
    <div className="container mx-auto px-4 my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={car._id}>
          <img className="w-full" src={car.image} alt={`${car.name} ${car.type}`} />
          <div className=" px-3 py-4">
            <div className="flex flex-row w-full justify-between py-2">
            <div className="font-bold text-xl mb-2">Name: {car.name}</div>
            <div className="font-bold text-xl mb-2">Model: {car.type}</div>
            </div>
            <p className="text-gray-700 text-base">
              Year: {car.year}
            </p>
            <p className="text-gray-900 text-base">
              Price: {car.price}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
    
  ) : (
    <div>Loading...</div>
  );
}
export default CarsCatalogue;
