<template>
  <div class="app-layout">
    <header class="app-header">
      <div class="container flex items-center justify-between">
        <div class="app-header__brand">
          <span class="app-header__logo" aria-hidden="true">◈</span>
          <span class="app-header__name">Design System</span>
        </div>
        <nav class="app-nav" aria-label="Hlavní navigace">
          <NuxtLink to="/" class="app-nav__link">Přehled</NuxtLink>
          <NuxtLink to="/tokens" class="app-nav__link">Tokeny</NuxtLink>
          <NuxtLink to="/components" class="app-nav__link">Komponenty</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="app-main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="app-footer">
      <div class="container">
        <p class="text-subtle">Design System · Vue 3 + Nuxt 3 + Vite · Čisté CSS</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

/* ─── Header ─── */
.app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background-color: oklch(from var(--color-surface) l c h / 0.85);
  backdrop-filter: blur(var(--blur-md));
  border-bottom: 1px solid var(--color-border);
  padding-block: var(--space-4);
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: var(--color-text);
}

.app-header__logo {
  font-size: var(--font-size-xl);
  color: var(--color-primary);
}

.app-header__name {
  letter-spacing: var(--letter-spacing-tight);
}

/* ─── Navigace ─── */
.app-nav {
  display: flex;
  gap: var(--space-1);
}

.app-nav__link {
  padding: var(--space-1-5) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-subtle);
  transition: var(--transition-color);
  text-decoration: none;

  &:hover {
    color: var(--color-text);
    background-color: var(--color-surface-overlay);
  }

  &.router-link-active {
    color: var(--color-primary);
    background-color: oklch(from var(--color-primary) l c h / 0.08);
  }
}

/* ─── Main ─── */
.app-main {
  flex: 1;
  padding-block: var(--space-fluid-md);
}

/* ─── Footer ─── */
.app-footer {
  padding-block: var(--space-6);
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: var(--font-size-sm);
}
</style>
