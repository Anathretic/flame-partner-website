import { createContext, useState } from 'react';
import { CarSelectContextModel, ProviderModel } from '../models/context.model';
import { Car } from '../models/forms.model';

export const CarSelectContext = createContext<CarSelectContextModel | null>(null);

const CarSelectProvider: React.FC<ProviderModel> = ({ children }) => {
	const [selectedCar, setSelectedCar] = useState<Car>('');
	return <CarSelectContext.Provider value={{ selectedCar, setSelectedCar }}>{children}</CarSelectContext.Provider>;
};

export default CarSelectProvider;
