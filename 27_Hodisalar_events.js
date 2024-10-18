/* Inline event */
const changeHeading = () => {
  const heading = document.getElementById("heading");
  heading.textContent = "Habaringiz qabul qilindi!";
};

/* Inline event property */
/* const secondChangeHeading = () => {
  const heading = document.getElementById("heading2");
  heading.textContent = "New second sarlavha";
};

const btn = document.getElementById("changeHeadingBtn");
btn.onclick = secondChangeHeading;
*/

/* Event listener */
const secondChangeHeading = () => {
  const heading = document.getElementById("heading2");
  heading.textContent = "New second sarlavha";
};

const btn = document.getElementById("changeHeadingBtn");
btn.addEventListener("click", secondChangeHeading);
