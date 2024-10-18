function meningFunksiyam(son1, son2) {
  return son1 + son2;
}

result = meningFunksiyam(50, 50);
console.log(result);

a = kvadrat(2); // 4;
console.log(a);

function kvadrat(son) {
  natija = son * son;
  message = `Kiritilgan son: ${son} Natija: ${natija}`;
  return message;
}

b = kvadrat(10); // 100;
console.log(b);
