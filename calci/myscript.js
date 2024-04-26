const display=document.getElementById("display");
function clearDisplay(){
    display.value=" "

}
function  deleteVal(){
    display.value=display.value.slice(0,-1);

}
function appendToDisplay(input){
    display.value=display.value+input;
}
function claculate(){
    try{
        display.value=eval(display.value);

    }
    catch(error){
        display.value="ERROR";
    }
   
}
