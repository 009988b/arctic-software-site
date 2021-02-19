import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
Vue.prototype.$href = window.location.href

const routes = {
  '/': App,
}

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent: {
      get() {
        return routes[app.currentRoute]
      }
    }
  },
  render: h => {return h(app.ViewComponent)}
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
})

app.$mount('#app')