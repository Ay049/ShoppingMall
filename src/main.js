import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 当你想要使用stor时可以解除下面的注释
// import store from './store'
// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(router).mount('#app')
