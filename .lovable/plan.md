
## Plano: Adicionar a logo oficial Mel Duas Abelhas

### Análise da logo recebida
- Logo circular ilustrada: 2 abelhas, colmeia dourada, lettering script "Mel Duas Abelhas" em marrom, fita dourada "Mel Puro 100% Natural / Abelha Italiana", flores e concha de mel na base
- Fundo bege claro com favos sutis — combina perfeitamente com a paleta atual (warm-cream, honey, warm-brown)
- Estilo ilustrado/artesanal premium → alinha com posicionamento da marca

### Onde a logo vai aparecer

**1. Header (`src/components/Header.tsx`)** — substituir o atual logo textual + ícone genérico de favo pela logo real
- Mobile: logo ~44px de altura
- Desktop: logo ~52px de altura
- Manter wordmark de apoio? **Não** — a logo já contém o nome. Remover texto duplicado para layout limpo.

**2. Footer (`src/components/Footer.tsx`)** — usar a logo em destaque no topo do footer (~80px)

**3. Hero (`src/components/Hero.tsx`)** — adicionar a logo como pequeno selo/monograma acima do eyebrow ou flutuando como elemento de marca (sutil, ~64-72px), reforçando identidade na primeira dobra

**4. Favicon e meta tags** (`src/routes/__root.tsx` + `public/`) — usar a logo como favicon e og:image (compartilhamento social)

### Tratamento técnico
- Copiar a imagem para `src/assets/logo-mel-duas-abelhas.png` via `lov-copy`
- Importar como ES module nos 3 componentes
- A logo tem fundo bege que **combina** com `bg-warm-cream` do site → sem necessidade de remover fundo. Em fundos escuros (footer dark, hero dark), aplicar:
  - Container circular branco/cream sutil com leve sombra dourada (`shadow-[0_8px_30px_rgba(190,140,40,0.25)]`)
  - OU usar `mix-blend-mode: multiply` para integrar visualmente
- Para o favicon: gerar versão quadrada cropada via CSS `object-cover` ou usar a imagem direta (browser aceita PNG)
- Adicionar `alt="Mel Duas Abelhas — Mel Puro 100% Natural"` para SEO/acessibilidade

### Arquivos a editar/criar

| Ação | Arquivo |
|------|---------|
| Criar | `src/assets/logo-mel-duas-abelhas.png` (copiado do upload) |
| Copiar para public (favicon) | `public/logo-mel-duas-abelhas.png` |
| Editar | `src/components/Header.tsx` — substituir bloco logo |
| Editar | `src/components/Footer.tsx` — adicionar logo no topo |
| Editar | `src/components/Hero.tsx` — adicionar selo da logo |
| Editar | `src/routes/__root.tsx` — favicon + og:image |

### Resultado esperado
- Marca visualmente reconhecível em todas as seções principais
- Identidade reforçada já na primeira dobra do hero
- Favicon e preview de compartilhamento (WhatsApp, redes) com a logo real
- Zero impacto na performance (1 imagem, lazy nos pontos secundários)
