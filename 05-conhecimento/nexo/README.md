# 05-conhecimento/nexo — depósito do SSOT

Espelho canônico dos documentos de operação do **Nexo**, assistente da
Iniciativa VIA.

## Regra de sincronização

- **Fonte de edição:** `via-hub` → pasta `nexo/`.
- **Depósito:** esta pasta. Quando o SSOT mudar no via-hub, o espelho aqui
  é atualizado no mesmo commit ou num commit de espelhamento imediato.
- **Não editar aqui direto.** Alteração feita só neste repo quebra a
  rastreabilidade — a correção volta pelo via-hub.

## O que vive aqui

| Arquivo | Função |
|---|---|
| `SSOT_OPERACAO.md` | Texto canônico de instruções do assistente |
| `contrato-nexo.json` | Raias, hierarquia de fontes, registro mínimo |
| `CURADORIA.md` | Critérios de seleção, citação e aposentadoria de fontes |
| `VOZ_AUTORAL.md` | Registros de voz e marcas de estilo |
| `avaliacao.md` | Matriz de coerência sem backend |

## Limite declarado

O Nexo já opera no WhatsApp Business via assistente da Meta. Esta pasta
versiona o texto de operação; a configuração externa (conta, webhook,
templates, retenção) não é verificável por este repositório.
