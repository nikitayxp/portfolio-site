# Portfolio — Nikita Slobodeniuc

Portfolio pessoal bilingue (PT/EN) feito com Next.js.

Sou estudante de Desenvolvimento de Software (CTeSP — ISTEC Lisboa) e estou a construir este projeto para mostrar o que sei fazer no frontend e um pouco de backend.

## O que tem

- Páginas em português e inglês
- Dark / light mode
- Animações com Framer Motion
- Formulário de contacto com validação (Zod) e envio por email (Resend)
- Proteção básica contra spam (rate limit simples)

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion + Lenis
- Zod + Resend

## Como correr localmente

```bash
git clone https://github.com/nikitayxp/portfolio-site.git
cd portfolio-site
npm install
```

Cria um ficheiro `.env.local` na raiz:

```env
RESEND_API_KEY=re_tua_chave_aqui
```

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
  app/           # rotas e server actions
  components/    # UI e secções do portfolio
  content/       # textos PT/EN
  lib/           # helpers (i18n)
public/          # CVs e foto de perfil
```

## Notas

Este projeto foi feito como prática de estudo. Algumas partes (animações, formulário) foram onde foquei mais tempo. Feedback é bem-vindo.
