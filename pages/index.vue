<script setup lang="ts">
useSeoMeta({
  title: 'Přehled — Design System',
  description: 'Vue 3 + Nuxt 3 + Vite Design System s moderními CSS custom properties'
})

const buttonVariants = ['primary', 'secondary', 'ghost', 'danger', 'success'] as const
const badgeVariants  = ['default', 'primary', 'success', 'warning', 'danger', 'info'] as const

const inputValue = ref('')
const inputError = ref('')

function validateInput() {
  inputError.value = inputValue.value.length < 3
    ? 'Minimálně 3 znaky'
    : ''
}
</script>

<template>
  <div class="stack-lg">
    <!-- Hero -->
    <section class="hero">
      <DsBadge variant="primary" dot>v0.1.0 · alpha</DsBadge>
      <h1 class="hero__title">Design System</h1>
      <p class="hero__subtitle text-subtle">
        Starter šablona postavená na Vue&nbsp;3, Nuxt&nbsp;3 a Vite.<br>
        Čisté CSS s moderními custom properties a OKLCH barevným prostorem.
      </p>
      <div class="flex gap-md">
        <DsButton size="lg">Začít</DsButton>
        <DsButton variant="ghost" size="lg">Dokumentace</DsButton>
      </div>
    </section>

    <!-- Technologie -->
    <section>
      <h2>Technologický základ</h2>
      <div class="tech-grid">
        <DsCard v-for="tech in technologies" :key="tech.name" elevation="raised">
          <div class="tech-card">
            <span class="tech-card__icon">{{ tech.icon }}</span>
            <h3>{{ tech.name }}</h3>
            <p class="text-subtle">{{ tech.desc }}</p>
          </div>
        </DsCard>
      </div>
    </section>

    <!-- Buttony -->
    <section>
      <h2>Tlačítka</h2>
      <DsCard elevation="flat">
        <div class="component-row">
          <DsButton
            v-for="v in buttonVariants"
            :key="v"
            :variant="v"
          >
            {{ v }}
          </DsButton>
          <DsButton loading>Loading</DsButton>
          <DsButton disabled>Disabled</DsButton>
        </div>

        <div class="component-row" style="margin-top: var(--space-4)">
          <DsButton size="sm">Small</DsButton>
          <DsButton size="md">Medium</DsButton>
          <DsButton size="lg">Large</DsButton>
        </div>
      </DsCard>
    </section>

    <!-- Badgy -->
    <section>
      <h2>Odznaky</h2>
      <DsCard elevation="flat">
        <div class="component-row">
          <DsBadge
            v-for="v in badgeVariants"
            :key="v"
            :variant="v"
          >
            {{ v }}
          </DsBadge>
        </div>
        <div class="component-row" style="margin-top: var(--space-4)">
          <DsBadge variant="success" dot>Online</DsBadge>
          <DsBadge variant="danger" dot>Chyba</DsBadge>
          <DsBadge variant="warning" dot>Varování</DsBadge>
        </div>
      </DsCard>
    </section>

    <!-- Input -->
    <section>
      <h2>Vstupy</h2>
      <DsCard elevation="flat">
        <div style="max-width: 400px; display: flex; flex-direction: column; gap: var(--space-4)">
          <DsInput
            v-model="inputValue"
            label="Uživatelské jméno"
            placeholder="Zadejte jméno..."
            helper-text="Minimálně 3 znaky"
            :error-message="inputError"
            required
            @input="validateInput"
          />
          <DsInput
            label="Email"
            type="email"
            placeholder="vas@email.cz"
          />
          <DsInput
            label="Heslo (disabled)"
            type="password"
            disabled
            model-value="secret"
          />
        </div>
      </DsCard>
    </section>

    <!-- Karty -->
    <section>
      <h2>Karty</h2>
      <div class="cards-grid">
        <DsCard elevation="flat">
          <template #header>Flat karta</template>
          Bez stínu, s ohraničením.
          <template #footer>
            <DsButton size="sm" variant="ghost">Zrušit</DsButton>
            <DsButton size="sm">Potvrdit</DsButton>
          </template>
        </DsCard>

        <DsCard elevation="raised">
          <template #header>Raised karta</template>
          S jemným stínem.
          <template #footer>
            <DsButton size="sm" variant="secondary">Více info</DsButton>
          </template>
        </DsCard>

        <DsCard elevation="raised" interactive>
          <template #header>Interaktivní karta</template>
          Hover efekt s animací.
        </DsCard>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
const technologies = [
  { name: 'Vue 3',  icon: '⬡', desc: 'Composition API, Script Setup, TypeScript' },
  { name: 'Nuxt 3', icon: '◆', desc: 'SSR/SSG, Auto-imports, File-based routing' },
  { name: 'Vite',   icon: '⚡', desc: 'HMR, ESM, optimalizovaný build' },
  { name: 'CSS',    icon: '◈', desc: 'OKLCH, @layer, @property, Container Queries' },
]
</script>

<style scoped>
/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-block: var(--space-fluid-lg);
}

.hero__title {
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-black);
  letter-spacing: var(--letter-spacing-tighter);
  line-height: var(--line-height-none);

  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-secondary),
    var(--color-accent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__subtitle {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  max-width: 50ch;
}

/* Tech grid */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  gap: var(--space-4);
  margin-top: var(--space-6);
}

.tech-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.tech-card__icon {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
}

/* Component showcase */
.component-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
}

/* Cards grid */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
  gap: var(--space-4);
  margin-top: var(--space-6);
}

/* Sekce nadpisy */
h2 {
  margin-bottom: var(--space-4);
  color: var(--color-text-subtle);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-widest);
  text-transform: uppercase;
}
</style>
