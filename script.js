//your code here
const table = document.getElementById("table");
const price = document.querySelectorAll(".prices");
let total = 0;
for(let amount of price){
	total += parseFloat(amount.innerText);
}

const row = table.insertRow(-1);
const cell1 = row.insertCell(0);
cell1.innerText = total;
cell1.setAttribute('id','grandTotal');