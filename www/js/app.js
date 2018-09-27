// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

// Init Page Components
Vue.component('page-about', {
  template: '#page-about'
});
Vue.component('page-signup', {
  template: '#page-signup'
});
Vue.component('page-login', {
  template: '#page-login'
});
Vue.component('page-prevent', {
  template: '#page-prevent'
});
Vue.component('page-not-found', {
  template: '#page-not-found'
});

// Init App
new Vue({
  el: '#app',
  data: function () {
    return {
      // Framework7 parameters here
      f7params: {
        root: '#app', // App root element
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'auto', // Automatic theme detection
        // App routes
        routes: [
          {
            path: '/about/',
            component: 'page-about'
          },
          {
            path: '/signup/',
            component: 'page-signup'
          },
          {
            path: '/login/',
            component: 'page-login'
          },
          {
            path: '/prevent/',
            component: 'page-prevent'
          },
          {
            path: '(.*)',
            component: 'page-not-found',
          },
        ],
      }
    }
  },
});