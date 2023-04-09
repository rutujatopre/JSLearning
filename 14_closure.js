
let globalVariable = 500;
function outer(){
    console.log("This is outer function");
    let outerFunVariable = 300;
    let inner = function(){

        console.log("This is inner function");
        let innerFunVariable = 100;
        console.log(innerFunVariable);// we can access own variable
        console.log(outerFunVariable);// we can access outerFunction varible 
        console.log(globalVariable);// we can access global Variable 

    }
    //console.log(innerFunVariable); //not able to access

    return inner;
}

const innerFun = outer();
//console.log(innerFun);
innerFun();

outer()();//another method to call inner function


