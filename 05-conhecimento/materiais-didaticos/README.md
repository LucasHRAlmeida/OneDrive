# Materiais didáticos

Slides, roteiros de aula e conteúdo de ensino reutilizável entre projetos.

## 📖 Nesta prateleira

*Ainda sem repositórios — prateleira reservada.*

## 🧭 Primeira intervenção material para a VIA

**Frente escolhida:** materiais.

### OBSERVADO

- A VIA já tem conteúdo, tese e utilidade pública, mas os materiais ainda tendem a
  aparecer como anexos dispersos de projetos, aulas ou links avulsos.
- QR code apontando direto para pasta efêmera do Drive resolve distribuição rápida,
  mas terceiriza a identidade do acervo e envelhece mal quando o destino muda.
- Este repositório já se assume como **biblioteca-índice**; falta espelhar essa
  lógica na vitrine pública da VIA.

### INFERIDO

- O problema principal não é "falta de arquivo", mas **falta de estante pública**:
  sem uma rota canônica, material bom continua difícil de encontrar, citar e manter.
- Antes de investir em voz autoral recorrente ou nova navegação global, a VIA ganha
  mais ao separar com clareza **identidade do material** de **storage do arquivo**.

### PROPOSTO

Criar na `via-hub` uma rota canônica **`/via-hub/materiais/`** (ou
`/via-hub/acervo/`, se o vocabulário público pedir mais sobriedade) com categorias
fixas:

- artigos e notas;
- materiais didáticos;
- apresentações;
- documentos de método;
- datasets e artefatos públicos;
- arquivos históricos.

Cada item publicado deve ganhar uma página/slug próprio, por exemplo
`/via-hub/materiais/<slug>/`, com:

- título claro;
- tipo de material;
- data e versão;
- contexto de uso;
- link principal para acesso;
- indicação explícita do arquivo ou repositório de origem.

### Regra de canonicidade

- **QR codes apontam para a URL canônica da VIA**, nunca direto para Drive.
- **Drive/Docs/GitHub funcionam como distribuição**, não como identidade pública.
- Se o arquivo mudar de pasta, versão ou provedor, o slug continua estável.

### O que eu removeria para pagar a nova complexidade

- Não abriria blog genérico nesta rodada.
- Não criaria múltiplas taxonomias concorrentes para o mesmo material.
- Não exibiria QR code em página-lista; ele só aparece no item individual quando
  houver caso real de circulação física.

## 🔵 O que pode vir a existir

- Slides e roteiros das disciplinas ministradas.
- Bancos de conteúdo (texto/JSON) que alimentam os apps de ensino.
- Modelos reutilizáveis de aula e avaliação.
