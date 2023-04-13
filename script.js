//your code here
const table = document.getElementById("table");
const price = document.querySelectorAll('[data-ns-test="price"]');
let total = 0;
for(let amount of price){
	total += parseFloat(amount.innerText);
}

const row = document.createElement("tr");
const cell = document.createElement("td");
cell.innerText = total;
cell.dataset.nsTest = "grandTotal";
row.appendChild(cell);
table.appendChild(row);