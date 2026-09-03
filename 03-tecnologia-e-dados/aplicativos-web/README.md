# Aplicativos web

Front-end e apps de página única — leves, sem servidor, publicáveis no GitHub Pages.
É o padrão técnico que sustenta a maior parte da minha produção.

## 📖 Nesta prateleira (pela ótica técnica)

- 🟢 [`ensino-gamificado`](https://github.com/LucasHRAlmeida/ensino-gamificado) —
  HTML/CSS/JS vanilla, `localStorage`, export PDF (html2pdf.js), parsing CSV (PapaParse). ~1.900 linhas.
- 🟢 [`via-hub`](https://www.iniciativa-via.com/via-hub/via-hub) —
  landing page/portfólio, tema claro/escuro, responsiva.
- 🟢 [`mentoria-ia-osce-fmrp`](https://github.com/LucasHRAlmeida/mentoria-ia-osce-fmrp) —
  site estático com estado em JS (fases, estações, dashboard); Vercel Analytics; deploy via Pages.
- 🟢 [`sarampo-alertas-2026`](https://github.com/LucasHRAlmeida/sarampo-alertas-2026) —
  página única de conteúdo (boletim de saúde); publicada e viva no GitHub Pages.

## 🧩 Padrão técnico que se repete

- Página única, sem build pesado; dependências via CDN quando necessário.
- `.nojekyll` + GitHub Pages para publicar.
- Dados do usuário em `localStorage`; import/export por JSON/CSV.

## 🔵 O que pode vir a existir

- Um template-base (`starter-app`) para clonar e acelerar novos projetos.
- Componentes reaproveitáveis (quiz, importador de dados, gerador de PDF, dashboard).
