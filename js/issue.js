document.getElementById("issueForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const bookId = document.getElementById("bookId").value.trim();
    const bookName = document.getElementById("bookName").value.trim();
    const issueDate = document.getElementById("issueDate").value;

    
    if (
        studentId === "" ||
        studentName === "" ||
        bookId === "" ||
        bookName === "" ||
        issueDate === ""
    ) {
        alert(" Please fill all fields");
        return;
    }

    
    const issueData = {
        studentId,
        studentName,
        bookId,
        bookName,
        issueDate
    };

    
    let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

    
    issuedBooks.push(issueData);

    
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    alert(" Book Issued Successfully!");

    
    document.getElementById("issueForm").reset();
});
