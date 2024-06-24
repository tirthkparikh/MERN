const root = document.getElementById("root");
console.log("hi");

fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Log the actual data
        root.innerHTML = `<ul>${data.map(({ name }) => `<li>${name}</li>`)}</ul>`;
    })
    .catch(error => console.log(error));
