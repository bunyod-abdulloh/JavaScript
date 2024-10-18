/* Element yaratish */
const paragraph = document.createElement("p");

const text = document.createTextNode("Bu yerda xatboshi yozilgan");

/* Element qo'shish */
paragraph.appendChild(text);
console.log(paragraph);

const box = document.getElementById("box");
box.appendChild(paragraph);

console.log(box.parentElement);
console.log(box.children);

/* Elementni o'chirish */
box.remove();
