<script setup lang="ts">
const visible = ref(false)
const entry = ref(false)
const opacity = ref(0)
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
  <section class="relative md:pb-20 pb-10 sm:min-h-[600px] ">
    <div v-if="false"
      class="absolute z-30 inset-0 overflow-hidden flex items-center justify-center min-h-[600px] transition ease-in-out delay-[2000ms] duration-[10000ms] "
      :class="entry && 'bg-black/75'">

      <img src="/logo_w_text.svg" width="800px" class="animate-fade-in" v-if="visible" />


    </div>
    <div class="wrapper">
      <iframe class="w-full aspect-video rounded-lg shadow-lg object-cover h-full "
        src="https://www.youtube.com/embed/1SIyPCHpPPI?si=wOFWt4T4qigW85jq&autoplay=1&loop=1" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>

    </div>
  </section>

  <section class="relative md:px-20 md:py-40" style="background-image: url('/crowd-background.jpg')">

    <div class="wrapper md:flex items-center min-h-screen relative gap-6 z-20">
      <img src="/cover_alex_bugnon.jpeg" alt="" />
      <div class="ml-8 space-y-6">
        <h3
          class="mt-10 mb-2 uppercase text-5xl lg:text-7xl font-light bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-violet-500">
          Alex bugnon</h3>
        <p class="text-white text-2xl">Wednesday, January 17<sup>th</sup> 2024 @ 7:30 pm</p>

        <p><b>Raleigh Improv</b><br />1224 Parkside Main Street<br /> Cary, NC 27519</p>

        <div class="py-6">
          <a class="border-2 rounded-full px-6 py-2  text-white font-bold border-gold bg-black/90 whitespace-nowrap"
            href="https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+alex+bugnon/13342883/">Buy
            Tickets here - 7:30PM Show</a>
        </div>
        <div class="pt-4">
          <iframe loading="lazy" title="Giant Steps" width="300" height="200"
            src="https://www.youtube.com/embed/1nuxmUBC35w?feature=oembed" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </section>

  <section class="sm:h-96 flex items-center ">
    <div class="p-20 wrapper ">
      <h3 class="text-white font-bold mb-2 uppercase text-2xl">Latest Videos</h3>
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
