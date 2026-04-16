
## Plano de Refatoração e Atualização Visual

### 1. Substituir imagens dos produtos
- **Kit Econômico (3 unidades)**: substituir `produto-trio.png` pela nova foto das caixas com várias garrafas (`image-14.png`)
- **Pedido Personalizado**: substituir `arte-oferta.png` pela arte "Personalizados com sabor e carinho" (`WhatsApp_Image_2026-04-16_at_14.33.54.jpeg`)

### 2. Tratamento visual premium das imagens (sair do "quadrado genérico")
Em vez de manter as imagens em uma `div` quadrada plana, vou aplicar:
- **Composição em camadas**: fundo com gradiente quente + textura honeycomb sutil + glow dourado por trás da imagem
- **Máscaras orgânicas**: bordas superiores arredondadas grandes (rounded-t-[2.5rem]) com viés assimétrico
- **Profundidade**: sombra interna no container + sombra projetada no produto + leve blur radial dourado atrás
- **Object-fit inteligente por produto**:
  - Garrafa única → `object-contain` com padding (mantém proporção vertical, dramática)
  - Kit (caixas) → `object-cover` com `object-position` calibrado, altura maior, sem distorção
  - Personalizados (arte vertical) → `object-cover object-top`, altura maior, com gradiente de fade na base para integrar tipografia
- **Hover**: leve zoom + rotação sutil + intensificação do glow

### 3. Refatoração de componentes para reuso

Criar primitivos compartilhados em `src/components/shared/`:

```
src/components/shared/
├── SectionHeader.tsx      → eyebrow + título + subtítulo (usado em 8+ seções hoje duplicado)
├── SectionWrapper.tsx     → <section> com padding, id, variantes (cream | dark | white)
├── WhatsAppCTA.tsx        → botão padronizado (variants: primary, secondary, ghost; sizes: sm, md, lg)
├── ProductImageFrame.tsx  → frame premium para imagens de produto (com glow, máscara, hover)
├── PremiumCard.tsx        → card base com shadow-card-premium + hover lift
└── BadgePill.tsx          → pill/chip para destaques ("Mais vendido", "100% natural", etc)
```

Benefícios:
- Hoje `motion.div` com `initial/whileInView/viewport/transition` está copiado em ~12 lugares → encapsular num `<FadeIn delay={i * 0.1}>`
- Headers de seção duplicados em Products, Benefits, Gallery, FAQ, Testimonials, Origin, Objection → 1 componente
- 4 variações de botão WhatsApp espalhadas → 1 componente com variants
- Cores hardcoded em vários lugares → tokens semânticos no CSS

Adicionar também:
- `src/components/shared/FadeIn.tsx` → wrapper de animação reutilizável
- `src/lib/whatsapp.ts` → exportar `WHATSAPP_URL` de um único lugar (hoje vem de `WhatsAppButton.tsx`, acoplamento estranho)

### 4. Refatorar componentes existentes para usar os primitivos
Atualizar: `Products`, `Benefits`, `Gallery`, `Testimonials`, `Origin`, `Objection`, `About`, `FAQ`, `HowToBuy`, `FinalCTA`, `Hero`, `TrustBar` para consumir os novos primitivos. Reduz duplicação em ~40% e prepara terreno para futuras páginas (ex: página dedicada de "Personalizados", "Atacado", etc).

### 5. Detalhes técnicos
- Copiar as 2 novas imagens para `src/assets/` (`produto-kit.jpg` e `produto-personalizados.jpg`)
- Manter a imagem `produto-garrafa.png` para o card 500ml
- Não tocar em `routeTree.gen.ts`, `router.tsx`, `__root.tsx`
- Tipografia: garantir que `font-heading` (Playfair) e tamanhos respondam bem em mobile (clamp ou breakpoints já existentes)

### Arquivos a criar/editar

**Criar (8):**
- `src/lib/whatsapp.ts`
- `src/components/shared/FadeIn.tsx`
- `src/components/shared/SectionHeader.tsx`
- `src/components/shared/SectionWrapper.tsx`
- `src/components/shared/WhatsAppCTA.tsx`
- `src/components/shared/ProductImageFrame.tsx`
- `src/components/shared/PremiumCard.tsx`
- `src/components/shared/BadgePill.tsx`

**Copiar assets (2):**
- `src/assets/produto-kit.jpg`
- `src/assets/produto-personalizados.jpg`

**Editar (12):** todos os componentes de seção para consumir os primitivos + trocar as 2 imagens em `Products.tsx`.

### Resultado esperado
- Imagens dos produtos com tratamento editorial (não mais "quadrado de catálogo")
- Código ~40% menor por componente, com primitivos prontos para escalar
- Mesma identidade visual premium, mais consistente entre seções
