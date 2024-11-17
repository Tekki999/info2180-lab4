document.getElementById("searchButton").addEventListener("click", function () {
    
    const query = encodeURIComponent(document.getElementById("searchField").value.trim());
    
    const xhr = new XMLHttpRequest();
    
    const url = query
        ? `http://localhost/info2180-lab4/superheroes.php?query=${query}`
        : `http://localhost/info2180-lab4/superheroes.php`;

    
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { 
            if (xhr.status === 200) { 
                document.getElementById("result").innerHTML = xhr.responseText;
            } else {
                document.getElementById("result").innerHTML = `<p>Error fetching data: ${xhr.statusText}</p>`;
            }
        }
    };

    
    xhr.send();
});
