const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")

// buttonShowAnimals.addEventListener("click", () => {
//     fetch("http://127.0.0.1:3000/tiere", )
//     .then(res => res.json())
//     .then(data => displayData(data))

//     function displayData(data) {
//         console.log(data)
//     }
// });

buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000/tiere")
    displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";
        data.forEach(tier => {
            console.log(tier)
            const li = document.createElement("li");
            li.textContent = tier.name;
            showAnimals.appendChild(li);
        });
    }
});

const buttonAddAnimal = document.getElementById("addAnimal");

buttonAddAnimal.addEventListener("click", async () => {
    const tierart = document.getElementById("tierart").value;
    const name = document.getElementById("name").value;
    const krankheit = document.getElementById("krankheit").value;
    const age = document.getElementById("age").value;
    const gewicht = document.getElementById("gewicht").value;

    const newAnimal = {
        tierart,
        name,
        krankheit,
        age,
        gewicht
    };

    try {
        const res = await fetch("http://localhost:3000/tiere", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        });

        if (res.ok) {
            const message = await res.text();
            alert(message);
        } else {
            alert("Fehler beim Hinzufügen des Tieres.");
        }
    } catch (error) {
        console.error("Fehler:", error);
        alert("Ein Fehler ist aufgetreten.");
    }
});