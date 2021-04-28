//  Create a class 'Vehicle' with
// a) Class properties 'model', 'color', 'year of manufacture'.
// b) Class constructor to manage these properties
// c) Simple method to print these properties

// Also, create a child class 'Car' of above 'Vehicle' class with
// a) Class properties 'seating capacity(number of persons that sit)'
// b) Class constructor to manage these properties
// c) Simple method to print these properties along with the properties of class Vehicle
// Make sure that the 'Vehicle' class properties should only be available to itself as well as child class 'Car' but not outside.


class Vehicle {

    // Initilised variables
    protected model: string;
    protected color: string;
    protected yearofManufacture: string;


    constructor(carModel: string, carColor: string, carYearofManufacture: string ) {
        this.model = carModel;
        this.color = carColor;
        this.yearofManufacture = carYearofManufacture;
    }

    carProperties(){
        console.log(`Car Model: ${this.model}, Car color: ${this.color}, Car Year of Manufacture: ${this.yearofManufacture}`);
    }
}

let carObj = new Vehicle("Lamborghini Aventador","Black","2011-2017")
carObj.carProperties();



class Car extends Vehicle {

    seatingCapacity: number;

    constructor(carModel: string, carColor: string, 
        carYearofManufacture: string ,carSeatingCapacity: number) {
        super(carModel, carColor, carYearofManufacture);
        this.seatingCapacity = carSeatingCapacity;
    }

    displayCarDetails(){
        console.log(`Car Model: ${this.model}, Car color: ${this.color}, Car Year of Manufacture: ${this.yearofManufacture}, Seating Capacity: ${this.seatingCapacity}`);   
    }
}

let carObj2 = new Car("Lamborghini Aventador","Black","2011-2017",2);
carObj2.displayCarDetails();