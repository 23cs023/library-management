document.getElementById("issueForm").addEventListener("submit", function (e) {
<<<<<<< HEAD
    e.preventDefault(); 

    
=======
    e.preventDefault(); // page refresh stop

    // Get values
>>>>>>> 30a2e0de9217bd082a3bd016a2ec2dbb0b1301dd
    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const bookId = document.getElementById("bookId").value.trim();
    const bookName = document.getElementById("bookName").value.trim();
    const issueDate = document.getElementById("issueDate").value;

<<<<<<< HEAD
    
=======
    // Validation
>>>>>>> 30a2e0de9217bd082a3bd016a2ec2dbb0b1301dd
    if (
        studentId === "" ||
        studentName === "" ||
        bookId === "" ||
        bookName === "" ||
        issueDate === ""
    ) {
<<<<<<< HEAD
        alert(" Please fill all fields");
        return;
    }

    
=======
        alert("⚠️ Please fill all fields");
        return;
    }

    // Create issue object
>>>>>>> 30a2e0de9217bd082a3bd016a2ec2dbb0b1301dd
    const issueData = {
        studentId,
        studentName,
        bookId,
        bookName,
        issueDate
    };

<<<<<<< HEAD
    
    let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

    
    issuedBooks.push(issueData);

    
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    alert(" Book Issued Successfully!");

    
=======
    // Get existing issued books or empty array
    let issuedBooks = JSON.parse(localStorage.getItem("issuedBooks")) || [];

    // Add new issue
    issuedBooks.push(issueData);

    // Save to localStorage
    localStorage.setItem("issuedBooks", JSON.stringify(issuedBooks));

    alert("✅ Book Issued Successfully!");

    // Clear form
>>>>>>> 30a2e0de9217bd082a3bd016a2ec2dbb0b1301dd
    document.getElementById("issueForm").reset();
});
