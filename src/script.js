const countries = [
  { code: "pt", supported: true, link: "https://imemori.pt" },
  { code: "es", supported: false },
  { code: "at", supported: false },
  { code: "be", supported: false },
  { code: "bg", supported: false },
  { code: "hr", supported: false },
  { code: "cy", supported: false },
  { code: "cz", supported: false },
  { code: "dk", supported: false },
  { code: "ee", supported: false },
  { code: "fi", supported: false },
  { code: "fr", supported: false },
  { code: "de", supported: false },
  { code: "gr", supported: false },
  { code: "hu", supported: false },
  { code: "ie", supported: false },
  { code: "it", supported: false },
  { code: "lv", supported: false },
  { code: "lt", supported: false },
  { code: "lu", supported: false },
  { code: "mt", supported: false },
  { code: "nl", supported: false },
  { code: "pl", supported: false },
  { code: "ro", supported: false },
  { code: "sk", supported: false },
  { code: "si", supported: false },
  { code: "se", supported: false }
];

const translations = {
  notAvailable: {
    en: "Not available yet",
    pt: "Ainda não disponível",
    es: "Aún no disponible"
  },
  countries: {
    pt: { en: "Portugal", pt: "Portugal", es: "Portugal" },
    es: { en: "Spain", pt: "Espanha", es: "España" },
    at: { en: "Austria", pt: "Áustria", es: "Austria" },
    be: { en: "Belgium", pt: "Bélgica", es: "Bélgica" },
    bg: { en: "Bulgaria", pt: "Bulgária", es: "Bulgaria" },
    hr: { en: "Croatia", pt: "Croácia", es: "Croacia" },
    cy: { en: "Cyprus", pt: "Chipre", es: "Chipre" },
    cz: { en: "Czech Republic", pt: "República Checa", es: "República Checa" },
    dk: { en: "Denmark", pt: "Dinamarca", es: "Dinamarca" },
    ee: { en: "Estonia", pt: "Estónia", es: "Estonia" },
    fi: { en: "Finland", pt: "Finlândia", es: "Finlandia" },
    fr: { en: "France", pt: "França", es: "Francia" },
    de: { en: "Germany", pt: "Alemanha", es: "Alemania" },
    gr: { en: "Greece", pt: "Grécia", es: "Grecia" },
    hu: { en: "Hungary", pt: "Hungria", es: "Hungría" },
    ie: { en: "Ireland", pt: "Irlanda", es: "Irlanda" },
    it: { en: "Italy", pt: "Itália", es: "Italia" },
    lv: { en: "Latvia", pt: "Letónia", es: "Letonia" },
    lt: { en: "Lithuania", pt: "Lituânia", es: "Lituania" },
    lu: { en: "Luxembourg", pt: "Luxemburgo", es: "Luxemburgo" },
    mt: { en: "Malta", pt: "Malta", es: "Malta" },
    nl: { en: "Netherlands", pt: "Países Baixos", es: "Países Bajos" },
    pl: { en: "Poland", pt: "Polónia", es: "Polonia" },
    ro: { en: "Romania", pt: "Roménia", es: "Rumania" },
    sk: { en: "Slovakia", pt: "Eslováquia", es: "Eslovaquia" },
    si: { en: "Slovenia", pt: "Eslovénia", es: "Eslovenia" },
    se: { en: "Sweden", pt: "Suécia", es: "Suecia" }
  }
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
    label.textContent = translations.countries[country.code][currentLang];

    if (!country.supported) {
      const ribbon = document.createElement("div");
      ribbon.className = "ribbon";
      ribbon.textContent = translations.notAvailable[currentLang];
      container.appendChild(ribbon);
    }

    container.appendChild(flagBox);
    container.appendChild(label);
    grid.appendChild(container);
  });
}

window.changeLanguage = changeLanguage;


document.addEventListener("DOMContentLoaded", () => {
  renderFlags();
});
