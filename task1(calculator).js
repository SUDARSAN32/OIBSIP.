const display1=document.getElementById("display");

function appendtodisplay(input){
    display1.value += input;
}
function clearDisplay()
{
    display1.value="";
}
function calculate(){
    try{
    display1.value=eval(display1.value);
    }
    catch(error)
    {
display1.value="Error";
    }
}
