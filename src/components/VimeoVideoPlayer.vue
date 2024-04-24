<script setup lang="ts">
type Props = {
  videoId: string | number
  title: string
}
const { videoId, title } = defineProps<Props>()
</script>

<template>
  <div style="padding: 56.25% 0 0 0; position: relative"><iframe :src="`https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1&amp;autoplay=1&amp;muted=1`" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" :title></iframe></div>
</template>
