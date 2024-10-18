/* const yosh = "23"; // String
type_yosh = typeof yosh;
console.log(yosh); // String
console.log("Bu yosh turi " + type_yosh);

console.log(Number(yosh)); // Number
console.log(yosh + 1); // 231 (concatenation)
console.log(Number(yosh) + 1); // 24

const ism = "Ulugbek";
console.log(Number(ism)); // NaN

const yil = 2021; // Number
console.log(yil); // Number
console.log(String(yil)); // String

console.log("Men " + 1997 + "chi yilda tavallud topganman"); // auto string conversion

console.log("30" - "10" - 5); // auto number conversion */

// Falsy qiymatlar
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0n));

// Truthy qiymatlar
console.log(Boolean("Ulugbek"));
console.log(Boolean(23));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean("false"));

const ism_empty = "";
if (ism_empty) {
  console.log("Sizning ismingiz: " + ism_empty);
} else {
  console.log("Iltimos ism kiriting");
}
