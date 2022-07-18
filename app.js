const counter = document.getElementById("counter");
const button = document.getElementById("button");
const p = document.getElementById("counter_el");
let count = 0;
let resetTime;

button.addEventListener("mouseout", () => {
  resetTime = setTimeout(() => {
    count = 0;
    counter.innerText = count;
  }, 5000);
});


button.addEventListener("click", () => {
  clearTimeout(resetTime);
  count+=1;
  counter.innerText = count;
});
