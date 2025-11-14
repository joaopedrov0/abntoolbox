# ABNToolbox

> Caixa de ferramentas para escrita científica com foco nas normas ABNT (português - Brasil).

**ABNToolbox** é um conjunto leve de utilitários e snippets para acelerar a formatação e a redação científica seguindo as principais regras da ABNT. O projeto fornece ferramentas via interface web (arquivos estáticos) para gerar e formatar trechos comuns — referências, citações, sumário, formatação de títulos, entre outros.

## **Como contribuir — Adicionar novas ferramentas**

Para adicionar novas ferramentas, abra o arquivo `data.js` e adicione um novo objeto como descrito abaixo:

```javascript
// exemplo mínimo em data.js
new Tool(
    "Exemplo de nome", // Um título para o card da ferramenta
    "Exemplo de descrição", // Breve descrição do que se trata
    "https://linkexemplo.com", // Link da ferramenta
    [referencia, citacao] // Categorias que se aplicam ao seu material ()
)
```

## Valores de categoria válidos

- `citacao` - para citação
- `referencia` - para referência
- `resumo` - para resumo
- `introducao` - para introdução
- `metodologia` - para metodologia
- `conclusao` - para conclusão
- `oficial` - para materiais oficiais da ABNT
- `multi` - para materiais gerais
