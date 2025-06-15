import { createContext, useState } from 'react';
import { CarSelectContextModel } from '../models/carousel.model';
import { Car } from '../models/forms.model';

export const CarSelectContext = createContext<CarSelectContextModel | null>(null);

const CarSelectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [selectedCar, setSelectedCar] = useState<Car>('');
	return <CarSelectContext.Provider value={{ selectedCar, setSelectedCar }}>{children}</CarSelectContext.Provider>;
};

export default CarSelectProvider;
