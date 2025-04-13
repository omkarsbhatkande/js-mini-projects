// Handle form submission
document
  .getElementById("money-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    const salary = parseFloat(document.getElementById("salary").value);
    const loanEmi = parseFloat(document.getElementById("loan-emi").value);
    const petrol = parseFloat(document.getElementById("petrol").value);
    const sip = parseFloat(document.getElementById("sip").value);
    const gym = parseFloat(document.getElementById("gym").value);
    const solar = parseFloat(document.getElementById("solar").value);
    const customExpenseName = document.getElementById("custom-expenses").value;
    const customExpenseAmount = parseFloat(
      document.getElementById("custom-expenses-amount").value
    );
    const customSavingName = document.getElementById("custom-savings").value;
    const customSavingAmount = parseFloat(
      document.getElementById("custom-savings-amount").value
    );

    // Calculate total expenses and remaining money
    const totalExpenses =
      loanEmi + petrol + sip + gym + solar + customExpenseAmount;
    const remainingMoney = salary - totalExpenses;

    // Prepare data for the Excel
    const data = [
      [
        "Month",
        "Salary",
        "Loan EMI",
        "Petrol",
        "SIP",
        "Gym Fee",
        "Solar Saving",
        "Custom Expense",
        "Custom Expense Amount",
        "Custom Saving",
        "Custom Saving Amount",
        "Remaining Money",
      ],
      [
        "May",
        salary,
        loanEmi,
        petrol,
        sip,
        gym,
        solar,
        customExpenseName,
        customExpenseAmount,
        customSavingName,
        customSavingAmount,
        remainingMoney,
      ],
      // Add more months as needed
    ];

    generateExcel(data);

    // Generate and display monthly summary and trend
    generateSummaryChart(
      salary,
      loanEmi,
      petrol,
      sip,
      gym,
      solar,
      customExpenseAmount,
      remainingMoney
    );
    generateTrendChart();

    // Show analytics for overspending
    showAnalytics(totalExpenses, remainingMoney);
  });

// Generate Excel file
function generateExcel(data) {
  const sheet = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, sheet, "Expenses");
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Money_Management_Plan.xlsx";

  document.getElementById("excel-download").style.display = "block";
  link.click();
}

// Convert string to ArrayBuffer
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
}

// Generate a summary chart with remaining money
function generateSummaryChart(
  salary,
  loanEmi,
  petrol,
  sip,
  gym,
  solar,
  customExpense,
  remainingMoney
) {
  const ctx = document.getElementById("expense-summary").getContext("2d");
  const data = {
    labels: [
      "Salary",
      "Loan EMI",
      "Petrol",
      "SIP",
      "Gym",
      "Solar",
      "Custom Expense",
      "Remaining Money",
    ],
    datasets: [
      {
        label: "Monthly Expenses and Remaining Money",
        data: [
          salary,
          loanEmi,
          petrol,
          sip,
          gym,
          solar,
          customExpense,
          remainingMoney,
        ], // User input data
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(ctx, config);
}

// Generate a trend line chart for spending over months
function generateTrendChart() {
  const ctx = document.getElementById("expense-trend").getContext("2d");
  const data = {
    labels: ["May", "June", "July", "August", "September", "October"],
    datasets: [
      {
        label: "Monthly Expenses Trend",
        data: [15000, 15500, 16000, 15500, 16000, 16500], // Sample expense trend data
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: "Remaining Money Trend",
        data: [5000, 4500, 4000, 4500, 4000, 3500], // Sample remaining money trend data (modify as per real data)
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(ctx, config);
}

// Push Notification setup
if ("Notification" in window && "serviceWorker" in navigator) {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
}

function triggerReminder() {
  if (Notification.permission === "granted") {
    new Notification("Reminder: Your EMI is due soon!");
  }
}

// Show Analytics - Tracking overspending
function showAnalytics(totalExpenses, remainingMoney) {
  const limit = 20000; // Example threshold for overspending

  // Check if the total expenses exceed the limit
  if (totalExpenses > limit) {
    const overspending = totalExpenses - limit;
    alert(
      `You are overspending by ₹${overspending}. Consider adjusting your budget.`
    );
  } else {
    alert("Your expenses are within the budget.");
  }

  // Display remaining money analytics
  if (remainingMoney < 0) {
    alert(
      "Warning: Your remaining money is negative. Please consider adjusting your expenses."
    );
  } else {
    alert(`Remaining Money: ₹${remainingMoney}`);
  }
}
