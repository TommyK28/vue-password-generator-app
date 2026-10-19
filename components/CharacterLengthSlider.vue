<script setup lang="ts">
const { min, max } = defineProps<{
  min: number
  max: number
}>()

const length = defineModel<number>({ required: true })

const inputId = useId()

const filledTrackRatio = computed(() => (length.value - min) / (max - min))
</script>

<template>
  <div class="character-length">
    <div class="character-length__header">
      <label class="character-length__label" :for="inputId">Character Length</label>
      <output class="character-length__value" :for="inputId">{{ length }}</output>
    </div>
    <input
      :id="inputId"
      v-model.number="length"
      class="character-length__slider"
      type="range"
      :min="min"
      :max="max"
      :style="{ '--filled-track-ratio': filledTrackRatio }"
    >
  </div>
</template>

<style scoped>
.character-length {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-fluid-100-200);
}

.character-length__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.character-length__value {
  font-size: var(--font-size-fluid-1);
  line-height: var(--line-height-fluid-1);
  color: var(--color-text-accent);
}

.character-length__slider {
  --track-height: 0.5rem;  /*  8px */
  --thumb-size: 1.75rem;   /* 28px */
  /* Hover rámeček je ve Figmě vně jezdce (stroke outside), proto box-shadow místo borderu */

  appearance: none;
  inline-size: 100%;
  block-size: var(--thumb-size);
  background: none;
  cursor: pointer;
}

.character-length__slider::-webkit-slider-runnable-track {
  /* Výplň končí ve středu jezdce, stejně jako -moz-range-progress ve Firefoxu */
  --filled-track-end: calc(var(--thumb-size) / 2 + (100% - var(--thumb-size)) * var(--filled-track-ratio));

  block-size: var(--track-height);
  background: linear-gradient(
    to right,
    var(--color-slider-fill) var(--filled-track-end),
    var(--color-slider-track) var(--filled-track-end)
  );
}

.character-length__slider::-moz-range-track {
  block-size: var(--track-height);
  background-color: var(--color-slider-track);
}

.character-length__slider::-moz-range-progress {
  block-size: var(--track-height);
  background-color: var(--color-slider-fill);
}

.character-length__slider::-webkit-slider-thumb {
  appearance: none;
  inline-size: var(--thumb-size);
  block-size: var(--thumb-size);
  margin-block-start: calc((var(--track-height) - var(--thumb-size)) / 2);
  border: 0;
  border-radius: var(--radius-range-slider);
  background-color: var(--color-slider-thumb);
  transition:
    box-shadow var(--transition-hover),
    background-color var(--transition-hover);
}

.character-length__slider::-moz-range-thumb {
  inline-size: var(--thumb-size);
  block-size: var(--thumb-size);
  border: 0;
  border-radius: var(--radius-range-slider);
  background-color: var(--color-slider-thumb);
  transition:
    box-shadow var(--transition-hover),
    background-color var(--transition-hover);
}

.character-length__slider:hover::-webkit-slider-thumb {
  box-shadow: 0 0 0 var(--border-width) var(--color-slider-thumb-border-hover);
  background-color: var(--color-slider-thumb-hover);
}

.character-length__slider:hover::-moz-range-thumb {
  box-shadow: 0 0 0 var(--border-width) var(--color-slider-thumb-border-hover);
  background-color: var(--color-slider-thumb-hover);
}
</style>
