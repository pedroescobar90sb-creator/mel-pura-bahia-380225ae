
## Plano: Trocar imagem do Hero pela foto profissional do produto

### Análise
- A imagem atual no Hero (`hero-mel.jpg`) é uma foto amadora — garrafa na mão sobre piso de cozinha
- A nova imagem enviada (`WhatsApp_Image_2026-04-16_at_19.25.02.jpeg`) é uma foto profissional de produto: garrafa Mel Duas Abelhas em cenário rústico com favo, flores, colheres de mel — qualidade editorial premium
- Usuário também reclama do "formato quadrado genérico" → precisa de tratamento editorial igual aos cards de produto

### O que fazer

**1. Substituir asset**
- Copiar `WhatsApp_Image_2026-04-16_at_19.25.02.jpeg` → `src/assets/hero-produto.jpg`
- Atualizar import no `Hero.tsx`

**2. Tratamento visual premium da imagem do Hero (sair do quadrado)**

Aplicar a mesma linguagem editorial dos cards de produto, mas em escala maior:

- **Máscara orgânica assimétrica**: bordas arredondadas grandes e desiguais — `rounded-tl-[3rem] rounded-tr-[1rem] rounded-bl-[1rem] rounded-br-[3rem]` (forma orgânica, "gota de mel")
- **Aspect ratio vertical premium**: `aspect-[4/5]` ou `aspect-[3/4]` em vez de quadrado — valoriza a verticalidade da garrafa
- **Camadas de profundidade**:
  - Glow dourado radial atrás da imagem (`bg-honey/30 blur-[80px]`)
  - Anel sutil dourado na borda (`ring-1 ring-honey/30`)
  - Drop-shadow forte e quente (`drop-shadow-[0_30px_60px_rgba(80,45,10,0.45)]`)
- **Floating badges reposicionados**:
  - "Abelha Italiana / Riachão do Jacuípe – BA" → top-right, fundo escuro com blur
  - "100% Natural / Sem aditivos · Sem mistura" → bottom-left, fundo escuro com blur
  - Manter a animação de entrada existente
- **Elemento decorativo**: pequeno favo/honeycomb pattern atrás como textura sutil
- **Hover sutil**: leve scale (`hover:scale-[1.02]`) com transição suave

**3. Reaproveitar o `ProductImageFrame`?**
Não — o Hero precisa de um tratamento próprio mais cinematográfico (vertical, badges flutuantes externos, escala maior). Vou aplicar o mesmo VOCABULÁRIO visual (glow, máscara orgânica, ring, drop-shadow) inline no Hero, mantendo consistência sem forçar reuso que limitaria a composição.

### Arquivos

| Ação | Arquivo |
|------|---------|
| Criar | `src/assets/hero-produto.jpg` (copiado do upload) |
| Editar | `src/components/Hero.tsx` — trocar import + refatorar bloco da imagem com máscara orgânica, glow, badges flutuantes |

### Resultado esperado
- Foto profissional substitui a amadora → muito mais valor percebido
- Imagem com forma orgânica editorial, não mais "quadrado genérico"
- Mesma linguagem visual dos cards de produto (glow honey, ring sutil, sombras quentes)
- Composição vertical que valoriza o produto e equilibra com o texto à esquerda
