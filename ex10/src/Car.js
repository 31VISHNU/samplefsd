import React, { useState } from 'react';
import toy from './toyoto.jpeg';
import hon from './honda.jpeg';
import tes from './tesla.jpeg';
const CarShowroom = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      release_year: 2020,
      image_url: toy
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      release_year: 2021,
      image_url: hon
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model S",
      release_year: 2020,
      image_url: tes
    }
  ]);

  const [filterYear, setFilterYear] = useState('');
  const [filterCompany, setFilterCompany] = useState('');

  const handleYearChange = (event) => {
    setFilterYear(event.target.value);
    setFilterCompany('');
  };

  const handleCompanyChange = (event) => {
    setFilterCompany(event.target.value);
    setFilterYear('');
  };

  const filteredCars = cars.filter((car) => {
    if (filterYear && filterCompany) {
      return car.release_year === parseInt(filterYear) && car.make === filterCompany;
    } else if (filterYear) {
      return car.release_year === parseInt(filterYear);
    } else if (filterCompany) {
      return car.make === filterCompany;
    } else {
      return true;
    }
  });

  return (
    <div>
      <h1>Car Filter</h1>
      <div>
        <label htmlFor="year">Filter by Year:</label>
        <select id="year" value={filterYear} onChange={handleYearChange}>
          <option value="">All Years</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <div>
        <label htmlFor="company">Filter by Company:</label>
        <select id="company" value={filterCompany} onChange={handleCompanyChange}>
          <option value="">All Companies</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Tesla">Tesla</option>
        </select>
      </div>
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id}>
            <img src={car.image_url} alt={`${car.make} ${car.model}`} />
            <div>{car.make} {car.model} ({car.release_year})</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarShowroom;
