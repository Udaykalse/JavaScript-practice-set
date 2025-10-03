// Question 18: Find Index of an Item (findIndex)

function findCarIndex(cars,model){
    return cars.findIndex(car=>car.model===model);
};

const carList = [
  { model: 'Civic', year: 2020 },
  { model: 'Accord', year: 2022 },
  { model: 'Civic', year: 2023 }
];
console.log(`Index of 'Accord': ${findCarIndex(carList, 'Accord')}`);

console.log(`Index of 'Civic': ${findCarIndex(carList, 'Civic')}`);

console.log(`Index of 'Camry': ${findCarIndex(carList, 'Camry')}`);
