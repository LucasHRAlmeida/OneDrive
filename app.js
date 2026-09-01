const shelves = [
  {
    number: "01", name: "Medicina", icon: "✚", tone: "rose",
    description: "Prática clínica e educação médica.",
    sections: [
      ["Educação médica", "Conteúdos e ferramentas para ensinar e aprender.", "live", "educacao-medica"],
      ["Oncologia", "Conhecimento clínico aplicado ao cuidado.", "planned", "oncologia"],
      ["Raciocínio clínico & OSCE", "Casos, estações e avaliação de competências.", "building", "raciocinio-clinico-osce"]
    ]
  },
  {
    number: "02", name: "Saúde pública", icon: "⌁", tone: "teal",
    description: "Saúde coletiva, vigilância e prevenção.",
    sections: [
      ["Promoção & prevenção", "Iniciativas para uma vida mais saudável.", "planned", "promocao-e-prevencao"],
      ["Vigilância epidemiológica", "Dados e alertas para proteger comunidades.", "live", "vigilancia-epidemiologica"]
    ]
  },
  {
    number: "03", name: "Tecnologia & dados", icon: "⌘", tone: "blue",
    description: "Tecnologia como habilidade transversal.",
    sections: [
      ["Aplicativos web", "Ferramentas simples, úteis e publicáveis.", "live", "aplicativos-web"],
      ["Ciência de dados", "Análise para transformar dados em decisões.", "planned", "ciencia-de-dados"],
      ["Inteligência artificial", "IA aplicada à saúde e ao conhecimento.", "building", "inteligencia-artificial"]
    ]
  },
  {
    number: "04", name: "Cidadania & finanças", icon: "◇", tone: "amber",
    description: "A vida prática de um cidadão.",
    sections: [
      ["Direitos & sociedade", "Informação para participar e transformar.", "planned", "direitos-e-sociedade"],
      ["Finanças & moradia", "Decisões mais conscientes para o futuro.", "building", "financas-e-moradia"]
    ]
  },
  {
    number: "05", name: "Conhecimento", icon: "✦", tone: "purple",
    description: "Produção, referências e materiais.",
    sections: [
      ["Materiais didáticos", "Recursos para compartilhar conhecimento.", "live", "materiais-didaticos"],
      ["Publicações & referências", "Textos e fontes que sustentam o trabalho.", "building", "publicacoes-e-referencias"]
    ]
  },
  {
    number: "99", name: "Laboratório", icon: "⚗", tone: "slate",
    description: "Experimentos ainda sem estante definida.",
    sections: [["Rascunhos & provas de conceito", "Ideias em fase de descoberta.", "planned", "99-laboratorio"]]
  }
];

const labels = { live: "No ar", building: "Em construção", planned: "Planejado" };
const library = document.querySelector("#library");
const empty = document.querySelector("#empty");
const search = document.querySelector("#search");
let currentFilter = "all";

function render() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  let visibleShelves = shelves.map((shelf) => ({
    ...shelf,
    sections: shelf.sections.filter(([title, description, status]) =>
      (currentFilter === "all" || status === currentFilter) &&
      (!term || `${shelf.name} ${title} ${description}`.toLocaleLowerCase("pt-BR").includes(term))
    )
  })).filter((shelf) => shelf.sections.length);

  library.innerHTML = visibleShelves.map((shelf) => `
    <article class="shelf ${shelf.tone}">
      <div class="shelf-heading">
        <span class="shelf-number">${shelf.number}</span>
        <span class="shelf-icon" aria-hidden="true">${shelf.icon}</span>
        <div><h2>${shelf.name}</h2><p>${shelf.description}</p></div>
      </div>
      <div class="cards">${shelf.sections.map(([title, description, status, path]) => `
        <a class="card" href="https://github.com/LucasHRAlmeida/OneDrive/tree/main/${String(shelf.number).padStart(2, "0")}-${path}" target="_blank" rel="noreferrer">
          <span class="status ${status}">${labels[status]}</span>
          <h3>${title}</h3><p>${description}</p><span class="arrow" aria-hidden="true">↗</span>
        </a>`).join("")}</div>
    </article>`).join("");
  empty.hidden = visibleShelves.length > 0;
}

document.querySelectorAll(".filter").forEach((button) => button.addEventListener("click", () => {
  document.querySelector(".filter.active").classList.remove("active");
  button.classList.add("active");
  currentFilter = button.dataset.filter;
  render();
}));
search.addEventListener("input", render);
render();
