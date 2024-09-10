<script setup lang="ts">
import { templateRef, useToggle } from '@vueuse/core'

type Props = { source: string }
const { source } = defineProps<Props>()
// const emits = defineEmits<{ click:[] }>()
const audioPlayer = templateRef('audioPlayer')

const [isPlaying, toggle] = useToggle(false)
const togglePlaying = () => {
  if (audioPlayer.value === null) return
  if (isPlaying.value) {
    audioPlayer.value.pause()
    toggle()
  } else {
    audioPlayer.value.play()
    toggle()
  }
}
onMounted(() => {
  audioPlayer.value.addEventListener('ended', () => {
    toggle()
  })
})
</script>

<template>
  <div>
    <button type="button" alt="Play Promo Audio" class="inline-grid grid-cols-[auto,1fr] gap-2 rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="togglePlaying">
      <div>
        <template v-if="isPlaying">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="size-5">
            <path class="fa-secondary" opacity=".4" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128zm128 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128z" />
            <path class="fill-white" d="M192 160c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32zm128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
          </svg>
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="size-5">
            <path class="fa-secondary" opacity=".4" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM176 128L384 256 176 384l0-256z" />
            <path class="fill-white" d="M176 384V128L384 256 176 384z" />
          </svg>
        </template>
      </div>
      <div>Promo</div>
    </button>

    <audio ref="audioPlayer">
      <source :src="source" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>
