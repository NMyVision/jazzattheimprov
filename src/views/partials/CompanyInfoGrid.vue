<script setup lang="tsx">
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
const EnvelopeIcon = (
  <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
)
const BuildingOffice2Icon = (
  <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
)

const PhoneIcon = (
  <svg class="h-7 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
)
</script>

<template>
  <div class="flex gap-x-4" v-if="false">
    <dt class="flex-none">
      <span class="sr-only">Address</span>
      <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
    </dt>
    <dd>212 Brook Manor Ct<br />Cary, North Carolina 27513</dd>
  </div>
  <div class="flex gap-x-4">
    <dt class="flex-none">
      <span class="sr-only">Telephone</span>
      <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
    </dt>
    <dd><a class="hover:text-white" href="tel:+1 (919) 339-9393">+1 (919) 339-9393</a></dd>
  </div>
  <div class="flex gap-x-4">
    <dt class="flex-none">
      <span class="sr-only">Email</span>
      <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
    </dt>
    <dd class="hover:bg-black/80"><span>info</span><span>@</span><span>jazzattheimprov.com</span></dd>
  </div>
</template>
