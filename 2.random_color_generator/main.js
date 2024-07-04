const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexBackgroundColour = document.querySelector(".hex-color-container");
const hexCpyBtn = document.querySelector(".hex-cpy-btn");

// Create Random HEX color

hexBtn.addEventListener("click", (e) => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
  }
  hexColorValue.textContent = `#${hexColorOutput}`;
  hexBackgroundColour.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;
});

hexCpyBtn.addEventListener("click", () => {
  let colorsave = hexColorValue.textContent;
  navigator.clipboard.writeText(colorsave);
  alert(`Copy to clipboard ${colorsave} is the hex color`);
});

// Change HexColor Value

const redcol = document.getElementById("red");
const greencol = document.getElementById("green");
const bluecol = document.getElementById("blue");
const RGBbtn = document.querySelector(".rgb-btn");
const rgbBackgroundColor = document.querySelector(".rgb-color-container");
const rgbCpyBtn = document.querySelector(".rgb-cpy-btn");

RGBbtn.addEventListener("click", (e) => {
  let rgbcolor = `rgb(${redcol.value}, ${greencol.value}, ${bluecol.value})`;
  rgbBackgroundColor.style.backgroundColor = rgbcolor;
  RGBbtn.style.color = rgbcolor;
  console.log(rgbcolor);
});

rgbCpyBtn.addEventListener("click", () => {
  let rgbcolor = `rgb(${redcol.value}, ${greencol.value}, ${bluecol.value})`;
  navigator.clipboard.writeText(rgbcolor);
  alert(`rgb Color is copied ${rgbcolor}`);
});
