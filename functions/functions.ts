// Create a simple function which helps to multiple 4 numbers with following criteria -
//   a) 3 numbers must be compulsory, 1 must be optional
//   b) Out of 3 compulsory numbers, 1 must have default value
//   c) The function must print the multiplication of 4 numbers


function multiplication(num1: number, num2: number, num3: number = 1, num4?: number){

    // condition to validate optional parameter. 
    // if optional parameter is passed without validation, output will be NaN. 
    if(num4){
        console.log("Multiplication of four numbers: ", num1 * num2 * num3 * num4); 
    }else{
        console.log("Multiplication of four numbers: ", num1 * num2 * num3 );
    }
}

multiplication(2,2,4,1);  //multiplying 4 numbers
multiplication(2,2,2);   //ignoring optional parameter
multiplication(2,2);    //ignoring default and optional parameter
