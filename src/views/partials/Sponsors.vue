<script setup lang="ts">
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
</script>

<template>
  <div class="bg-zinc-50 bg-[url('/beams-home@95.jpg')] py-8 sm:py-20">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <div class="px-20">
        <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Proud Sponsors</h2>
        <p class="mt-6 text-balance text-center text-lg leading-8 text-gray-500">We are thrilled to announce the generous support of our sponsors for the upcoming jazz concert series. Their commitment plays an essential role in bringing the vibrant and soulful sounds of jazz to our community.</p>
      </div>
      <div class="mx-auto my-20 grid w-full max-w-xl items-center justify-center gap-y-12 sm:gap-y-14 md:grid-cols-3 lg:mx-0 lg:max-w-none">
        <img class="max-h-24 w-full object-contain object-center" src="/Jeter_Management.png" alt="Jeter Management" />
        <img class="max-h-24 w-full object-contain object-center" src="/MBofCary.png" alt="MB of Cary" />
        <img class="max-h-24 w-full object-contain object-center" src="/KeatonBarrowRealty.png" alt="Keaton Barrow Realty" />
      </div>

      <div class="flex justify-center">
        <p class="relative space-x-1.5 rounded-full bg-purple-900 px-6 py-1.5 text-sm leading-6 text-purple-200">
          <span class="hidden md:inline">Interested in partnership or sponsoring?</span>
          <RouterLink :to="{ name: 'contact-us' }" class="font-semibold text-white"><span class="absolute inset-0" aria-hidden="true" />Let's talk. <span aria-hidden="true">&rarr;</span></RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
