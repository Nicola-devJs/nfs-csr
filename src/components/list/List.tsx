import { Car } from "../../interfaces/car";
import "./list.style.css";

export const CarList: React.FC<{ cars: Car[] }> = ({ cars }) => (
  <div className="car-list">
    {cars.map((car) => (
      <div key={car.id} className="car-card">
        <img src={car.imageUrl} alt={car.name} className="car-image" />
        <div className="car-details">
          <h3>{car.auto}</h3>

          <p className="car-price">${car.price}</p>
          <p>Двигатель: {car.motor}</p>
          <p>Трансмиссия: {car.transmission}</p>
          <p>Пробег: {car.mileage}</p>
          <p>Год выпуска: {car.year}</p>
          <p>
            Продавец: <strong>{car.name}</strong>
          </p>
        </div>
      </div>
    ))}
  </div>
);
