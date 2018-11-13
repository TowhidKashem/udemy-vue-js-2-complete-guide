import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-resource-cffef.firebaseio.com';

Vue.http.interceptors.push((request, next) => {
  console.log(request);

  // Intercept the request and do something here...
  if (request.method === 'POST') {
    // request.method = 'PUT';
  }

  // Continue the request by executing the next() callback
  next(response => {
    // Incept the response and do something here...
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
