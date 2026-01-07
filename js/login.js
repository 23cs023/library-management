document.addEventListener("DOMContentLoaded", () => {

  
  const loginBtn = document.getElementById("button");

  loginBtn.addEventListener("click", () => {

    
    const name = document.getElementById("fname").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phonenumber").value.trim();
    const dob = document.getElementById("date").value.trim();
    const email = document.getElementById("StudentEmail").value.trim();
    const password = document.getElementById("StudentPassword").value.trim();

    
    if (!name || !age || !phone || !dob || !email || !password) {
      alert("All fields must be filled");
      return;
    }

    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    
    if (email === "student@gmail.com" && password === "student123") {
      alert("Login Successful");
      window.location.href = "student_dashboard.html";
    } else {
      alert("Invalid Email or Password");
    }
  });

});
