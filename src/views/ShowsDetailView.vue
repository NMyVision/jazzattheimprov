
<script setup lang="ts" async>

import { useMediaStore } from '@/stores/media'
'http://res.cloudinary.com/dm7x6mos2'

type Props = { id: string }
const { id } = defineProps<Props>()
const { episodes, resolveImageUrl } = useMediaStore()
const episode = episodes.find(ep => ep.slug === id)

// onMounted(function () {
//   var scrollElement = document.querySelector('.artist-container');
//   var reveal = document.querySelectorAll('.reveal')
//   console.log(scrollElement);

//   function revealAll() {

//     for (var i = 0; i < reveal.length; i++) {
//       if (Number(scrollElement?.scrollTop) >= 0 && Number(scrollElement?.scrollTop) <= 325) {
//         reveal[1].classList.remove('active')
//         reveal[2].classList.remove('active')
//         reveal[0].classList.add('active')
//       } else if (Number(scrollElement?.scrollTop) >= 326 && Number(scrollElement?.scrollTop) <= 800) {
//         reveal[0].classList.remove('active')
//         reveal[2].classList.remove('active')
//         reveal[1].classList.add('active')
//       } else if (Number(scrollElement?.scrollTop) >= 801 && Number(scrollElement?.scrollTop) <= 1275) {
//         reveal[1].classList.remove('active')
//         reveal[0].classList.remove('active')
//         reveal[2].classList.add('active')
//       } else {
//         reveal[1].classList.remove('active')
//         reveal[2].classList.remove('active')
//         reveal[0].classList.add('active')
//       }
//     }

//   }
//   scrollElement?.addEventListener('scroll', revealAll);
//   let slideIndex = 0;
//   showSlides();

//   function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;;
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 7500); // Change image every 2 seconds
//   }
// }
// )


</script>


<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>

  <div class="mt-4 space-y-10 mb-20" v-if="episode">
    <article class="bg-black">
      <div class="wrapper pt-20 pb-10">
        <h1 class="text-3xl font-light text-white ">
          <RouterLink to="/shows" class="text-purple-600">Shows</RouterLink> /
          <span>{{ episode?.title }}</span>
        </h1>
        <p>{{ new Date(episode.date).toDateString() }}</p>
      </div>

      <div class="wrapper pb-20" v-if="episode.highlight">

        <iframe class="w-full aspect-video rounded-lg shadow-lg "
          :src="`https://www.youtube.com/embed/${episode.highlight}?si=wOFWt4T4qigW85jq`" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>

      </div>
    </article>

    <article class="wrapper " v-if="false">


      <div class="relative m-auto mb-[7vw]">
        <div class="carouselactive" v-if="Number(episode.members?.length) > 1">
          <!-- Carousel will show if there are multiple artist performing  ... would ideally only need this container, but header/footer were not activating when there was only one artist-->
          <div class="mySlides fade h-[40vw] flex" v-for="(artist) in episode.members" :key="artist">
            <div
              class="border-[2px] border-[solid] border-[white] h-full flex justify-center items-center gap-[1vw] p-[1vw]">
              <!--Container used to hold carousel elements-->
              <div class="imagecontainer" style="width: 65%; height: 100%;">
                <img class="w-[100%] h-full object-cover object-center" :src="artist.artistImage">
              </div>
              <div class="flex flex-col items-center justify-center w-3/4 h-full">
                <h3 class="mt-6  font-semibold leading-8 text-gray-100 text-[1.9vw]"> {{ artist.name }}</h3>
                <!--line used to display and style artist name-->
                <p class="instrument text-gray-600 text-center leading-[2vw] text-[1.4vw] mt-[.75vw] -mb-[1.5vw]">{{
                  artist.instrument }}</p> <!--line used to display and style artist instrument-->
                <p class="mt-4 text-gray-600 text-center p-[1vw] text-[1.1vw] leading-[2vw] w-[30vw]">Praesentium iure
                  error aliquam voluptas ut libero. Commodi
                  placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut
                  voluptas. Officiis velit eos ducimus. </p>
                <!--test artist bio.. can update once artist bio's are included in the media.ts file -->
                <ul role="list" class="mt-6 flex gap-x-6 listelements justify-center items-center">
                  <!-- links and icons used for artist instagram and twitter profiles -->

                  <li>
                    <a :href="artist.social.twitter" target="_blank" class="text-gray-400 hover:text-gray-500">
                      <svg class="h-[1.75vw] w-[1.75vw]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a :href="artist.social.instagram" target="_blank" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-[1.75vw] w-[1.75vw]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a :href="artist.social.facebook" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-[1.75vw] w-[1.75vw] hover:opacity-[.5]"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                          clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <!-- find different icon for spotify -->
                    <a :href="artist.social.spotify" target="_blank" class="hover:opacity-[.5]">
                      <i class="fa fa-spotify" style="font-size:2.1vw;"></i>
                    </a>
                  </li>

                  <!-- find different icon for links -->
                  <li v-if="artist.social.linktree">
                    <a :href="artist.social.linktree" target="_blank" class="hover:opacity-[.5]">
                      <i class="fa fa-external-link" style="font-size:2.1vw"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="carouselinactive" v-else>
          <!-- Container will show if there is only one band artist performing... items within this container do nearly same thing as in the carousel active div above-->
          <div class="mySlides fade h-[40vw] flex">
            <div
              class="border-[2px] border-[solid] border-[white] h-full flex justify-center items-center gap-[1vw] p-[1vw]">
              <div class="imagecontainer" style="width: 65%; height: 100%;">
                <img class="w-[100%] h-full object-cover object-center" :src="episode.artistImage">
              </div>
              <div class="flex flex-col items-center justify-center w-3/4 h-full">
                <h3 class="mt-6 font-semibold leading-8 text-gray-100 text-[1.7vw]">{{ episode.title }}</h3>
                <p class="mt-4 text-gray-600 text-center p-[1vw]  leading-[2vw]">Praesentium iure error aliquam
                  voluptas ut libero. Commodi
                  placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut
                  voluptas. Officiis velit eos ducimus. </p>
                <ul role="list" class="mt-6 flex gap-x-6 justify-center items-center">

                  <li>
                    <a :href="episode.social.twitter" target="_blank" class="text-gray-400 hover:text-gray-500">
                      <svg class="h-[1.75vw] w-[1.75vw]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a :href="episode.social.instagram" target="_blank" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-[1.75vw] w-[1.75vw]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a :href="episode.social.facebook" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-[1.75vw] w-[1.75vw] hover:opacity-[.5]"
                        fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                          clip-rule="evenodd" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a :href="episode.social.spotify" target="_blank" class="hover:opacity-[.5]">
                      <i class="fa fa-spotify" style="font-size:2.1vw;"></i>
                    </a>
                  </li>

                  <li v-if="episode.social.linktree">
                    <a :href="episode.social.linktree" target="_blank" class="hover:opacity-[.5]">
                      <i class="fa fa-external-link" style="font-size:2.1vw"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>



    <article class="wrapper ">
      <h3 class="font-bold text-2xl text-zinc-100 mb-4">Event Gallery</h3>
      <div class="flex gap-4 flex-wrap">
        <template v-for="img in episode.media?.images" :key="img">
          <img :src="resolveImageUrl(img)" class="object-cover max-h-56 rounded-md" />
        </template>
      </div>
    </article>
  </div>
</template>
