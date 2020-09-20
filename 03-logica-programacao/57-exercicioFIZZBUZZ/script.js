const number1a100 = Math.floor(Math.random() * 100 + 1);

const fizzBuzz = (number) => {
  console.log(`NUMERO: ${number}`);
  if (isNaN(number)) {
    return number;
  } else if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
};

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

//console.log(fizzBuzz(number1a100));
