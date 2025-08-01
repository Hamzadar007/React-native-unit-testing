const { add, subtract, multiply, divide } = require("./mathUtils");


const calculator = (a, b, action)=>{
    switch (action) {
        case "add":
            add(a,b)
            break;
        case "subtract":
            subtract(a,b)
            break;
        case "multiply":
             multiply(a,b)
            break;
        case "divide":
             divide(a,b)
            break;

     
    }
}

module.exports=calculator