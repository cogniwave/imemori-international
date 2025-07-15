const countries = [
  { code: "pt", name: { en: "Portugal", pt: "Portugal", es: "Portugal" }, supported: true, link: "https://imemori.pt" },
  { code: "es", name: { en: "Spain", pt: "Espanha", es: "España" }, supported: false },
  { code: "at", name: { en: "Austria", pt: "Áustria", es: "Austria" }, supported: false },
  { code: "be", name: { en: "Belgium", pt: "Bélgica", es: "Bélgica" }, supported: false },
  { code: "bg", name: { en: "Bulgaria", pt: "Bulgária", es: "Bulgaria" }, supported: false },
  { code: "hr", name: { en: "Croatia", pt: "Croácia", es: "Croacia" }, supported: false },
  { code: "cy", name: { en: "Cyprus", pt: "Chipre", es: "Chipre" }, supported: false },
  { code: "cz", name: { en: "Czech Republic", pt: "República Checa", es: "República Checa" }, supported: false },
  { code: "dk", name: { en: "Denmark", pt: "Dinamarca", es: "Dinamarca" }, supported: false },
  { code: "ee", name: { en: "Estonia", pt: "Estónia", es: "Estonia" }, supported: false },
  { code: "fi", name: { en: "Finland", pt: "Finlândia", es: "Finlandia" }, supported: false },
  { code: "fr", name: { en: "France", pt: "França", es: "Francia" }, supported: false },
  { code: "de", name: { en: "Germany", pt: "Alemanha", es: "Alemania" }, supported: false },
  { code: "gr", name: { en: "Greece", pt: "Grécia", es: "Grecia" }, supported: false },
  { code: "hu", name: { en: "Hungary", pt: "Hungria", es: "Hungría" }, supported: false },
  { code: "ie", name: { en: "Ireland", pt: "Irlanda", es: "Irlanda" }, supported: false },
  { code: "it", name: { en: "Italy", pt: "Itália", es: "Italia" }, supported: false },
  { code: "lv", name: { en: "Latvia", pt: "Letónia", es: "Letonia" }, supported: false },
  { code: "lt", name: { en: "Lithuania", pt: "Lituânia", es: "Lituania" }, supported: false },
  { code: "lu", name: { en: "Luxembourg", pt: "Luxemburgo", es: "Luxemburgo" }, supported: false },
  { code: "mt", name: { en: "Malta", pt: "Malta", es: "Malta" }, supported: false },
  { code: "nl", name: { en: "Netherlands", pt: "Países Baixos", es: "Países Bajos" }, supported: false },
  { code: "pl", name: { en: "Poland", pt: "Polónia", es: "Polonia" }, supported: false },
  { code: "ro", name: { en: "Romania", pt: "Roménia", es: "Rumania" }, supported: false },
  { code: "sk", name: { en: "Slovakia", pt: "Eslováquia", es: "Eslovaquia" }, supported: false },
  { code: "si", name: { en: "Slovenia", pt: "Eslovénia", es: "Eslovenia" }, supported: false },
  { code: "se", name: { en: "Sweden", pt: "Suécia", es: "Suecia" }, supported: false }
];

const translations = {
  en: { notAvailable: "Not available yet" },
  pt: { notAvailable: "Ainda não disponível" },
  es: { notAvailable: "Aún no disponible" },
};

let currentLang = 'en';

function changeLanguage(lang) {
  currentLang = lang;
  renderFlags();
}

function renderFlags() {
  const grid = document.getElementById('flag-grid');
  grid.innerHTML = "";

  countries.forEach(country => {
    const container = document.createElement("div");
    container.className = `flag-container ${country.supported ? '' : 'unsupported'}`;

    const flagBox = document.createElement(country.supported ? "a" : "div");
    flagBox.className = `flag-box ${country.supported ? '' : 'unsupported'}`;
    
    if (country.supported) {
      flagBox.href = country.link;
      flagBox.target = "_blank";
    }

    const flag = document.createElement("span");
    flag.className = `fi fi-${country.code}`;
    flagBox.appendChild(flag);

    const label = document.createElement("div");
    label.className = "flag-label";
    label.textContent = country.name[currentLang];

    if (!country.supported) {
      const ribbon = document.createElement("div");
      ribbon.className = "ribbon";
      ribbon.textContent = translations[currentLang].notAvailable;
      container.appendChild(ribbon);
    }

    container.appendChild(flagBox);
    container.appendChild(label);
    grid.appendChild(container);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFlags();
});
