const number = 12;
let output;

switch (number / 5) {
  case 1:
    output = "bir";
    break;
  case 2:
    output = "ikki";
    break;
  default:
    output = "topilmadi!";
    break;
}

console.log(`Qiymat ${output}`);
