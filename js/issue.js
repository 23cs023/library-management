document.getElementById("issueForm").addEventListener("submit", function (e) {
    e.preventDefault(); // page refresh stop

    // Get values
    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const bookId = document.getElementById("bookId").value.trim();
    const bookName = document.getElementById("bookName").value.trim();
    const issueDate = document.getElementById("issueDate").value;

    // Validation
    if (
        studentId === "" ||
        studentName === "" ||
        bookId === "" ||
        bookName === "" ||
        issueDate === ""
    ) {
        alert("⚠️ Please fill all fields");
        return;
    }

    // Create issue object
    const issueData = {
        studentId,
        studentName,
        bookId,
        bookName,
        issueDate
    };

    // Get existing issued books or empty array
    let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

    // Add new issue
    issuedBooks.push(issueData);

    // Save to localStorage
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    alert("✅ Book Issued Successfully!");

    // Clear form
    document.getElementById("issueForm").reset();
});
