document.addEventListener("DOMContentLoaded", () => {

  
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
<<<<<<< HEAD
    const statusCell = row.cells[4];
=======
    const statusCell = row.cells[4]; // Status column
>>>>>>> 30a2e0de9217bd082a3bd016a2ec2dbb0b1301dd
    const statusText = statusCell.textContent.trim();

    if (statusText === "Available") {
      statusCell.style.color = "green";
      statusCell.style.fontWeight = "bold";
    } 
    else if (statusText === "Issued") {
      statusCell.style.color = "red";
      statusCell.style.fontWeight = "bold";
    }
  });

  
  rows.forEach(row => {
    row.addEventListener("click", () => {
      const bookName = row.cells[1].textContent;
      alert("You selected: " + bookName);
    });
  });

});
