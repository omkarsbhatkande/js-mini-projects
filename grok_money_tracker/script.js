// Load transactions from localStorage
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Initialize Chart (Smaller Size)
const ctx = document.getElementById("expense-chart").getContext("2d");
let expenseChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ff6b6b",
          "#4bc0c0",
          "#ffcd56",
          "#9966ff",
          "#36a2eb",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { position: "bottom", labels: { font: { size: 12 } } } },
  },
});

// Add transaction
function addTransaction() {
  const type = document.getElementById("type").value;
  const category = document.getElementById("category").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const description = document.getElementById("description").value.trim();

  if (!category || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid category and amount.");
    return;
  }

  const transaction = { id: Date.now(), type, category, amount, description };
  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  // Clear form
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";

  updateUI();
}

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  updateUI();
}

// Update UI (summary, table, chart)
function updateUI() {
  // Calculate totals
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  // Update summary
  document.getElementById("total-income").textContent = `₹${totalIncome.toFixed(
    2
  )}`;
  document.getElementById(
    "total-expenses"
  ).textContent = `₹${totalExpenses.toFixed(2)}`;
  document.getElementById("balance").textContent = `₹${balance.toFixed(2)}`;

  // Update table
  const tableBody = document.getElementById("transaction-table");
  tableBody.innerHTML = "";
  transactions.forEach((t) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-3">${t.type.charAt(0).toUpperCase() + t.type.slice(1)}</td>
      <td class="p-3">${t.category}</td>
      <td class="p-3">₹${t.amount.toFixed(2)}</td>
      <td class="p-3">${t.description || "-"}</td>
      <td class="p-3">
        <button onclick="deleteTransaction(${
          t.id
        })" class="text-red-500 hover:text-red-700 transition">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Update chart
  const expenseCategories = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      expenseCategories[t.category] =
        (expenseCategories[t.category] || 0) + t.amount;
    });

  expenseChart.data.labels = Object.keys(expenseCategories);
  expenseChart.data.datasets[0].data = Object.values(expenseCategories);
  expenseChart.update();
}

// Export to Excel
function exportToExcel() {
  const data = transactions.map((t) => ({
    Type: t.type,
    Category: t.category,
    Amount: t.amount,
    Description: t.description || "",
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Transactions");
  XLSX.writeFile(wb, "transactions.xlsx");
}

// Initial UI update
updateUI();
