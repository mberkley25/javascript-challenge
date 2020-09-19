// Get references to the table , select into fields
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");



// copy of data from data.js
var tableData = data;

// Build table 
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get address objects and fields
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create new row in table
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // create cell and insert data into cells
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// Build search
function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  
  // Filter on date -- issues
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  renderTable();
}


// Render the table for the first time on page load
renderTable();
