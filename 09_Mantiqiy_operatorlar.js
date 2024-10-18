let yosh_one = 10;
A = yosh_one > 18; /* yosh 18dan katta --> Yolg'on (False) */
B = yosh_one < 20; /* yosh 20 dan kichik --> Rost (True)*/
let message_a = `Bu yosh_one A natijasi | ${A}`;
let message_b = `Bu yosh_one B natijasi | ${B}`;
console.log(message_a);
console.log(message_b);
/*
AND operatori
A AND B --> Yolg'on (False)

OR operatori

A OR B --> Rost (True)

NOT operatori
NOT A --> Rost (True)
NOT B --> Yolg'on (False) */

const yosh_two = 10;
const a_two = yosh_two > 18; // false
const b_two = yosh_two < 20; // true
const c_two = `Bu a_two ${a_two} Bunisi esa b_two ${b_two}`;
console.log(c_two);

// AND operatori
console.log(a_two && b_two); // false

// OR operatori
console.log(a_two || b_two); // true

// NOT operatori
console.log(!a_two); // true
console.log(!b_two); // false

const htmlPassed = true;
const cssPassed = false;
let message = "";

if (htmlPassed && cssPassed) {
  message = "Siz Bootstrap kursini boshlashingiz mumkin!";
} else if (htmlPassed || cssPassed) {
  message = "Iltimos ikkinchi kursni ham tugating!";
} else {
  message = "Iltimos birinchi ikkala kursni tugatib chiqing!";
}
console.log(message);
