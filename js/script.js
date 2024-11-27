document.addEventListener("DOMContentLoaded", async () => {
    const countriesList = document.getElementById("countries-list");
  
    try {
      const response = await fetch("https://restcountries.com/v3/all");
      const countries = (await response.json()).sort((a, b) =>
        a.name.common.localeCompare(b.name.common, "en", { sensitivity: "base" })
      );
  
      countries.forEach((country) => {
        const card = document.createElement("div");
        card.className = "country-card";
        card.innerHTML = `
          <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
          <h3>${country.name.common}</h3>
        `;
        card.addEventListener("click", () => showModal(country));
        countriesList.appendChild(card);
      });
    } catch (error) {
      countriesList.textContent = "Error al cargar los datos.";
    }
  });
  
  
  