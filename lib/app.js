import Vue from 'vue';
import Vuetify from 'vuetify';

import app from './components/app.vue';

Vue.use(Vuetify);

export default new Vue({
  el: '#app',
  render: h => h(app),
});
