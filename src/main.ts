import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

window.addEventListener("load", function () {
    // var navElements = document.querySelectorAll('li');
    // for ( var i = 0; i < navElements.length; i++ ) (function(i) { 
    //     navElements[i].onclick = function() {
    //         navElements.forEach(element => {
    //             element.classList.remove('active');
    //         })
    //         navElements[i].classList.add('active');
    //         console.log(navElements[i].textContent?.toUpperCase());
    //         console.log(window.location.pathname.toUpperCase());
    //     }
    //   })(i);
    //   navElements.forEach(element => {
    //     element.classList.remove('active');
    //     if (window.location.pathname.toUpperCase() == '/' + element.textContent?.toUpperCase()) {
    //         element.classList.add('active');
    //         console.log(element.textContent)
    //     }  else {
    //         navElements[0].classList.add('active')
    //     }
    // });

    // if (this.window.location.pathname == '/') {
    //     navElements[0].classList.add('active');
    // }
    
})
