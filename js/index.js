
document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link=> {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
      const page = link.textContent.trim();

      switch (page) {
        case "Home":
          window.location.href = "index.html";
          break;

        case "Books":
          window.location.href = "books.html";
          break;

        case "Students":
          window.location.href = "students.html";
          break;

        case "Issue Book":
          window.location.href = "issue.html";
          break;

        case "Return Book":
          window.location.href = "return.html";
          break;

        case "Login":
          window.location.href = "login.html";
          break;

        default:
          alert("Page not found");
      }
    });
  });

});
