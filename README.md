# Design System

Starter šablona pro tvorbu design systémů postavená na moderním webovém stacku.

## Technologie

| Technologie | Verze | Účel |
|-------------|-------|------|
| [Nuxt 3](https://nuxt.com) | 3.15+ | Framework (SSR/SSG, routing, auto-imports) |
| [Vue 3](https://vuejs.org) | 3.5+ | UI framework (Composition API, Script Setup) |
| [Vite](https://vitejs.dev) | (via Nuxt) | Bundler (HMR, ESM, optimalizovaný build) |
| CSS (čisté) | — | Stylování bez frameworků |

## Struktura projektu

```
design-system/
├── assets/
│   └── css/
│       ├── tokens/
│       │   ├── colors.css      # OKLCH barvy + @property typed props
│       │   ├── typography.css  # Fluid typografie (clamp)
│       │   ├── spacing.css     # Spacing škála + border-radius + z-index
│       │   ├── effects.css     # Stíny, přechody, animace
│       │   └── breakpoints.css # Breakpointy + container query utility
│       └── main.css            # Orchestrace (@layer + import tokenů + base)
├── components/
│   └── Ds/
│       ├── DsButton.vue        # Tlačítko (5 variant, 3 velikosti, loading)
│       ├── DsCard.vue          # Karta (elevace, container query)
│       ├── DsBadge.vue         # Odznak (6 variant, dot indikátor)
│       └── DsInput.vue         # Textové pole (validace, přístupnost)
├── layouts/
│   └── default.vue             # Hlavní layout (sticky header, nav, footer)
├── pages/
│   └── index.vue               # Showcase všech komponent
├── app.vue                     # Kořenová komponenta
├── nuxt.config.ts              # Nuxt konfigurace
├── package.json
├── tsconfig.json
├── README.md                   # Tato dokumentace
└── STATUS.md                   # Stav projektu a roadmapa
```

## CSS architektura

### Cascade Layers (`@layer`)

Pořadí vrstev (od nejnižší po nejvyšší specificitu):

```
reset → tokens → base → layout → components → utilities
```

### Design tokeny

Všechny tokeny jsou definovány jako CSS custom properties v `assets/css/tokens/`.

**Barevný prostor: OKLCH**

```css
/* Perceptuálně uniformní — stejná lightness = stejná vnímaná jasnost */
--color-primary: oklch(0.55 0.22 264);
/*                       ↑      ↑    ↑
                     jasnost  chroma  hue (úhel) */
```

**Typed custom properties (`@property`)**

```css
@property --color-primary {
  syntax: "<color>";      /* typ hodnoty */
  inherits: true;         /* dědičnost */
  initial-value: oklch(0.55 0.22 264);  /* výchozí hodnota */
}
```

Umožňuje: animace CSS proměnných, typovou kontrolu, fallback hodnoty.

**Fluid typografie a spacing**

```css
--font-size-h1: clamp(2.250rem, 2.00rem + 1.25vw, 3.125rem);
/* Automaticky škáluje mezi min a max hodnotou dle šířky viewportu */
```

**CSS Nesting (nativní)**

```css
.ds-button {
  &:hover:not(:disabled) { /* ... */ }
  &:focus-visible { /* ... */ }
}
```

**Container Queries**

```css
@container (max-width: 400px) {
  .ds-card__footer {
    flex-direction: column;
  }
}
```

### Komponenty

Všechny komponenty (`Ds*`) jsou automaticky importovány Nuxtem.
Prefix `Ds` (Design System) odlišuje systémové komponenty od aplikačních.

```vue
<!-- Bez importu — Nuxt auto-import -->
<DsButton variant="primary" size="lg">Klikni</DsButton>
<DsCard elevation="raised" interactive>Obsah</DsCard>
<DsBadge variant="success" dot>Online</DsBadge>
<DsInput v-model="value" label="Jméno" required />
```

## Spuštění

```bash
# Instalace závislostí
npm install

# Dev server (http://localhost:3000)
npm run dev

# Produkční build
npm run build

# Náhled produkčního buildu
npm run preview
```

## Dark mode

Dark mode je automatický dle systémového nastavení (`prefers-color-scheme: dark`).
Sémantické barevné aliasy (`--color-surface`, `--color-text`, atd.) se přepínají automaticky.

## Přístupnost

- Focus viditelný pouze při navigaci klávesnicí (`:focus-visible`)
- ARIA atributy na všech interaktivních komponentách
- `prefers-reduced-motion` respektován (animace vypnuty)
- Sémantické HTML elementy (`<button>`, `<input>`, `<article>`, `<header>`, atd.)
- Chybové zprávy napojeny přes `aria-describedby`
