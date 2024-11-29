
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
}

function toggleView() {
    const table = document.getElementById("gptTable");
    const cardContainer = document.getElementById("cardContainer");
    if (table.style.display === "none") {
        table.style.display = "table";
        cardContainer.style.display = "none";
    } else {
        table.style.display = "none";
        cardContainer.style.display = "flex";
    }
}

function toggleDetail() {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.classList.toggle("compact");
}

function filterByCategory() {
    const category = document.getElementById("categoryFilter").value;
    const rows = document.querySelectorAll("#gptTable tbody tr");
    const cards = document.querySelectorAll("#cardContainer .card");

    rows.forEach(row => {
        row.style.display = category === "all" || row.dataset.category === category ? "" : "none";
    });

    cards.forEach(card => {
        card.style.display = category === "all" || card.dataset.category === category ? "block" : "none";
    });
}

function searchGPTs() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const rows = document.querySelectorAll("#gptTable tbody tr");
    const cards = document.querySelectorAll("#cardContainer .card");

    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
    });

    cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
}

function sortTable(columnIndex) {
    const table = document.getElementById("gptTable");
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => a.cells[columnIndex].textContent.localeCompare(b.cells[columnIndex].textContent));
    rows.forEach(row => table.tBodies[0].appendChild(row));
}
