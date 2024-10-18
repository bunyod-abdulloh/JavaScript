// kvadrat_one(2) //;
const kvadrat_one = function (son) {
  return son * son;
};
console.log(kvadrat_one(10)); // 100;

const kvadrat_two = (son) => {
  return son * son;
};
console.log(kvadrat_two(11)); // 121

const kvadrat_three = (son) => son * son;
console.log(kvadrat_three(12)); // 144

const print = () => console.log("Printing...");
print(); // Printing...

const volume = (a, b, c) => a * b * c;
volume(1, 2, 3); // 6
console.log(volume(1, 2, 3));
