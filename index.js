const userNumber = document.querySelector('#number')
const convertButton = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

convertButton.addEventListener(("click"), () => {
   if (userNumber.value == ""){
      output.innerHTML = ('Please enter a valid number');
   }else if (userNumber.value <= 0) {
      output.innerHTML = ('Please enter a number greater than or equal to 1');
   } else if (userNumber.value > 3999){
      output.innerHTML = ('Please enter a number less than or equal to 3999');
   }
})