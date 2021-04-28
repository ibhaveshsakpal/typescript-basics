//  Create an interface that define the characteristic properties of a car -
//   a) model
//   b) color
//   c) year of manufacture
// Create a function that takes this value as its parameter and simply print the properties.
// Function that takes Type as an interface. i.e "Car"
function vehicle(car) {
    console.log("Model Name: " + car.model + ", Color: " + car.color + ", Year of Manufacture: " + car.yearOfManufacture + " ");
}
// Defined the input values
var carObject = {
    model: "Lamborghini Aventador",
    color: "Black",
    yearOfManufacture: "2011-2017"
};
vehicle(carObject);
