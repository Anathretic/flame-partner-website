import { useContext } from 'react';
import { CarSelectContext } from '../../context/CarSelectContext';

export const useCarSelectContext = () => {
	const carSelectContext = useContext(CarSelectContext);

	if (!carSelectContext) {
		throw new Error('Błąd użycia useContext!');
	}

	const { selectedCar, setSelectedCar } = carSelectContext;

	return { selectedCar, setSelectedCar };
};
