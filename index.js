const form = document.querySelector('form')
const convertButton = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

const convertToRoman = num => {
   const romanNumerals = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
   ];

   const res = [];

   romanNumerals.forEach(function (arr) {
      while (num >= arr[1]) {
         res.push(arr[0]);
         num -= arr[1];
       }         
   });

   return res.join('');
};

const formValidation = () => {
   const errorText = '';

   if (userNumber.value == "" || isNaN(userNumber.value)){
      errorText = 'Please enter a valid number';
   }else if (userNumber.value <= 0) {
      errorText = 'Please enter a number greater than or equal to 1';
   } else if (userNumber.value > 3999){
      errorText = 'Please enter a number less than or equal to 3999';
   } else {
      return true
   };

   output.innerText = errorText;

   return false
};

const clearOutput = () => {
   output.innerText = '';
}

form.addEventListener('submit', e => {
   e.preventDefault();
   updateUI();
 });

 convertButton.addEventListener('click', () => {
   updateUI();
 })

 const updateUI = () => {
   const numStr = document.querySelector('#number').value;
   const int = parseInt(numStr, 10);

   clearOutput();

   if (formValidation){
      output.innerText = convertToRoman(int);
   }
 }



