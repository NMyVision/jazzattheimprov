<script setup lang="ts">

import { useMediaStore } from '@/stores/media'
'http://res.cloudinary.com/dm7x6mos2'


const { episodes } = useMediaStore()
const CLOUDINARY_URL = import.meta.VITE_APP_CLOUDINARY_URL

onMounted (function () {

})

</script>

<template>
  <div class="wrapper space-y-10">
    <h1 class="text-3xl text-white ml-[2.5vw] font-bold">Shows</h1>


    <div v-if="false">
      <select name="" id="">
        <option :value="null"></option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
    <!-- Details are hard coded. wanted to find a way to use for loop to get all upcoming events from data, not sure how to add condition to only select those types of items though .. adding extra div caused problems and didnt seem efficient but may be my solution as shown in previous post-->
    <div class="featuredevents min-h-[17vw] max-w-[110%] relative flex justify-evenly items-center flex-col -mt-[100vw]">
      <div class="highlightevent w-[103%] min-h-[10vw] flex justify-evenly items-center">
        <h1 class="text-[2vw] italic text-[white] font-bold pr-[3vw] pl-[3vw]">Upcoming Events</h1>
          <div class="event border-l-2 border-[rebeccapurple] w-[33%] h-[6vw] flex justify-evenly" >
            <div class="datecontainer flex flex-col w-[10%] justify-center items-center h-full">
              <span class="month text-[1.3vw] text-center -mb-[.2vw] italic text-[white] font-bold ml-[.5vw]">Feb</span>
              <span class="day text-[1.8vw] italic text-[white] font-bold">15</span>
            </div>
            <div class="eventdescription w-4/5 flex justify-center flex-col">
              <h3 class="text-[1vw] italic text-[white] font-bold"> Marcus Anderson <br>World Renowned Saxaphonist</h3> <!---->
              <h4 class="text-[1vw] italic">1224 Parkside Main St. Cary, North Carolina</h4>
            </div>
          </div>

        <!-- only want to show if there is less than one upcoming event planned.. can fix  -->
        <div class="event border-l-2 border-[rebeccapurple] w-[33%] h-[6vw] flex justify-evenly">
          <div class="datecontainer flex flex-col w-[10%] justify-center items-center h-full">
            <span class="month text-[1.3vw] text-center -mb-[.2vw] italic text-[white] font-bold ml-[.5vw]">Mar</span>
            <span class="day text-[1.8vw] italic text-[white] font-bold">XX</span>
          </div>
          <div class="eventdescription w-4/5 flex justify-center flex-col ml-1">
            <h3 class="text-[1vw] italic text-[white] font-bold">Coming Soon:<br> Check back later for updates</h3>
            <h4 class="text-[1vw] italic">1224 Parkside Main St. Cary, North Carolina</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="artist-container w-[95%] h-[4%] max-h-[max-content] overflow-x-scroll p-[1vw] mx-[auto] my-[0]"> <!-- container used to show previous events.. there is a limit on how much it shows so there is a scroll function for past shows -->
      <h2 class="absolute text-[1.3vw] text-[white] font-bold">Previous Shows</h2>
      <div class="w-max h-full flex flex-row mb-[2vw] mt-[2.5vw]">
        <div class="display ml-[1vw] relative first:ml-[-1.5vw]" v-for="ep in episodes" :key="ep.title">
          <div class="h-[25vw] w-[19.5vw] ml-[1vw] relative first:ml-0" v-if="new Date().toJSON().slice(0,10) > ep.date" > <!-- for loop to display all of the shows mentioned in media file -->
            <RouterLink :to="{ name: 'shows-detail', params: { id: ep?.slug ?? '' } }" class="group">
              <div class="h-full">
                <img class="w-full h-full object-cover object-center grayscale" :src="ep.image" alt=""> <!-- flyer images are used here.. there is a grayscale effect.. look for a way to use if statment to only grayscale flyers when their date have passed -->
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import url('./HomeViews.css');
</style>

