const shelves = [
  {
    number: "01", name: "Medicina", icon: "✚", tone: "rose",
    description: "Prática clínica e educação médica.",
    sections: [
      ["Educação médica", "Conteúdos e ferramentas para ensinar e aprender.", "live", "01-medicina/educacao-medica"],
      ["Oncologia", "Conhecimento clínico aplicado ao cuidado.", "planned", "01-medicina/oncologia"],
      ["Raciocínio clínico & OSCE", "Casos, estações e avaliação de competências.", "building", "01-medicina/raciocinio-clinico-osce"]
    ]
  },
  {
    number: "02", name: "Saúde pública", icon: "⌁", tone: "teal",
    description: "Saúde coletiva, vigilância e prevenção.",
    sections: [
      ["Promoção & prevenção", "Iniciativas para uma vida mais saudável.", "planned", "02-saude-publica/promocao-e-prevencao"],
      ["Vigilância epidemiológica", "Dados e alertas para proteger comunidades.", "live", "02-saude-publica/vigilancia-epidemiologica"]
    ]
  },
  {
    number: "03", name: "Tecnologia & dados", icon: "⌘", tone: "blue",
    description: "Tecnologia como habilidade transversal.",
    sections: [
      ["Aplicativos web", "Ferramentas simples, úteis e publicáveis.", "live", "03-tecnologia-e-dados/aplicativos-web"],
      ["Ciência de dados", "Análise para transformar dados em decisões.", "planned", "03-tecnologia-e-dados/ciencia-de-dados"],
      ["Inteligência artificial", "IA aplicada à saúde e ao conhecimento.", "building", "03-tecnologia-e-dados/inteligencia-artificial"]
    ]
  },
  {
    number: "04", name: "Cidadania & finanças", icon: "◇", tone: "amber",
    description: "A vida prática de um cidadão.",
    sections: [
      ["Direitos & sociedade", "Informação para participar e transformar.", "planned", "04-cidadania-e-financas/direitos-e-sociedade"],
      ["Finanças & moradia", "Decisões mais conscientes para o futuro.", "building", "04-cidadania-e-financas/financas-e-moradia"]
    ]
  },
  {
    number: "05", name: "Conhecimento", icon: "✦", tone: "purple",
    description: "Produção, referências e materiais.",
    sections: [
      ["Materiais didáticos", "Recursos para compartilhar conhecimento.", "live", "05-conhecimento/materiais-didaticos"],
      ["Publicações & referências", "Textos e fontes que sustentam o trabalho.", "building", "05-conhecimento/publicacoes-e-referencias"]
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
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
}[character]));

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
    <article class="shelf ${escapeHtml(shelf.tone)}">
      <div class="shelf-heading">
        <span class="shelf-number">${escapeHtml(shelf.number)}</span>
        <span class="shelf-icon" aria-hidden="true">${escapeHtml(shelf.icon)}</span>
        <div><h2>${escapeHtml(shelf.name)}</h2><p>${escapeHtml(shelf.description)}</p></div>
      </div>
      <div class="cards">${shelf.sections.map(([title, description, status, path]) => `
        <a class="card" href="https://github.com/LucasHRAlmeida/OneDrive/tree/main/${escapeHtml(path)}" target="_blank" rel="noreferrer">
          <span class="status ${escapeHtml(status)}">${escapeHtml(labels[status])}</span>
          <h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><span class="arrow" aria-hidden="true">↗</span>
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
