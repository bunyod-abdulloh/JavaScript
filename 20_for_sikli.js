for (let i = 0; i < 10; i++) {
  console.log("Salom dunyo!");
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(`Summa: ${sum}`);

// break
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log("Loop tugadi!");
    break;
  } else {
    console.log("Loop hali tugamadi!");
  }
  console.log(i);
}

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("3 continue qilindi");
    continue;
  }
  console.log(i);
}
