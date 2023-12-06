// Retrieve form data from local storage
const formData = JSON.parse(localStorage.getItem("formData"));

// Display form data in a table
const formDataDisplay = document.getElementById("formDataDisplay");

// Use Object.entries for a more concise iteration through the object
Object.entries(formData).forEach(([key, value]) => {
  const row = document.createElement("tr");

  // Create cells and assign text content directly during cell creation
  const cell1 = document.createElement("td");
  cell1.textContent = key;

  const cell2 = document.createElement("td");
  cell2.textContent = value;

  // Append cells to the row once
  row.appendChild(cell1);
  row.appendChild(cell2);

  // Append the completed row to the table once
  formDataDisplay.appendChild(row);
});

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// Function to convert table data to CSV format
function convertToCSV() {
  const rows = formDataDisplay.querySelectorAll("tr");
  let csvContent = "data:text/csv;charset=utf-8,";

  rows.forEach(row => {
    const rowData = [];
    row.querySelectorAll("td").forEach(cell => {
      rowData.push(cell.textContent);
    });
    csvContent += rowData.join(",") + "\n";
  });

  // Create a temporary anchor element to trigger the download
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "formData.csv");
  
  document.body.appendChild(link); // Append the link to the body
  link.click(); // Simulate click on the link to download the CSV file
  document.body.removeChild(link); // Remove the link from the body
}

// Trigger the export function, for example, on a button click
const exportButton = document.getElementById("exportButton");
exportButton.addEventListener("click", convertToCSV);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let modeBtn = document.querySelector("#mode");
      let currMode = "light";

      modeBtn.addEventListener("click", () => {
        if (currMode === "light") {
          currMode = "dark";
          document.querySelector("body").style.backgroundColor = "black";
          document.querySelector("body").style.color = "white";
          document.querySelector("#mode").style.backgroundColor = "black";
          document.querySelector("#mode").style.color = "white";
        } else {
          currMode = "light";
          document.querySelector("body").style.backgroundColor = "white";
          document.querySelector("body").style.color = "black";
          document.querySelector("#mode").style.backgroundColor = "#007bff";
          document.querySelector("#mode").style.color = "white";



        }
      });