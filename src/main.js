import { createApp } from 'vue';
import { createPinia } from 'pinia';

// BS5
// import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.scss';

// Swiper
// import Swiper JS

// import Swiper styles

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
