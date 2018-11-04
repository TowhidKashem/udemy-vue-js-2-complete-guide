import Vue from 'vue'
import App from './App.vue'

// // Globally registering components
// import Header from './components/Shared/Header.vue'
// import Footer from './components/Shared/Footer.vue'
// import ServerList from './components/Server/ServerList.vue'
// import ServerDetails from './components/Server/ServerDetails.vue'

// Vue.component('appHeader', Header);
// Vue.component('appFooter', Footer);
// Vue.component('appServerList', ServerList);
// Vue.component('appServerDetails', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
})
