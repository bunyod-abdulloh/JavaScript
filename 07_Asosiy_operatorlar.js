{
  /* <chap operand> operator <o'ng operand> // son1 + son2
<chap operand> operator // son1++
operator <o'ng operand> // --son2 */
}

/* let a = 5,
  b = 10;
console.log(a + b); // 15
console.log(a - b); // -5
console.log(a * b); // 50
console.log(a / b); // 0.5
console.log(a % b); // 5
console.log(a++); // 5 (post-increment)
console.log(a); // 6
console.log(++a); // 7 (pre-increment)
console.log(a); // 7
console.log(b--); // 10 (post-decrement)
console.log(b); // 9
console.log(--b); // 8 (pre-decrement)
console.log(b); // 8 */

/* let a = 5,
  b = 10,
  c = "5";
const z = a;
console.log(a == c); // true
console.log(a === c); // false
console.log(a == z); // true
console.log(a === z); // true
console.log(a != b); // true
console.log(a != z); // false
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true */

let a = 5,
  b = 10,
  c = 15;
console.log(a); // 5
a = b;
console.log(a); // 10
a += b;
console.log(a); // 20
a -= b;
console.log(b); //10
c *= b;
console.log(c); // 150
c /= 5;
console.log(c); // 30
b %= 2;
console.log(b); // 0
