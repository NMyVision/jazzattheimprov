<template>
  <header class="sticky top-0 z-10 mb-8 bg-indigo-1000 dark:bg-black">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <div class="flex items-center justify-center gap-2 tracking-tight hover:cursor-pointer">
            <img src="/man.svg" class="h-8 w-8" />
            <h3 class="/90 text-2xl font-light text-white"><span class="bg-gradient-to-b from-purple-500 to-violet-500 bg-clip-text font-bold text-transparent">Smooth Jazz</span> at The Improv</h3>
          </div>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <BarsIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-500">{{ item.name }}</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-500">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-indigo-1000 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-indigo-1000">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 flex gap-4 p-1.5">
            <img src="/man.svg" class="h-8 w-8" />
            <h3 class="/90 text-2xl font-light text-white"><span class="bg-gradient-to-b from-purple-500 to-violet-500 bg-clip-text font-bold text-transparent">Smooth Jazz</span> at The Improv</h3>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-900">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-900">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="tsx">
import { Dialog, DialogPanel } from '@headlessui/vue'

const navigation: any[] = [
  // { name: 'Product', href: '#' },
  // { name: 'Features', href: '#' },
  // { name: 'Marketplace', href: '#' },
  // { name: 'Company', href: '#' }
]

const mobileMenuOpen = ref(false)

const BarsIcon = defineComponent({
  render: () => (
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
})
const XMarkIcon = defineComponent({
  render: () => (
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
})
</script>
