//  Create a class 'Vehicle' with
// a) Class properties 'model', 'color', 'year of manufacture'.
// b) Class constructor to manage these properties
// c) Simple method to print these properties
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Also, create a child class 'Car' of above 'Vehicle' class with
// a) Class properties 'seating capacity(number of persons that sit)'
// b) Class constructor to manage these properties
// c) Simple method to print these properties along with the properties of class Vehicle
// Make sure that the 'Vehicle' class properties should only be available to itself as well as child class 'Car' but not outside.
var Vehicle = /** @class */ (function () {
    function Vehicle(carModel, carColor, carYearofManufacture) {
        this.model = carModel;
        this.color = carColor;
        this.yearofManufacture = carYearofManufacture;
    }
    Vehicle.prototype.carProperties = function () {
        console.log("Car Model: " + this.model + ", Car color: " + this.color + ", Car Year of Manufacture: " + this.yearofManufacture);
    };
    return Vehicle;
}());
var carObj = new Vehicle("Lamborghini Aventador", "Black", "2011-2017");
carObj.carProperties();
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(carModel, carColor, carYearofManufacture, carSeatingCapacity) {
        var _this = _super.call(this, carModel, carColor, carYearofManufacture) || this;
        _this.seatingCapacity = carSeatingCapacity;
        return _this;
    }
    Car.prototype.displayCarDetails = function () {
        console.log("Car Model: " + this.model + ", Car color: " + this.color + ", Car Year of Manufacture: " + this.yearofManufacture + ", Seating Capacity: " + this.seatingCapacity);
    };
    return Car;
}(Vehicle));
var carObj2 = new Car("Lamborghini Aventador", "Black", "2011-2017", 2);
carObj2.displayCarDetails();
