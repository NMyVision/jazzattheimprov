<script setup lang="ts">

import { useMediaStore } from '@/stores/media'
'http://res.cloudinary.com/dm7x6mos2'


const { episodes } = useMediaStore()

onMounted (function () {
    let scrolltop1 = document.querySelector('.scrolltop');
    let bodyheight = document.querySelector('section')
    console.log('window inner height: ' + window.innerHeight);
    console.log('body scroll height: ' + bodyheight?.scrollHeight);

    // scrolltop1?.addEventListener('click', () => window.scrollTo(0, 0));



    scrolltop1?.addEventListener('click', function () {
         window.scrollTo(0, 0)
    });

    window.addEventListener('scroll', function () {
        // console.log('window scroll y: should track current pos: ' + this.window.scrollY);
        if (Number(this.window.scrollY > 500)) {
            scrolltop1?.classList.add('active')
        } else {
            scrolltop1?.classList.remove('active')
        }
        // console.log(scrolltop1?.scrollTop);
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
             Terms and Conditions</h1>
        </div>
        <div class="w-[70%] relative h-[90%] mx-[auto] my-[3vw]">
            <h2 class = "policy">Late or Missing Refunds</h2>
            <p class="policyinfo">
                Terms and Conditions Agreement between User and <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> Welcome to Jazz at the Improv 
                The <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> website (the “Site”) is comprised of various web pages operated by Jazz At The Improv, Inc 
                .. <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> is offered to you conditioned on your acceptance without modification of the terms, conditions, 
                and notices contained herein (the “Terms”). Your use of <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> constitutes your agreement to all such Terms. 
                Please read these terms carefully, and keep a copy of them for your reference. <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> is an E-Commerce Site. To sell monthly subscriptions to live jazz concerts
            </p>


            <h2 class = "policy">Privacy</h2>
            <p class="policyinfo">Your use of <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> is subject to Jazz At The Improv, Inc.’s Privacy Policy. 
                Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>


            <h2 class = "policy">ELECTRONIC COMMUNICATIONS</h2>
            <p class="policyinfo">Visiting <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> or sending emails to Jazz At The Improv, Inc. constitutes 
                electronic communications. You consent to receive electronic communications and you agree that all agreements, 
                notices, disclosures and other communications that we provide to you electronically, via email and on the Site, 
                satisfy any legal requirement that such communications be in writing.

            </p>


            <h2 class = "policy">Children under Thirteen</h2>
            <p class="policyinfo">Jazz At The Improv, Inc. does not knowingly collect, either online or offline, personal information 
                from persons under the age of thirteen. If you are under 18, you may use <a href="http://www.jazzattheimprov.com" target="_blank">www.jazzattheimprov.com</a> only with permission of a parent or guardian.
            </p>


            <h2 class = "policy">Cancellation/Refund Policy</h2>
            <p class="policyinfo">You may cancel your monthly subscription anytime and receive a full refund for any prepaid subscriptions but 
                are not eligible refunds for used tickets that were delivered and used. Any monthly subscription is immediately refunded for any show that is cancelled for any reason.
            </p>


            <h2 class = "policy">LINKS TO THIRD PARTY SITES/THIRD PARTY SERVICES</h2>
            <p class="policyinfo">www.jazzattheimprov.com may contain links to other websites (“Linked Sites”). The Linked Sites are not under the control of Jazz At The Improv, Inc. 
                and Jazz At The Improv, Inc. is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes 
                or updates to a Linked Site. Jazz At The lmprov, Inc. is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement
                by Jazz At The lmprov, Inc. of the site or any association with its operators.Certain services made available via www.jazzattheimprov.com are delivered by third party sites and organizations. 
                By using any product, service or functionality originating from the www.jazzattheimprov.com domain, you hereby acknowledge and consent that Jazz At The Improv, Inc. may share such information 
                and data with any third party with whom Jazz At The Improv, Inc. has a contractual relationship to provide the requested product, service or functionality on behalf of www.jazzattheimprov.com users and customers.
            </p>

            <h2 class = "policy">NO UNLAWFUL OR PROHIBITED USE/INTELLECTUAL PROPERTY</h2>
            <p class="policyinfo">You are granted a non-exclusive, non-transferable, revocable license to access and use www.jazzattheimprov.com strictly in accordance with these terms of use. 
                As a condition of your use of the Site, you warrant to Jazz At The lmprov, Inc. that you will not use the Site for any purpose that is unlawful or prohibited by these Terms. 
                You may not use the Site in any manner which could damage, disable, overburden, or impair the Site or interfere with any other party’s use and enjoyment of the Site. You may not obtain 
                or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Site. All content included as part of the Service, such as text, graphics, 
                logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Jazz At The Improv, Inc. or its suppliers and protected by copyright and other laws that protect 
                intellectual property and proprietary rights. You agree to observe and abide by all copyright and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
                You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. Jazz At The Improv, Inc. 
                content is not for resale. Your use of the Site does not entitle you to make any unauthorized use of any protected content, and in particular you will not delete or alter any proprietary rights or attribution notices in any content. 
                You will use protected content solely for your personal use, and will make no other use of the content without the express written permission of Jazz At The Improv, Inc. and the copyright owner. You agree that you do not 
                acquire any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the intellectual property of Jazz At The Improv, Inc. or our licensors except as expressly authorized by these Terms.
            </p>

            <h2 class = "policy">Third Party Accounts</h2>
            <p class="policyinfo">You will be able to connect your Jazz At The Improv, Inc. account to third party accounts. By connecting your Jazz At The Improv, Inc. account to your third party account, 
                you acknowledge and agree that you are consenting to the continuous release of information about you to others (in accordance with your privacy settings on those third party sites). 
                If you do not want information about you to be shared in this manner, do not use this feature.
            </p>

            <h2 class = "policy">International Users</h2>
            <p class="policyinfo">The Service is controlled, operated and administered by Jazz At The Improv, Inc. from our offices within the USA. If you access the Service from a location outside the USA,
                you are responsible for compliance with all local laws. You agree that you will not use the Jazz At The Improv, Inc. Content accessed through www.jazzattheimprov.com in any country or in any 
                manner prohibited.by any applicable laws, restrictions or regulations.
            </p>

            <h2 class = "policy">Indemnification</h2> 
            <p class="policyinfo">I agree to indemnify, defend and hold harmless Jazz At The Improv, Inc., its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses 
                (including reasonable attorney’s fees) relating to or arising out of your use of or inability to use the Site or services, any user postings made by you, your violation of any terms of this Agreement 
                or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations. Jazz At The Improv, Inc. reserves the right, at its own cost, to assume the exclusive
                defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Jazz At The lmprov, Inc. in asserting any available defenses.
            </p>

            <h2 class = "policy">Arbitration</h2>
            <p class="policyinfo">In the event the parties are not able to resolve any dispute between them arising out of or concerning these Tenns and Conditions, or any provisions hereof, whether in contract, 
                tort, or otherwise at law or in equity for damages or any other relief, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted 
                by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties. 
                The arbitrator’s award shall be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of 
                or concerns these Terms and Conditions, the prevailing party shall be entitled to recover its costs and reasonable attorney’s fees. The parties agree to arbitrate all disputes and claims in regards 
                to these Terms and Conditions or any disputes arising as a result of these Terms and Conditions, whether directly or indirectly, including Tort claims that are a result of these Terms and Conditions. 
                The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the. scope and enforceability of this arbitration provision 
                shall be determined by the Arbitrator. This arbitration provision shall survive the termination of these Terms and Conditions.
            </p>

            <h2 class = "policy">Class Action Wavier</h2>
            <p class="policyinfo">Any arbitration under these Terms and Conditions will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. 
                THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH’S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, 
                SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Jazz At The Improv, Inc. agree otherwise, the arbitrator may not consolidate more than one person’s claims, 
                and may not otherwise preside over any fonn of a representative or class proceeding.
            </p>
            
            <h2 class = "policy">Liability Disclaimer</h2>
            <p class="policyinfo">INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. 
                JAZZ AT THE IMPROV, INC. AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME. JAZZ AT THE IMPROV, INC. AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, 
                AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, 
                SERVICES AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OR CONDITION OF ANY KIND. JAZZ AT THE IMPROV, INC. AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, 
                SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON­-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL JAZZ AT THE IMPROV,
                INC. AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENT AL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY 
                CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR F AILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH 
                THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF JAZZ AT THE IMPROV, INC. OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS
                DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
            </p>

            <h2 class = "policy">Termination/Access Restriction</h2>
            <p class="policyinfo">Jazz At The Improv, Inc. reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice. To the maximum extent pe1mitted by law, this agreement 
                is governed by the laws of the State of North Carolina and you hereby consent to the exclusive jurisdiction and venue of courts in North Carolina in all disputes arising out of or relating to the use of the Site. Use of the Site is unauthorized in any jurisdiction 
                that does not give effect to all provisions of these Terms, including, without limitation, this section. You agree that no joint venture, partnership, employment, or agency relationship exists between you and Jazz At The Improv, Inc. as a result of this agreement 
                or use of the Site. Jazz At The lmprov, Inc.’s performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of Jazz At The Improv, Inc.’s right to comply with governmental, court and law enforcement 
                requests or requirements relating to your use of the Site or information provided to or gathered by Jazz At The Improv, Inc. with respect to such use. If any part of this agreement is detennined to be invalid or unenforceable pursuant to applicable law including, but not limited to, 
                the wananty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.
                Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Jazz At The Improv, Inc. with respect to the Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Jazz At The Improv, 
                Inc. with respect to the Site. A ptinted version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records 
                originally generated and maintained in printed form. It is the express wish to the parties that this agreement and all related documents be written in English.
            </p>

            <h2 class = "policy">Changes to terms</h2>
            <p class="policyinfo">At The Improv, Inc. reserves the right, in its sole discretion, to change the Terms under which www.jazzattheimprov.com is offered. The most current version of the Terms will supersede all previous versions. Jazz At The Improv, Inc. 
                encourages you to periodically review the Terms to stay informed of our updates.
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
        <div class="scrolltop">
            <span class="material-symbols-outlined arrow">arrow_upward</span>
        </div>
    </section>

</template>

<style>
@import url('../views/HomeViews.css');
</style>
