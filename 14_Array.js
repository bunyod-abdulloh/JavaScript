const languages_oddiy = ["js", "java", "go"];

const languages_new = new Array("js", "java", "go");
console.log(`languages_oddiy | (${languages_oddiy})`);
console.log(`languages_new | (${languages_new})`);

// bo'sh array
const emptyArray = [];

// sonlar array'i
const sonArray = [1, 2, 9, -2];
console.log(`sonArray | (${sonArray})`);

// stringlar array'i
const stringArray = ["Javascript", "Java", "Go"];
console.log(`stringArray | (${stringArray})`);

// aralash qiymatlardan tashkil topgan array
const mixedArray = ["Javascript", 2, false, null];
console.log(`mixedArray | (${mixedArray}null)`);

const helloArray = ["h", "e", "l", "l", "o"];
console.log(`helloArray | (${helloArray})`);

// birinchi element
console.log(`helloArray[0] | (${helloArray[0]})`); // "h"

// uchinchi element
console.log(`helloArray[2] | (${helloArray[2]})`); // "e"

const languages_push = ["js", "java"];
console.log(`languages_push | (${languages_push})`);
languages_push.push("go");
console.log(`languages_push | (${languages_push})`); // ['js', 'java', 'go']

const languages_unshift = ["js", "java"];
console.log(`languages_unshift | (${languages_unshift})`);
languages_unshift.unshift("go");
console.log(`languages_unshift | (${languages_unshift})`); // ['go', 'js', 'java']

const languages_five = ["js", "java", "go"];
console.log(`languages_five (${languages_five})`);
languages_five[1] = "swift";
console.log(`languages_five languages_five[1] = "swift" | (${languages_five})`); // ['js', 'swift', 'go']

const languages_pop = ["js", "java", "go", "swift"];
console.log(`languages_pop (${languages_pop})`);
const deletedLanguageSix = languages_pop.pop();
console.log(
  `deletedLanguageSix = languages_pop.pop() | (${deletedLanguageSix})`
); // swift

const languages_seven = ["js", "java", "go", "swift"];
console.log(`language_seven (${languages_seven})`);
const deletedLanguageSeven = languages_seven.shift();
console.log(
  `deletedLanguageSeven = languages_seven.shift() | (${deletedLanguageSeven})`
); // js

const languages_eight = ["js", "java", "go"];
const len_ = languages_eight.length;
console.log(`languages_eight.length | (${len_})`); // 3
