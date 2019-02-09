import Vue from 'nativescript-vue';
import App from './components/App.vue';
import VueDevtools from 'nativescript-vue-devtools';
import { ExampleService } from './services/ExampleService';
ExampleService.forRoot('http://10.0.2.2:8000/api/v1');

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
  render: h => h('frame', [h(App)])
}).$start();
