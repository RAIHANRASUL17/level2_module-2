{
    // 

// example1
// type a1 = null;
type a1 = number;
// type b1 = undefined;
type b1 = string;

type x = a1 extends null ? true : false;

type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

// example 2
type Sheik = {
    bike: string;
    car: string;
    ship: string
}

// bike ase kina/ car ase kina / ship ase kina/ tractor ase kina

// type CheckVehicle <T> =  T extends "bike" | "car" | "ship" ? true : false; //manually
 
type CheckVehicle <T> =  T extends keyof Sheik ? true : false;
type HasTractor = CheckVehicle <"tractor">





    // 
}