<script setup lang="ts">
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
const data = {
  name: 'Rick Braun',
  date: 'April 17, 2024',
  location: '1224 Parkside Main Street Cary, NC 27519'
}
const link = 'https://improv.com/raleigh/event/smooth+jazz+at+the+improv+presents%3a+rick+braun/13518773/'
</script>

<template>
  <div class="flex-1 p-10">
    <div class="flex justify-center gap-8">
      <div class="mx-auto flex flex-col gap-10 md:flex-row">
        <div class="md:w-2/5">
          <img src="../../assets/RickBraun_20240417.jpeg" alt="Rick Braun" class="mx-auto h-full w-full max-w-screen-sm object-cover" />
        </div>
        <div class="space-y-4 text-xl text-indigo-700 md:w-3/5">
          <p class="uppercase text-sm">upcoming concert</p>

          <h2 class="bg-white bg-clip-text text-7xl font-light text-transparent">{{ data.name }}</h2>
          <p class="text-yellow-500">
            {{ data.date }}<br />
            {{ data.location }}
          </p>
          <p class=""></p>
          <div class="pt-6">
            <a :href="link" target="_blank" class="block w-full rounded-md bg-gradient-to-tr from-indigo-700 to-violet-800 px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-block md:w-auto">Buy Ticket</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
