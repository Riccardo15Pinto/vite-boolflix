import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-regular-svg-icons'
library.add(faStar)

createApp(App)
    .component('FontAwsomeIcon' , FontAwesomeIcon)
    .mount('#app')
