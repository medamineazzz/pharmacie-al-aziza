const list = document.getElementById("medicineList");
const searchInput = document.getElementById("searchInput");

function displayMedicines(filter = "") {
  list.innerHTML = "";

  medicines
    .filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(med => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${med.name}</h3>
        <p>Prix : ${med.price} MAD</p>
        <button>Réserver</button>
      `;

      card.querySelector("button").onclick = () => {
        window.location.href =
          "reserve.html?medicine=" + encodeURIComponent(med.name);
      };

      list.appendChild(card);
    });
}

searchInput.addEventListener("input", e => {
  displayMedicines(e.target.value);
});

displayMedicines();
