
# Plano de Refatoração para Conversão — Mel Duas Abelhas

## 🩺 Diagnóstico: principais gargalos de conversão hoje

Analisando a estrutura atual, identifiquei **8 problemas comerciais críticos**:

1. **Fluxo longo demais antes da oferta** — usuário passa por TrustBar → Benefits → Objection → Origin → 4 seções inteiras antes de ver os Produtos. No mobile isso é morte de conversão. Quem chega quente no hero esfria antes de comprar.
2. **Hero sem gancho comercial** — fala de pureza/origem mas não tem âncora de decisão (entrega rápida, oferta, garantia visível). Falta o "porquê comprar AGORA".
3. **Produtos sem hierarquia comercial** — kit e garrafa parecem equivalentes. Não há "produto âncora", "mais pedido", nem desconto visível do kit.
4. **Sem preço/desconto visível** — você confirmou: vamos mostrar **% de desconto do kit** (sem valor unitário). Isso sozinho deve elevar CTR no WhatsApp consideravelmente.
5. **Depoimentos fictícios** — risco reputacional + percepção de fake. Vou neutralizar para "espaço pronto para reais" sem mentir.
6. **CTAs repetitivos com mesmo texto** — todo botão diz "Pedir meu mel". Cada CTA deveria responder a uma objeção diferente do momento.
7. **"Entrega em 24h em Salvador" não aparece em lugar nenhum** — é seu maior diferencial e está escondido. Precisa estar no hero, nos cards de produto e no CTA final.
8. **Seções institucionais (Origin, About) cortam o ritmo de venda** — boas para confiança, mas hoje estão no meio do funil. Vão para depois da prova social, não antes da oferta.

---

## 🎯 Estratégia: nova ordem do funil

**Antes** (atual):
Hero → TrustBar → Benefits → Objection → Origin → Products → HowToBuy → Gallery → Testimonials → About → FAQ → FinalCTA

**Depois** (otimizado para conversão):
1. **Hero** — proposta direta + entrega 24h + CTA primário
2. **TrustBar** — selos rápidos (mantém)
3. **Products** ⬆️ **SUBIU** — oferta visível cedo, com desconto do kit destacado + CTA
4. **Benefits** — por que mel puro vale mais (reforça desejo pós-oferta)
5. **Origin** + **About** — fundidos numa única seção "História & Procedência" enxuta (confiança)
6. **Gallery** — prova visual da produção real
7. **Testimonials** — neutralizado/preparado para reais + CTA
8. **HowToBuy** — remove fricção do passo final
9. **Objection** — quebra últimas dúvidas (movido para perto do fechamento)
10. **FAQ** — mantém
11. **FinalCTA** — fechamento com urgência (entrega 24h)

---

## ✏️ Mudanças por seção

### 1. Hero
- **Headline nova**: foco em "Mel puro entregue hoje em Salvador" (combina diferencial + urgência)
- **Sub**: 100% natural · direto do produtor · Riachão do Jacuípe – BA
- **3 micro-selos abaixo do CTA**: ✓ 100% natural ✓ Direto do produtor ✓ Entrega em 24h em Salvador
- **CTA primário**: "Pedir agora pelo WhatsApp" (mais comercial que "pedir meu mel")
- **CTA secundário sutil**: "Ver produtos" (scroll para Products)
- **Badge superior**: "Entrega no mesmo dia em Salvador e RMS" — gancho âncora

### 2. Products (subindo no funil + redesign comercial)
- **Card do Kit ganha destaque visual** (ribbon "MAIS PEDIDO" + selo "Economize 15%")
- **Card da garrafa unitária** com selo "Para experimentar"
- **Ambos com badge "Entrega em 24h"**
- **Descrições reescritas em modo benefício** (não em modo features)
- **CTA específico por card**: "Quero o kit econômico" / "Quero experimentar"
- **Strip abaixo dos produtos**: "Frete combinado por bairro · Pagamento na entrega · PIX"

### 3. Benefits, Origin+About fundidos
- **Origin + About** viram uma única seção "Da nossa família para sua mesa" — mais curta, com 3 pilares (Família · Pureza · Procedência) + foto
- Reduz 2 seções em 1 → ritmo mais rápido

### 4. Testimonials (neutralizado)
- Substituo nomes/fotos fictícias por **cards de "frase + bairro"** sem rosto inventado
- Adiciono **placeholder convidando**: "Compartilhe sua experiência — marque @melduasabelhas"
- Deixo a estrutura pronta para você colar prints reais depois (componente reutilizável)

### 5. CTAs distribuídos com copy distinta
| Posição | Texto | Função |
|---|---|---|
| Hero | "Pedir agora pelo WhatsApp" | Decisão rápida |
| Após Products | "Fazer meu pedido" | Pós-oferta |
| Após Testimonials | "Quero provar essa qualidade" | Pós-prova social |
| Após Objection | "Tirar minhas dúvidas" | Quebra-objeção |
| FinalCTA | "Receber meu mel hoje" | Urgência + entrega 24h |

### 6. WhatsApp flutuante
- Adicionar mensagem proativa sutil que aparece após scroll: "Entrega hoje em Salvador 🍯"

### 7. Performance / mobile
- Manter as otimizações de scroll que já fizemos
- Hero mobile: encurtar headline, CTA full-width, garantir que primeiro fold tenha CTA visível sem scroll

---

## 📝 Arquivos a editar

| Ação | Arquivo | Motivo |
|---|---|---|
| Editar | `src/components/Hero.tsx` | Headline comercial + entrega 24h + 3 micro-selos |
| Editar | `src/components/Products.tsx` | Hierarquia kit vs unidade, % desconto, CTA por card |
| Editar | `src/components/Testimonials.tsx` | Neutralizar fictícios, preparar para reais |
| Editar | `src/components/Origin.tsx` | Fundir narrativa com About, mais enxuto |
| Editar | `src/components/About.tsx` | Reduzir/remover redundância com Origin |
| Editar | `src/components/Objection.tsx` | CTA específico de quebra-objeção |
| Editar | `src/components/FinalCTA.tsx` | Headline com urgência "entrega hoje" |
| Editar | `src/components/HowToBuy.tsx` | Reposicionar CTA |
| Editar | `src/routes/index.tsx` | **Reordenar fluxo do funil** |
| Editar | `src/components/WhatsAppButton.tsx` | Adicionar tooltip proativo após scroll |

Sem novos arquivos, sem dependências novas, sem novas imagens (você confirmou trabalhar com o que já tem).

---

## 📈 Resultado esperado (o que deve sair na entrega final)

- **Tempo até primeira oferta visível** cai pela metade (Products sobe no funil)
- **Cada CTA com copy específica** ao momento → maior CTR no WhatsApp
- **Kit fica 3x mais atrativo** com ribbon, % de desconto e copy de benefício
- **"Entrega em 24h em Salvador"** vira o gancho recorrente em hero, products e final
- **Risco reputacional zerado** com depoimentos neutralizados
- **Funil mais curto e direto**: 12 seções → fluxo otimizado, sem perder história
- **Mobile-first**: primeiro fold do hero entrega proposta + CTA sem scroll

Aprova que eu já parto para a implementação?
