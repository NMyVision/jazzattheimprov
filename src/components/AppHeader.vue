<script setup lang="ts">
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
</script>

<template>
  <header>
    <nav class="flex justify-between p-4 wrapper">
      <div>
        <a class="flex gap-2 items-center" href="/">
          <img src="/man.svg" class="w-12" />
          <h3 class="text-white/90 text-2xl font-light"><span class="font-bold text-white">Smooth Jazz</span> at The
            Improv</h3>
          <span class="sr-only">Home</span>
        </a>
      </div>
      <ul class="flex gap-4">
        <li><a href="">Memberships</a></li>
        <li><a href="">Shows</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
    </nav>
  </header>
</template>
