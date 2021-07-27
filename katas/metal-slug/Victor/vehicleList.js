import { Vehicle } from './vehicles.js';

export class VehicleList {
    constructor(){
        this._vehicleType = {
            tank : new Vehicle('Tank', 3),
            plain : new Vehicle('Plain', 4),
            camel : new Vehicle('Camel', 1),
            subMarine : new Vehicle('Submarine', 4)
        };
    }

    vehicles(){
        const vehicles = new VehicleList();
        return vehicles;
    }
}