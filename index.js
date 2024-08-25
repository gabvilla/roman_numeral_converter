const userNumber = document.querySelector('#number')
const convertButton = document.querySelector('#convert-btn');
const output = document.querySelector('#output');
const romanNumerals = [
   ['M', '1000'],
   ['CM', '900'],
   ['D', '500'],
   ['CD', '400'],
   ['C', '100'],
   ['XC', '90'],
   ['L', '50'],
   ['XL', '40'],
   ['X', '10'],
   ['IX', '9'],
   ['V', '5'],
   ['IV', '4'],
   ['I', '1']
]

convertButton.addEventListener(("click"), () => {
   let resultArray = []
   if (userNumber.value == "" || isNaN(userNumber.value)){
      output.innerHTML = ('Please enter a valid number');
   }else if (userNumber.value <= 0) {
      output.innerHTML = ('Please enter a number greater than or equal to 1');
   } else if (userNumber.value > 3999){
      output.innerHTML = ('Please enter a number less than or equal to 3999');
   } else {
      let inputArray = []
      inputArray = Array.from(userNumber.value);
      romanNumerals.forEach(element => {
        let numberArray = Array.from(romanNumerals[romanNumerals.indexOf(element)][1])
        if (inputArray.length == numberArray.length){
         resultArray.push(romanNumerals[romanNumerals.indexOf(element)][0])
         console.log(resultArray);
        }
      });
   }
})