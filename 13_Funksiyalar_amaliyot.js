/* // Function declaration
function evenOrOddDec(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

evenOrOddDec(6);

// Function expression
const evenOrOddExp = function (number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
};
evenOrOddExp(20);

// Arrow function
const evenOrOddArrow = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
};
evenOrOddArrow(21);

// Function declaration
function maxDec(number1, number2) {
  if (number1 >= number2) {
    return number1;
  }
  return number2;
}
console.log(maxDec(2, 20));

// Function expression
const maxExp = function (number1, number2) {
  if (number1 >= number2) {
    return number1;
  }
  return number2;
};
console.log(maxExp(3, 1));

// Arrow function
const maxArrow = (number1, number2) => {
  if (number1 >= number2) {
    return number1;
  }
  return number2;
};
console.log(maxArrow(0, 1)); */

// Function declaration
function reverseDec(number) {
  const numberStr = String(number);
  const reversedStr = numberStr.split("").reverse().join("");
  return Number(reversedStr);
}
console.log(reverseDec(102));

// Function expression
const reverseExp = function (number) {
  const numberStr = String(number);
  const reversedStr = numberStr.split("").reverse().join("");
  return Number(reversedStr);
};
console.log(reverseExp(1245));

// Arrow function
const reverseArrow = (number) => {
  const numberStr = String(number);
  const reversedStr = numberStr.split("").reverse().join("");
  return Number(reversedStr);
};
console.log(reverseArrow(456789));
