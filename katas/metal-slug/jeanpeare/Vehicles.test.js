import {Vehicles} from './Vehicles.js';

test('Vehicles should be created with the correct data type and atributes complete', () => {
    expect(new Vehicles('Tank',3)).toEqual({'VehiclesType': 'Tank', 'Health': 3});
    expect(new Vehicles('Plain',4)).toEqual({'VehiclesType': 'Plain', 'Health': 4});
    expect(new Vehicles('Camel',1)).toEqual({'VehiclesType': 'Camel', 'Health': 1});
    expect(new Vehicles('Submarine',3)).toEqual({'VehiclesType': 'Submarine', 'Health': 3}); 
});