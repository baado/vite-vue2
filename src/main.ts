import './style.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// const app = document.querySelector<HTMLDivElement>('#app')!

// app.innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
