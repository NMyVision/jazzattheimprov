<script setup lang="tsx">
import { useGoogleForm } from '@/useGoogleForm'
import CompanyInfoGrid from './partials/CompanyInfoGrid.vue'

const deploy = import.meta.env.VITE_GOOGLE_DEPLOY_KEY || ''
const url = `https://script.google.com/macros/s/${deploy}/exec`
//const url = "http://localhost:9000"

const { execute, isLoading, isError, isSuccess } = useGoogleForm(url)

const onSubmit = async (e: Event) => {
  try {
    e.preventDefault()
    let state: Record<string, string> = {}
    new FormData(e.target as HTMLFormElement).forEach((value, key) => {
      state[key as keyof typeof state] = value as string
    })
    await execute(state)

    if (!isError) {
      ;(e.target as HTMLFormElement).reset()
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="relative isolate border-y border-white/10 bg-[url('/crowd-background.jpg')] bg-cover">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="absolute inset-y-0 right-0 z-10 w-full bg-indigo-1000/85 lg:w-1/2"></div>
      <div class="relative z-20 px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="z-30 mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden border-r border-white/10 lg:w-1/2">
            <div v-if="false" class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
              <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)" />
            </div>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Got questions, suggestions, or just want to share some cool jazz vibes? We're all ears—like a saxophone solo on a breezy evening! Whether you're interested in sponsorship opportunities, ask about our line-up, or just chat about your favorite jazz era, we're here to groove with you.</p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <CompanyInfoGrid />
          </dl>
        </div>
      </div>
      <form @submit.prevent="onSubmit" class="z-20 px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div v-if="isSuccess">
          <div class="flex h-96 flex-col items-center gap-4">
            <p class="p-4 text-lg font-semibold leading-6 text-green-500">Thank you for reaching out!</p>
            <RouterLink to="/" class="text-white">Click here to return to main page</RouterLink>
          </div>
        </div>
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg" v-else>
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="name" class="block text-sm font-semibold leading-6 text-white">Name</label>
              <div class="mt-2.5">
                <input type="text" required value="" name="name" id="name" autocomplete="full-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label for="phone" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
              <div class="mt-2.5">
                <input type="tel" value="" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
              <div class="mt-2.5">
                <input type="email" value="" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
              <div class="mt-2.5">
                <textarea required name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="hidden sm:col-span-2">
              <input name="website" id="website" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="mt-8 flex justify-between">
            <RouterLink custom to="/" v-slot="{ navigate }">
              <button type="button" @click="navigate" to="/" class="text-sm text-white">Cancel</button>
            </RouterLink>

            <button type="submit" :disabled="isLoading" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 hover:disabled:bg-indigo-500">
              {{ isLoading ? 'Sending...' : isError ? 'Error!' : 'Send message' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
