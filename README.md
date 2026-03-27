# Nikita Slobodeniuc Portfolio

Portfolio pessoal bilingue (PT/EN), com design premium, animações suaves e suporte para light/dark mode.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes
- lucide-react

## Features

- Conteudo em Portugues e Ingles com rotas dedicadas
- Hero com foto de perfil e CTA de conversao
- Secoes de competencias, projetos, experiencia, educacao e contacto
- Animacoes de entrada e microinteracoes de hover
- Light mode e dark mode com toggle
- SEO base com `robots.txt` e `sitemap.xml`
- Download direto dos CVs em PT e EN

## Estrutura

```text
src/
	app/
		[locale]/
		robots.ts
		sitemap.ts
	components/
		portfolio/
		theme/
		ui/
	content/
	lib/
public/
```

## Como correr localmente

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build de producao

```bash
npm run lint
npm run build
npm run start
```

## Deploy na Vercel

```bash
npx vercel --prod
```

## Personalizacao rapida

- Conteudo principal: `src/content/profile.ts`
- Layout e tipografia global: `src/app/layout.tsx`
- Tokens de tema e cores: `src/app/globals.css`
- Homepage e seccoes: `src/components/portfolio/portfolio-page.tsx`

## Licenca

Uso pessoal. Ajusta a licenca conforme o tipo de publicacao que pretendes no GitHub.
