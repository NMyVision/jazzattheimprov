<script setup lang="ts">
import { useMediaStore } from '@/stores/media'
const visible = ref(false)
const entry = ref(false)
const opacity = ref(0)
const { episodes } = useMediaStore()
onMounted(() => {
  setTimeout(() => {
    entry.value = true
  }, 1000)

  setTimeout(() => {
    visible.value = true
  }, 3000)

  const interval = setInterval(() => {
    opacity.value -= 0.1
    if (opacity.value < 0) clearInterval(interval)
  }, 2000)
})

</script>

<template>
  <section class="relative pb-20 sm:min-h-[600px] ">
    <div v-if="false"
      class="absolute z-30 inset-0 overflow-hidden flex items-center justify-center min-h-[600px] transition ease-in-out delay-[2000ms] duration-[10000ms] "
      :class="entry && 'bg-black/75'">

      <img src="/logo_w_text.svg" width="800px" class="animate-fade-in" v-if="visible" />


    </div>
      <div class="w-[85%] h-[50vw] mt-[5vw] mx-[auto] my-[0]">
        <iframe class="w-full aspect-video rounded-lg shadow-lg object-cover h-full "
          src="https://www.youtube.com/embed/QgmKb2sR_pc?si=REpZSC-5Xsxu71dr&autoplay=1&mute=1&?start=0&end=122&rel=0" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; autoplay; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
  </section>

  <section class="relative px-20 py-20" style="background-image: url('/crowd-background.jpg')">

    <div class="md:flex items-center min-h-screen relative gap-6 z-20 mx-[auto] my-[0] justify-center">
      <img src="/cover_alex_bugnon.jpeg" alt="" />
      <div class="ml-8 space-y-6">
        <h3 class="mt-10 mb-2 uppercase text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-violet-500 font-bold">{{ episodes[0].title }}</h3>
        <p class="text-white text-2xl">Thursday, February 15<sup>th</sup> 2024 @ 7:30 pm</p>

        <p><b>Raleigh Improv</b><br />1224 Parkside Main Street<br /> Cary, NC 27519</p>

        <div class="py-6">
          <a class="border-2 rounded-full px-6 py-2  text-white font-bold border-gold bg-black/90 whitespace-nowrap [transition:.6s_ease-in-out]
                  hover:bg-[white] hover:border-[2px] hover:border-[border-gold] hover:text-[black]"
            href="https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+marcus+anderson/13449433/" target="_blank">
            Buy Tickets Here</a>
        </div>

        <div class="pt-4">
          <iframe loading="lazy" title="Soul Ties" width="300" height="200"
            src="https://www.youtube.com/embed/8omOgGUJA-o?si=AQDXlLu8m_QIeLmKfeature=oembed" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </section>

  <section class="">
    <div class="p-20 wrapper">
      <h3 class="text-white font-bold mb-2 uppercase text-2xl">Latest Videos</h3>
      <!-- <p class="leading-loose">
        At Jazz at the Improv Society, our mission is twofold: to ensure that jazz never fades into obscurity and to
        provide a
        platform for both legendary and emerging jazz performers to captivate audiences with their musical prowess.
        Our society
        is committed to preserving the authenticity of jazz, fostering innovation within the genre, and passing on the
        rich
        legacy of jazz improvisation to future generations.
      </p> -->
      <div class="w-full h-[30vw] grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr] gap-[3vw] pt-[1vw]">
        <div class="h-full relative">
          <iframe class="w-full h-full object-cover object-center" width="560" height="315" src="https://www.youtube.com/embed/iBUmtR9YcTo?si=VUk_h8ATKOhc5-tl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="h-full relative object-cover object-center">
          <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/Ql1fZphvOVE?si=e6Z0uDKIqzv9n0Nx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="h-full relative object-cover object-center">
          <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/ooA2ESfzEHo?si=eG845GA5Np8RJa_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </div>
  </section>

  <section class="sm:h-96 flex items-center bg-zinc-950">
    <div class="p-20 wrapper">
      <h3 class="text-white font-bold mb-2 text-2xl">OUR MISSION</h3>
      <p class="leading-loose">
        At Jazz at the Improv Society, our mission is twofold: to ensure that jazz never fades into obscurity and to
        provide a
        platform for both legendary and emerging jazz performers to captivate audiences with their musical prowess.
        Our society
        is committed to preserving the authenticity of jazz, fostering innovation within the genre, and passing on the
        rich
        legacy of jazz improvisation to future generations.
      </p>
    </div>
  </section>


</template>

