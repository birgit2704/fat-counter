let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total");
let count = 0;
let total = JSON.parse(localStorage.getItem("total"));

totalEl.textContent = "Total points today: " + total;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  total += count;
  totalEl.textContent = "Total points today: " + total;
  countEl.textContent = 0;
  count = 0;
  localStorage.setItem("total", JSON.stringify(total));
}
