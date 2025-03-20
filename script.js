//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function () {
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let isbn = document.getElementById("isbn").value.trim();

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all fields!");
        return;
    }

    let bookList = document.getElementById("book-list");
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});

// Event delegation for delete buttons
document.getElementById("book-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});
