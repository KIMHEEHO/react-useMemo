import React, { useState } from 'react';

const Car = React.memo(({ car }) => {
    console.log(`Rendering ${car.model}`);
    return (
        <li>
            {car.model} - {car.id}
        </li>
    );
});

const CarList = () => {
    const [cars, setCars] = useState([
        { id: 'AB123', model: 'Sedan' },
        { id: 'CD456', model: 'SUV' },
        { id: 'EF789', model: 'Convertible' },
    ]);

    const addCar = () => {
        setCars([...cars, { id: 'GH012', model: 'Truck' }]);
    };

    return (
        <div>
            <h2>React.memo를 이용한 자동차 목록</h2>
            <button onClick={addCar}>Add Car</button>
            <ul>
                {cars.map((car) => (
                    <Car key={car.id} car={car} />
                ))}
            </ul>
        </div>
    )
}

export default CarList;