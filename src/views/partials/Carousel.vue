<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/Carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useToggle } from '@vueuse/core'
// type Props = { }
// const { } = defineProps<Props>()
// const emits = defineEmits()

//const set = ['RCP_7326.jpg', 'RCP_7399.jpg', 'RCP_7372.jpg', 'RLC_2624.jpg', '2024_03/IMG_3781.jpg', '2024_03/IMG_3786.jpg', '2024_03/IMG_3788.jpg', '2024_03/IMG_3797.jpg', '2024_03/IMG_3806.jpg', '2024_03/IMG_3810.jpg', '2024_03/IMG_3842.jpg', '2024_03/IMG_3844.jpg', '2024_03/IMG_3858.jpg', '2024_03/IMG_3864.jpg', '2024_03/IMG_3868.jpg', '2024_03/IMG_3872.jpg', '2024_03/IMG_3880.jpg', '2024_03/IMG_3885.jpg', '2024_03/IMG_3887.jpg', '2024_03/IMG_3891.jpg']

const set = [
  {
    public_id: 'raleigh/2024-04/IMG_3937_b9twht',
    format: 'jpg',
    filename: 'IMG_3937_b9twht',
    version: '1716515449',
    folder: 'raleigh/2024-04',
    asset_id: 'c77dd01ade7632d925b8959c91c439f7'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3942_fvgo45',
    format: 'jpg',
    filename: 'IMG_3942_fvgo45',
    version: '1716515449',
    folder: 'raleigh/2024-04',
    asset_id: '39b7e6387aa8710fa19d49b3077ae5eb'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3983_d5cxb8',
    format: 'jpg',
    filename: 'IMG_3983_d5cxb8',
    version: '1716515449',
    folder: 'raleigh/2024-04',
    asset_id: '0ac3889faa52bfb950e082fe4038a9d7'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3972_j3dlnw',
    format: 'jpg',
    filename: 'IMG_3972_j3dlnw',
    version: '1716515448',
    folder: 'raleigh/2024-04',
    asset_id: 'ca4d589cc9508773d9162e3aaf7f7ae9'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3951_ev5pe1',
    format: 'jpg',
    filename: 'IMG_3951_ev5pe1',
    version: '1716515447',
    folder: 'raleigh/2024-04',
    asset_id: '4e078dc73a75e219f860789dfeebbb78'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3944_c7jtyy',
    format: 'jpg',
    filename: 'IMG_3944_c7jtyy',
    version: '1716515447',
    folder: 'raleigh/2024-04',
    asset_id: 'ec8bc41333d23d18427032b8ff78ff4a'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3955_ipb7zc',
    format: 'jpg',
    filename: 'IMG_3955_ipb7zc',
    version: '1716515447',
    folder: 'raleigh/2024-04',
    asset_id: '554dd758c6fb3b3717db4c5309189262'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3949_exewyt',
    format: 'jpg',
    filename: 'IMG_3949_exewyt',
    version: '1716515446',
    folder: 'raleigh/2024-04',
    asset_id: '1d92b7af4a93c8002130b8fda0a05954'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3967_xxenr0',
    format: 'jpg',
    filename: 'IMG_3967_xxenr0',
    version: '1716515446',
    folder: 'raleigh/2024-04',
    asset_id: '7a148f17ff152a2c28b3c088e8179a93'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3986_kelexi',
    format: 'jpg',
    filename: 'IMG_3986_kelexi',
    version: '1716515445',
    folder: 'raleigh/2024-04',
    asset_id: 'bf0ac639babee21d900a0f37bbdb105c'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3960_yl1gwj',
    format: 'jpg',
    filename: 'IMG_3960_yl1gwj',
    version: '1716515444',
    folder: 'raleigh/2024-04',
    asset_id: '8d37611120fa6fe12df749a3b8be2764'
  },
  {
    public_id: 'raleigh/2024-04/IMG_4009_j0upue',
    format: 'jpg',
    filename: 'IMG_4009_j0upue',
    version: '1716515444',
    folder: 'raleigh/2024-04',
    asset_id: '7341afc4a228079f0b23779c1e08e869'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3980_zybgb5',
    format: 'jpg',
    filename: 'IMG_3980_zybgb5',
    version: '1716515443',
    folder: 'raleigh/2024-04',
    asset_id: '548bb1b1c735aabb5d63c88997a06f2e'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3995_rt4vjc',
    format: 'jpg',
    filename: 'IMG_3995_rt4vjc',
    version: '1716515443',
    folder: 'raleigh/2024-04',
    asset_id: 'a93b4d38d7f86d0b7b8dec3ed323e738'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3978_fhgqlc',
    format: 'jpg',
    filename: 'IMG_3978_fhgqlc',
    version: '1716515442',
    folder: 'raleigh/2024-04',
    asset_id: 'f444726acaf627f37493d24a58b9c149'
  },
  {
    public_id: 'raleigh/2024-04/IMG_3974_njozes',
    format: 'jpg',
    filename: 'IMG_3974_njozes',
    version: '1716515441',
    folder: 'raleigh/2024-04',
    asset_id: '40690c470ecd2d2a4e05a8c585911335'
  }
]

const randomizedSet = [...set.map((img) => img.public_id)]

for (let i = randomizedSet.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  const temp = randomizedSet[i]
  randomizedSet[i] = randomizedSet[j]
  randomizedSet[j] = temp
}
</script>

<template>
  <div class="relative isolate flex min-h-96 items-center md:h-[90dvh]">
    <div class="absolute inset-0 -z-10 bg-[url('/crowd-background.jpg')]"></div>

    <Carousel class="relative mx-auto w-full max-w-screen-xl" :plugins="[Autoplay({ delay: 5000 })]">
      <CarouselContent>
        <template v-for="img in randomizedSet" :key="img">
          <CarouselItem class="relative grid aspect-video justify-center *:max-h-[80dvh] *:w-full *:object-cover">
            <img :src="`https://res.cloudinary.com/dm7x6mos2/image/upload/c_mfit,h_400,w_400/v1716515449/${img}`" />
            <div v-if="false" :style="`background-image: url(/gallery/${img}?nf_resize=smartcrop&h=400)`" class="relative bg-contain bg-center bg-no-repeat">
              <img :src="`/gallery/${img}?nf_resize=smartcrop&h=400`" class="opaci0" />
            </div>
          </CarouselItem>
        </template>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
