<script setup lang="ts">
type Props = { title: string }
const { title } = defineProps<Props>()
// const emits = defineEmits()
</script>

<template>
  <article>
    <h3 class="text-xl font-medium mb-2 uppercase text-zinc-200">{{ title }}</h3>
    <p class="leading-loose">
      <slot />
    </p>
  </article>
</template>
