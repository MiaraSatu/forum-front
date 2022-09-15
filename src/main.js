import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret,
    faHouse,
    faCircleNotch,
    faPowerOff,
    faUserTie,
    faFilePen
} from '@fortawesome/free-solid-svg-icons'
import {
    faThumbsUp,
    faComment
} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHouse, faCircleNotch, faPowerOff, faThumbsUp, faComment, faUserTie, faFilePen)

createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
