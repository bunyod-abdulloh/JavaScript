const notifyDoubleClick = (event) => {
  console.log(event);
  console.log("Element ikki marta bosildi!");
};

const btn = document.getElementById("btn");
btn.addEventListener("dblclick", notifyDoubleClick);
console.log(btn);

document.addEventListener("keydown", (event) => {
  console.log(`key: ` + event.key);
  console.log(`code: ` + event.code);
});
