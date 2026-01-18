

function searchStudent() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();

    let table = document.querySelector("table");
    let tr = table.getElementsByTagName("tr");


    for (let i = 1; i < tr.length; i++) {
        let tdId = tr[i].getElementsByTagName("td")[0];
        let tdName = tr[i].getElementsByTagName("td")[1];

        if (tdId || tdName) {
            let txtValue =
                tdId.textContent.toUpperCase() +
                " " +
                tdName.textContent.toUpperCase();

            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
