# 📚 Biblioteca — o Git de Dr. Lucas HR

> Aplicação web privada: [deploy na Vercel](https://vercel.com/) com autenticação por login e senha.

## Aplicação

Este repositório também contém uma versão navegável da biblioteca em `index.html`.
Ela é uma página estática, com busca e filtros por status. Cada cartão aponta para
a respectiva pasta no GitHub.

### Deploy na Vercel

1. Importe este repositório na Vercel como um projeto sem framework.
2. Configure as variáveis de ambiente `APP_USERNAME` e `APP_PASSWORD` (Production,
   Preview e Development, conforme necessário).
3. Faça o deploy. O middleware protege todas as rotas com autenticação HTTP Basic.

Sem essas duas variáveis, o middleware retorna erro em vez de publicar o conteúdo
sem proteção. Para testar a interface localmente, abra `index.html` ou rode um
servidor estático, por exemplo `python3 -m http.server`.

> Um índice pessoal e pedagógico da minha atuação como **médico** e como **cidadão**.
> Não é um repositório de código: é o **mapa** que organiza tudo o que eu produzo,
> mostra onde cada coisa vive e revela o que este Git pode se tornar.

Médico pela Faculdade de Medicina de Ribeirão Preto (**FMRP-USP**, Turma 64).
Trabalho na fronteira entre a **prática clínica**, a **educação médica**, a
**saúde pública** e a **tecnologia** — e uso o GitHub como espaço para construir,
publicar e organizar essa produção.

---

## 🧭 Como esta biblioteca é organizada

Pense nela como uma **biblioteca física**:

- **Estantes** (`01-`, `02-`, …) = grandes áreas de atuação.
- **Prateleiras** (subpastas) = temas dentro de cada área.
- **Livros** = os repositórios de verdade (apps, dados, materiais), que vivem
  em `github.com/LucasHRAlmeida` e são **referenciados** aqui a partir da prateleira certa.

Cada pasta tem um `README.md` que explica **o que pertence ali**, **o que já existe**
e **o que pode vir a existir**. Assim a estrutura ensina sozinha — quem chega
entende o todo antes de abrir qualquer projeto.

## 🗂️ As estantes

| Estante | Área | O que reúne |
|---|---|---|
| [`01-medicina`](01-medicina/) | Medicina clínica e ensino | Educação médica, oncologia, raciocínio clínico/OSCE |
| [`02-saude-publica`](02-saude-publica/) | Saúde coletiva | Vigilância epidemiológica, promoção e prevenção |
| [`03-tecnologia-e-dados`](03-tecnologia-e-dados/) | Tecnologia (habilidade transversal) | Aplicativos web, IA em saúde, ciência de dados |
| [`04-cidadania-e-financas`](04-cidadania-e-financas/) | Vida como cidadão | Finanças e moradia, direitos e sociedade |
| [`05-conhecimento`](05-conhecimento/) | Produção de conhecimento | Publicações, referências, materiais didáticos |
| [`99-laboratorio`](99-laboratorio/) | Experimentos | Rascunhos e provas de conceito sem estante definida |

## 🔖 Legenda de status (usada nos READMEs das prateleiras)

- 🟢 **No ar** — publicado e em uso.
- 🟡 **Em construção** — existe, mas ainda amadurecendo.
- 🔵 **Planejado** — ideia mapeada, ainda não iniciada.

## ✍️ Convenção de nomes de repositórios

Para o Git crescer legível, novos repositórios seguem **kebab-case** e, quando ajuda,
um prefixo de área: `tema-assunto` ou `area-tema`. Exemplos reais e possíveis:

- `ensino-gamificado` · `mentoria-ia-osce-fmrp` · `sarampo-alertas-2026`
- futuros: `oncologia-casos-clinicos`, `saude-publica-paineis`, `financas-simuladores`

## 🔗 Vitrine pública

Esta biblioteca é o **bastidor** (privado). A **vitrine** que apresenta os projetos
ao público é o repositório [`via-hub`](https://github.com/LucasHRAlmeida/via-hub)
→ publicado em `lucashralmeida.github.io/via-hub/`.

---

**Dr. Lucas HR** · FMRP-USP · [github.com/LucasHRAlmeida](https://github.com/LucasHRAlmeida)
