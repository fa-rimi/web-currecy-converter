// Program was running script tag first before running HTML so I added the event listener "DOMContentLoaded" to access the element
document.addEventListener("DOMContentLoaded", () => {
  const convertBttn = document.getElementById("bttn");

  console.log(bttn); // HTMLButtonElement object

  convertBttn.addEventListener("click", () => {
    console.log("Conversion Success!");
  });
});

// credit: https://codingbeautydev.com/blog/javascript-cannot-read-property-addeventlistener-of-null/
