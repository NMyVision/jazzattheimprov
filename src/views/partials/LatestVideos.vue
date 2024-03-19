<script setup lang="ts">
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
const videos = ['_tXqBNuDcyk?si=HT5tGcWVQEi-e9JU', 'iBUmtR9YcTo?si=VUk_h8ATKOhc5-tl', 'Ql1fZphvOVE?si=e6Z0uDKIqzv9n0Nx']
</script>

<template>
  <section class="">
    <div class="wrapper relative isolate p-20">
      <div class="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-1000 to-black"></div>
      <h3 class="mb-2 text-2xl font-bold uppercase text-white">Latest Videos</h3>
      <div class="grid min-h-72 w-full gap-10 sm:grid-cols-3">
        <template v-for="v in videos" :key="v">
          <iframe class="aspect-video h-full w-full object-cover object-center" :src="`https://www.youtube.com/embed/${v}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </template>
      </div>
    </div>
  </section>
</template>
