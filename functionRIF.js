//Function that returns a function and that function returns a value.
function createNewFunction(){
    function add2(num){
        return num + 2;
    }
    return add2;
}
const newFunction = createNewFunction();
const result = newFunction(3);
console.log(result);
/**
 * Memory / Variable Environment
 * createNewFunction: function
 * newFunction: function(is the whole definiton of createNewFunction - so it has access to the add2 function)
 * Global execution: Creates a new function called createNewFunction and doenst execute it.
 * Local execution: newFunction gets createNewFunction's function definition and assigns the return value of add2 function.
 * Global execution: Creates a new variable called newFunction and assigns it the value of createNewFunction.
 * Local execution: We go inside newFunction and get the return of add2(3) which when executed returns 5.
 * Global execution: Creates a new variable called result and assigns it the value of newFunction(3) - which is the value of add2(3) - which is 5.
 * Global execution: Prints the value of result to the console.
 */