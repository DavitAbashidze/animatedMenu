const select = document.getElementById("select");
const body = document.querySelector("body");

select.addEventListener("change", (e) => {
  let theme = e.target.value;
  document.documentElement.classList = "";
  if (theme === "dark") {
    document.documentElement.classList.add(theme);
  } else if (theme === "purple") {
    document.documentElement.classList.add(theme);
  }
});

// const body = document.querySelector("body");
// const btn = document.getElementById("btn");

// const color = ["green", "blue", "orange", "purple"];

// body.style.backgroundColor = "black";

// btn.addEventListener("click", () => {
//   const colorIndex = parseInt(Math.random() * color.length);
//   body.style.backgroundColor = color[colorIndex];
//   body.style.transition = " 1s linear";
// });
