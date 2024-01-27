<script setup lang="ts">

import { useMediaStore } from '@/stores/media'
'http://res.cloudinary.com/dm7x6mos2'


const { episodes } = useMediaStore()

onMounted (function () {
    let scrolltop1 = document.querySelector('.scrolltop');
    scrolltop1?.addEventListener('click', function () {
         window.scrollTo(0, 0)
    });

    window.addEventListener('scroll', function () {
        if (Number(this.window.scrollY > 500)) {
            scrolltop1?.classList.add('active')
        } else {
            scrolltop1?.classList.remove('active')
        }
    });

})

</script>
    
<template>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>

    <section class = "h-max w-full relative test">
        <div class="w-full relative">
            <h1 class="text-center text-[4vw] [text-underline-offset:.75vw] italic font-[Georgia,_'Times_New_Roman',_Times,_serif] relative mb-[8vw] font-bold
             after:content-[''] after:absolute after:w-[15%] after:block after:h-[.25vw] after:bg-[gainsboro] after:-bottom-[4vw] after:mx-[auto] after:my-[0] after:left-[42%]">
             Privacy Policy</h1>
        </div>
        <div class="w-[70%] relative h-[90%] mx-[auto] my-[3vw]">
            <h2 class = "policy">Who we are</h2>
            <p class="policyinfo">
                Suggested text: Our website address is: https://jazzattheimprov.com. 
            </p>


            <h2 class = "policy">Comments</h2>
            <p class="policyinfo">Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. 
                After approval of your comment, your profile picture is visible to the public in the context of your comment.
            </p>


            <h2 class = "policy">MEDIA</h2>
            <p class="policyinfo">Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>


            <h2 class = "policy">Cookies</h2>
            <p class="policyinfo">Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that 
                you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you visit our login page, we will set a temporary cookie to determine 
                if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information
                and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, 
                the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
            </p>


            <h2 class = "policy">Embedded Content from other websites</h2>
            <p class="policyinfo">Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. 
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>
            
            <h2 class = "policy">Who we share your data with</h2>
            <p class="policyinfo">Suggested text: If you request a password reset, your IP address will be included in the reset email.
            </p>
            
            <h2 class = "policy">How long we retain your data</h2>
            <p class="policyinfo">Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them 
                in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at 
                any time (except they cannot change their username). Website administrators can also see and edit that information.
            </p>

            <h2 class = "policy">WHAT RIGHTS YOU HAVE OVER YOUR DATA</h2>
            <p class="policyinfo">Suggested text: If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. 
                You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
            
            <h2 class = "policy">Where your data is sent</h2>
            <p class="policyinfo">
                Suggested text: Visitor comments may be checked through an automated spam detection service.
            </p>

            <h2 class = "policy">Contact Us</h2> <!-- the location provided, and telephone number do not match whats on google-->
            <p class="policyinfo">Jazz At The Improv, Inc. welcomes your questions or comments regarding the Terms:
                <br>Jazz At The Improv, Inc. 
                <br>212 Brook Manor Ct, Cary, North Carolina, 27513, USA 
                <br>Email Address: info@jazzattheimprov.com
                <br>Telephone number: 919-339-9393
                <br>Effective as of September 14, 2023 This is a RocketLawyer.com document.
            </p>
        </div>
        <div class="scrolltop hover:cursor-pointer hover:bg-[slateblue] border-[3px] border-[solid] border-[slateblue] p-[1vw] rounded-[50%] w-max h-max flex justify-center items-center sticky bottom-[5vw] left-[90%] mb-[0vw] [transition:.7s_ease-in-out] opacity-0">
            <span class="material-symbols-outlined arrow text-[white] text-[3vw]">arrow_upward</span>
        </div>
    </section>

</template>
