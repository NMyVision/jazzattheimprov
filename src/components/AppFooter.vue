<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppLink from '@/components/AppLink.vue'

import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconYouTube from './icons/IconYouTube.vue';

const footerLinks = [
  { label: 'Home', to: "/" },
  { label: 'Memberships', to: "https://jazzattheimprov.com/my-account/members/" },
  { label: 'Shows', to: "/shows" },
  { label: 'Terms and Conditions', to: "/termsandconditions" },
  { label: 'Privacy', to: "/privacypolicy" },
  { label: 'Contact Us', to: "https://jazzattheimprov.com/contact/" }
]

const socialLinks = [
  { label: 'Facebook', icon: IconFacebook, to: "https://www.facebook.com/SMOOTHJAZZATTHEIMPROV" },
  { label: 'Instagram', icon: IconInstagram, to: "https://www.instagram.com/smoothjazzattheimprov/" },
  { label: 'YouTube', icon: IconYouTube, to: "https://www.youtube.com/@SmoothJazzattheImprovPresents/videos" }
]

</script>

<template>
  <footer class="border-t border-zinc-800/50 mt-10">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">

      <nav class="-mb-6 flex flex-col text-center sm:flex-row sm:flex sm:justify-center gap-6 sm:gap-12"
        aria-label="Footer">
        <template v-for="link in footerLinks" :key="link.label">
          <AppLink :to="link.to" v-slot="{ href, isActive, navigate }">
            <a :href="href" @click="navigate"
              :class="['leading-6', isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-gray-50']">{{
                link.label }}</a>
          </AppLink>
        </template>
      </nav>

      <div class="mt-12 flex justify-center space-x-6">
        <template v-for="link in socialLinks" :key="link.label">
          <a :href="link.to" target="_blank" class="text-gray-400 hover:text-gray-500 p-4">
            <span class="sr-only">{{ link.label }}</span>
            <Component :is="link.icon" />
          </a>
        </template>
      </div>

      <p class="mt-10 text-center text-xs leading-5 text-gray-500">&copy; {{ new Date().getFullYear() }} Smooth Jazz at
        the Improv. All rights reserved.</p>

    </div>

  </footer>
</template>