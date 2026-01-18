
document.getElementById("returnForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    let studentId = document.getElementById("studentId").value.trim();
    let bookId = document.getElementById("bookId").value.trim();
    let returnDate = document.getElementById("returnDate").value;

    if (studentId === "" || bookId === "" || returnDate === "") {
        alert("Please fill all fields!");
        return;
    }

    
    alert(
        "Book Returned Successfully!\n\n" +
        "Student ID: " + studentId + "\n" +
        "Book ID: " + bookId + "\n" +
        "Return Date: " + returnDate
    );


    document.getElementById("returnForm").reset();
});
