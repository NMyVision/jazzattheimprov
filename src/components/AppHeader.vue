<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import AppLink from '@/components/AppLink.vue'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()
const navigation = [
  { label: 'Memberships', to: "https://jazzattheimprov.com/my-account/members/" },
  { label: 'Shows', to: "/shows" },
  { label: 'Contact Us', to: "https://jazzattheimprov.com/contact/" }
]

</script>

<template>
  <header class="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">

    <Disclosure as="nav" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-20 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>

              <svg v-if="!open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div class="flex flex-shrink-0 items-center">
              <RouterLink to="/"> <!-- clicking on title or image in header now links back to the home page -->
                <div class="tracking-tight flex justify-center items-center hover:cursor-pointer gap-2">
                  <img src="/man.svg" class="h-8 w-8" />
                  <h3 class="text-white /90 font-light text-2xl"><span
                      class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-violet-500">Smooth
                      Jazz</span> at The Improv</h3>
                </div>
              </RouterLink>
            </div>
            <div class="hidden sm:block">
              <ul class=" ml-auto list-none inline-flex justify-center gap-4">

                <template v-for="link in navigation" :key="link.label">

                  <AppLink :to="link.to" v-slot="{ href, isActive, navigate }">
                    <li
                      :class="isActive ? 'after:w-full after:bg-white ' : 'after:w-0 after:hover:w-full after:[transition:.4s_ease-in-out] after:bg-zinc-200'"
                      class="text-white /90 font-light hover:cursor-pointer after:content-[''] after:h-[2px] after:block after:m-auto after:mt-1 bg-none">
                      <a :href="href" @click="navigate" :class="isActive && 'text-white font-bold'">{{ link.label }}</a>
                    </li>
                  </AppLink>
                </template>



              </ul>
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <template v-for="item in navigation" :key="item.name">
            <AppLink custom :to="item.to" v-slot="{ href, isActive, navigate }">
              <DisclosureButton as="a" :href="href" @click="navigate"
                :class="[isActive ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white ', 'block rounded-md px-3 py-2 text-base font-medium']"
                :aria-current="isActive ? 'page' : undefined">{{ item.label }}</DisclosureButton>
            </AppLink>
          </template>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="relative w-full flex justify-center items-center" v-if="false">
      <div class="w-full flex justify-between items-center py-[0] h-full">
        <RouterLink to="/"> <!-- clicking on title or image in header now links back to the home page -->
          <div class="tracking-[.5px] flex justify-center items-center hover:cursor-pointer">
            <img src="/man.svg" class="h-6 w-6" />
            <h3 class="text-white /90 font-light"><span
                class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-violet-500">Smooth
                Jazz</span> at The Improv</h3>
          </div>
        </RouterLink>
        <ul class="sm:hidden list-none inline-flex justify-center gap-4">
          <template v-for="link in navigation" :key="link.label">

            <AppLink :to="link.to" v-slot="{ href, isActive, navigate }">
              <li
                :class="isActive ? 'after:w-full after:bg-white ' : 'after:w-0 after:hover:w-full after:[transition:.4s_ease-in-out] after:bg-zinc-200'"
                class="text-white /90 font-light hover:cursor-pointer after:content-[''] after:h-[2px] after:block after:m-auto after:mt-1 after:w-full  bg-none">
                <a :href="href" @click="navigate" :class="isActive && 'text-white font-bold'">{{ link.label }}</a>
              </li>
            </AppLink>
          </template>

        </ul>
      </div>
    </div>

    <!-- <div class="header-container">
      <div class="header-elements">
            <div class="headercompany">
                <img src="/man.svg"/>
                <h3 class="text-white /90 font-light headertext"><span
              class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-violet-500">Smooth
              Jazz</span> at The
            Improv</h3>
            </div>
            <ul class="headerlinks">
                <li class="link-element text-white /90 font-light">Memberships</li>
                <li class="link-element text-white /90 font-light">Shows</li>
                <li class="link-element text-white /90 font-light">Contact Us</li>
            </ul>
        </div>

    </div> -->

    <!-- <nav class="flex justify-between p-4 wrapper ">
      <div>
        <RouterLink class="flex gap-2 items-center" to="/">
          <img src="/man.svg" class="w-12" />
          <h3 class="text-white /90 text-2xl font-light"><span
              class="font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-violet-500">Smooth
              Jazz</span> at The
            Improv</h3>
          <span class="sr-only">Home</span>
        </RouterLink>
      </div>
      <ul class="flex gap-4">
        <li>
          <RouterLink to="/">Memberships</RouterLink>
        </li>
        <li>
          <RouterLink to="/shows">Shows</RouterLink>
        </li>
        <li>
          <RouterLink to="/shows">Contact Us</RouterLink>
        </li>
      </ul>
    </nav> -->

  </header>
</template>
