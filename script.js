

// let person={
//     name:'Alice',
//     age:25,
//     greet:function(){
//         console.log('Hello');
//     }
// };

// alert(person.name);//Alice
// person.greet();


// let fruits=['grapes','banana'];
// console.log(fruits);
// fruits.push('mango');
// console.log(fruits);

// let element=document.getElementById('myElement')



// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// let fahrenheit = 32;
// let celsius = fahrenheitToCelsius(fahrenheit);
// alert(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);


// function decimalToBinary(decimal) {
//     return decimal.toString(2);
// }

// alert(decimalToBinary(5));


function isPrime(number) {
    if (number <= 1) {
      return false; // 
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
  
    return true;
  }
  

  alert(isPrime(4)); 