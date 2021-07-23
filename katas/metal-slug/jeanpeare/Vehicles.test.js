import {Vehicle} from './Vehicles.js';

test('Vehicles should be created with the correct data type and atributes complete', () => {
    expect(new Vehicle('Tank', 3)).toEqual({'VehiclesType': 'Tank', 'Health': 3});
    expect(new Vehicle('Plain', 4)).toEqual({'VehiclesType': 'Plain', 'Health': 4});
    expect(new Vehicle('Camel', 1)).toEqual({'VehiclesType': 'Camel', 'Health': 1});
    expect(new Vehicle('Submarine', 3)).toEqual({'VehiclesType': 'Submarine', 'Health': 3});
});