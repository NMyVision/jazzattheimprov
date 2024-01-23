<script setup lang="ts">

import { useMediaStore } from '@/stores/media'
'http://res.cloudinary.com/dm7x6mos2'


const { episodes } = useMediaStore()
const CLOUDINARY_URL = import.meta.VITE_APP_CLOUDINARY_URL

onMounted (function () {
        var currentDate = new Date();
        console.log(currentDate);
        var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        console.log(currentDateWithFormat);
        document.getElementById('datetime')!.innerHTML = currentDateWithFormat; 
})

</script>

<template>
  <div class="wrapper space-y-10">
    <h1 class="text-3xl text-white ml-[2.5vw] text-[white] font-bold">Shows</h1>


    <div v-if="false">
      <select name="" id="">
        <option :value="null"></option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>

    <div class="featuredevents">
      <div class="highlightevent">
        <h1>Upcoming Events</h1>
        <div class="event">
          <div class="datecontainer">
            <span class="month">Jan</span>
            <span class="day">04</span>
          </div>
          <div class="eventdescription">
            <h3>Alex Bagnon: <br>World Renowned Pianist and Composer</h3>
            <h4>1224 Parkside Main St. Cary, North Carolina</h4>
          </div>
        </div>
        <div class="event">
          <div class="datecontainer">
            <span class="month">Feb</span>
            <span class="day">XX</span>
          </div>
          <div class="eventdescription">
            <h3>Coming Soon:<br> Check back later for updates</h3>
            <h4>1224 Parkside Main St. Cary, North Carolina</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="carouselinactive" v-else> 
          <div class="mySlides fade h-[35vw] flex">
            <div class="border-[2px] border-[solid] border-[red] h-full flex justify-center items-center gap-[1vw] p-[1vw] w-[92%] mx-[auto] my-[0]">
              <img class="h-full object-cover object-center" src="../../public/cover_alex_bugnon.jpeg" style="width:30%">
              <div class="flex flex-col items-center justify-center w-3/4 h-full">
                <h3 class="mt-6 font-semibold leading-8 text-gray-100 text-[1.7vw]">Upcoming Events</h3>
                <p class="mt-4 text-base leading-7 text-gray-600 text-center p-[1vw] text-[.95vw] leading-[2vw]">Praesentium iure error aliquam voluptas ut libero. Commodi
                  placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut
                  voluptas. Officiis velit eos ducimus. </p>
              </div>
            </div>
          </div>
        </div> -->

    <!-- <div class="border-[4px] border-[solid] border-[gainsboro] w-[95%] h-[45vw] grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(5,1fr)] gap-[1vw] p-[1vw] mx-[auto] my-[0] rounded-[10px]"> current events posterboard
      <div class="current one"> static image of the jazz at improv building .. not expected to change
        <img class="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/p/AF1QipNbDK_wxuXEnCZ9yA887OD2QHnvPrPVsn-gLikY=s1360-w1360-h1020" alt="">
      </div>
      <div class="current two"> container used to highlight the next upcoming event flyer
      <img class="w-full h-full object-cover object-center" src="../../public/cover_alex_bugnon.jpeg" alt="">
      </div>
      <div class="current three"> container used to bring attention to the events upcoming
        <h2 class="text-[2vw] mb-[1vw] italic">Upcoming Events</h2>
        <h3 class="w-[90%] text-[1.1vw] text-center italic mb-[.5vw]">January 17th - World Renowned Piantist and Composer Alex Bugnon</h3> way to highlight upcoming events.. this line will display the next upcoming event would change based on items in media file.. 
        <h3 class="w-[90%] text-[1.1vw] text-center italic mb-[.5vw]">February 17th - World Renowned Piantist and Composer Alex Bugnon</h3> way to highlight upcoming events.. this line will display the following event - possibly for the next moneth
      </div>
    </div> -->
  
    <div class="w-[95%] h-[4%] max-h-[max-content] overflow-x-scroll p-[1vw] mx-[auto] my-[0] artist-container"> <!-- container used to show previous events.. there is a limit on how much it shows so there is a scroll function for past shows -->
      <h2 class="absolute text-[1.3vw] text-[white] font-bold">Previous Shows</h2>
      <div class="w-max h-full flex flex-row mb-[2vw] mt-[2.5vw]"> 
        <div class="h-[25vw] w-[19.5vw] ml-[1vw] relative first:ml-0" v-for="(ep,index) in episodes" :key="ep.title"> <!-- for loop to display all of the shows mentioned in media file -->
          <RouterLink :to="{ name: 'shows-detail', params: { id: ep?.slug ?? '' } }" class="group">
            <div class="h-full">
              <img class="w-full h-full object-cover object-center grayscale" :src="ep.image" alt=""> <!-- flyer images are used here.. there is a grayscale effect.. look for a way to use if statment to only grayscale flyers when their date have passed -->
            </div>
            <h2 class="text-[white] font-[bolder] absolute top-[1vw] left-[1vw] text-[1.1vw] italic"> {{ ep.date }}</h2>
          </RouterLink>
        </div>
        <div class="h-[25vw] w-[19.5vw] ml-[1vw] relative first:ml-0"> <!-- another test to show scroll, needs to be removed  -->
            <div class="h-full">
              <img class="w-full h-full object-cover object-center grayscale" src="../../public/cover_jonathan_butler.jpg" alt=""> 
            </div>
            <h2 class="text-[white] font-[bolder] absolute top-[1vw] left-[1vw] text-[1.1vw] italic"> date here</h2>
        </div>
      </div>
    </div>



    <!-- <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

      <tempate v-for="ep in episodes" :key="ep.title">

        <template v-if="ep.image">
          <RouterLink :to="{ name: 'shows-detail', params: { id: ep?.slug ?? '' } }" class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 relative "
              :class="ep.current && 'grayscale'">
              <div class="absolute bg-blend-saturation inset-0"></div>
              <img :src="ep.image" :alt="`episode cover staring: ${ep.title} cover image`"
                class="h-full w-full object-cover object-center group-hover:opacity-75">

            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-200">
              <h3>{{ ep.title }}</h3>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">{{ ep.date }}</p>
          </RouterLink>
        </template>
        <template v-else>
          <div class="group">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <img src="/placeholder_cover.jpg" />
            </div>
            <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
              <h3>To be announced</h3>
            </div>
            <p class="mt-1 text-sm italic text-gray-500">{{ ep.date }}</p>
          </div>
        </template>
      </tempate>


    </div> -->

  </div>
</template>

<style>
  @import url('./HomeViews.css');
</style>

