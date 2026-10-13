# Juliano Santos Fotografia — MKlink

Link-in-bio do fotógrafo **Juliano Santos** (casamentos e debutantes · Cambé, Londrina e região).
Stack: Next.js 16 · Tailwind CSS v4 · Framer Motion · TypeScript

---

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

> Nesta máquina, prefixe os comandos com `NODE_OPTIONS=--use-system-ca`
> (instalação e build buscam pacotes e fontes do Google pela rede).

## Build de produção

```bash
npm run lint
npm run build
npm run start
```

## Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. **Import Git Repository** → `Lucas05Silva/Mklink-Juliano`
3. Mantenha as configurações padrão (Next.js é detectado automaticamente)
4. **Deploy** — cada `git push` na `main` publica de novo

## Onde editar

| O quê | Arquivo |
|---|---|
| Links, textos, badge, rodapé | `lib/constants.ts` |
| Link do Portfólio (hoje aponta pro Instagram) | `PORTFOLIO_URL` em `lib/constants.ts` |
| Paleta, raios, animação do badge | bloco `@theme` em `app/globals.css` |
| Tempos e curvas das animações | `lib/animations.ts` |
| Foto de perfil | `public/Juliano.jpg` (ideal: quadrada, 400px ou mais) |

Paleta alternativa (tom frio): troque `--color-brand-gold` por `#8a9bae` e
`--color-brand-gold-hover` por `#7a8b9e` em `app/globals.css`.

## Estrutura

```
app/
  layout.tsx        # fontes (Cormorant Garamond + Inter), metadata, viewport
  page.tsx          # renderiza <MkLinkCard />
  globals.css       # tokens da marca (@theme) + estilos globais
components/
  mklink-card.tsx   # página: fundo, card, lista de links
  profile-avatar.tsx# foto circular com fallback "JS"
  profile-info.tsx  # nome, subtítulo, frase
  badge-pill.tsx    # "Agendas 2027 Abertas"
  link-button.tsx   # botão de link (filled / outline)
  footer.tsx        # copyright
  icons.tsx         # ícones SVG
lib/
  constants.ts      # fonte única de conteúdo
  animations.ts     # variants do Framer Motion
```
