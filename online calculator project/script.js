//creating a reset button for reseting value.
const clearButton= document.querySelector(".reset-button");
clearButton.addEventListener("click",resetInput);//event listener to set the button on action/click.

const addButton= document.querySelector(".addition-button");//event handler for add button.
addButton.addEventListener("click",addInput);

const multiplyButton=document.querySelector(".multiply-button");//event handler for multiply button.
multiplyButton.addEventListener("click",multiplyInput);

const divideButton=document.querySelector(".divide-button");//event handler for divide button.
divideButton.addEventListener("click",divideInput);

const minusButton=document.querySelector(".minus-button");//event handler for minus button.
minusButton.addEventListener("click",minusInput);

const moduloButton=document.querySelector(".modulo-button");//event handler modulus button.
moduloButton.addEventListener("click",moduloInput);

const squareButton=document.querySelector(".square-button");//event handler for square fucntion button.
squareButton.addEventListener("click",squareInput);

const equalsButton=document.querySelector(".equals-button");//event handler for equals button
equalsButton.addEventListener("click",displayResult);

//declaring global variables num3 and result which is used in the final display of the result.
{
    var num3;
    var result;
}
//function to reset the text fields and result field.
function resetInput()
{
    document.querySelector(".number-1").value="";
    document.querySelector(".number-2").value="";
    document.querySelector(".final-answer").textContent="";
}
//function to find the square of a number.
function squareInput()
{
    const value1=document.querySelector(".number-1").value;
    const value2=document.querySelector(".number-2").value;

    if(value1==""){
        const num2=parseFloat(value2);
        num3=num2*num2;                 //works for any one entry in the text fields otherwise the top entry is considered.
    }
    else{
        const num1=parseFloat(value1);
        num3=num1*num1;
    }
}
//function to find the remainder.
function moduloInput()
{
    const value1=document.querySelector(".number-1").value;
    const value2=document.querySelector(".number-2").value;

    const num1=parseFloat(value1);
    const num2=parseFloat(value2);
    num3=num1%num2;
}
//function to find the difference of two nuumbers
function minusInput()
{
    const value1=document.querySelector(".number-1").value;
    const value2=document.querySelector(".number-2").value;

    const num1=parseFloat(value1);
    const num2=parseFloat(value2);
    num3=num1-num2;
}
//function to find the sum of two numbers.
function addInput()
{
    const value1=document.querySelector(".number-1").value;
    const value2=document.querySelector(".number-2").value;

    const num1=parseFloat(value1);
    const num2=parseFloat(value2);
    num3=num1+num2;
}
//function to find the quotient.
function divideInput()
{

    const value1=document.querySelector(".number-1").value;
    const value2=document.querySelector(".number-2").value;

    const num1=parseFloat(value1);
    const num2=parseFloat(value2);
    num3=num1/num2;
}

//function to find product of two numbers.
function multiplyInput()
{
    const value1=document.querySelector(".number-1").value;
    const value2=document.querySelector(".number-2").value;

    const num1=parseFloat(value1);
    const num2=parseFloat(value2);
    num3=num1*num2;

}
//function to display the result
function displayResult()
{
    if(isNaN(num3)){
        document.querySelector(".final-answer").textContent="Enter a numeric value";//returns true is num3 is not a number.
    }
    else{
        result=num3.toString();
        document.querySelector(".final-answer").textContent=result;//prints the result if num3 is a numeric value.
    }
}