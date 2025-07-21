import React, { useState } from 'react';

// 기존 car 컴포넌트들의 props인 car 객체가 변경되지 않음을 감지하고 불필요한 리렌더링 방지
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

// useMemo는 값을 메모이제이션하여 연산을 최적화하고, React.memo는 컴포넌트 전체를 메모이제이션해 불필요한 렌더링을 방지

export default CarList;