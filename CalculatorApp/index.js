let display = document.getElementById("display");

function apppendToDisplay(input)
{
   display.value += input;
}
function clearContentList()
{
   display.value = "";
}
function calculate()
{
   try{
      display.value = eval(display.value);
   }
   catch(error)
   {
      display.value = "Error";
   }
   
}