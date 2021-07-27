export class Vehicle {
    constructor(VehiclesType, Health){
        this.VehiclesType = VehiclesType;
        this.Health = Health;
    }

    getVehicleHealth(){
        return this.Health;
    }
}

export const Tank = new Vehicle(
    'Tank',
    3);
export const Plane = new Vehicle(
    'Plane',
    4);
export const Camel = new Vehicle(
    'Camel',
    1);
export const Submarine = new Vehicle(
    'Submarine',
    3);