document.getElementById("searchButton").addEventListener("click", function () {
    // Fetch the Avengers list from the server
    fetch("superheroes.php")
        .then(response => response.text())
        .then(data => {
            // Display the data in a formatted way in the modal
            document.getElementById("characterList").innerHTML = data;
            showModal();
        })
        .catch(error => {
            alert("There was a problem fetching the data: " + error.message);
        });
});

function showModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
