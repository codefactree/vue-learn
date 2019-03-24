import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE1N2JjZDRkY2RmZWI1NDU5MjQ4NzhjNGRhMjZmOTVlYjEzYWViY2E3MTFjMzZmNGFlZTc5NWVlNGM2ZmZiMWU5ODBmM2RhNWE4MGYwNTgyIn0.eyJhdWQiOiIyIiwianRpIjoiMTU3YmNkNGRjZGZlYjU0NTkyNDg3OGM0ZGEyNmY5NWViMTNhZWJjYTcxMWMzNmY0YWVlNzk1ZWU0YzZmZmIxZTk4MGYzZGE1YTgwZjA1ODIiLCJpYXQiOjE1NTI4NTE0MzcsIm5iZiI6MTU1Mjg1MTQzNywiZXhwIjoxNTg0NDczODM3LCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.xh2LhHdGWBJUNVV2Fk-FpQDsH6dTUauev40YkdrI202zoAVHpG6plWZ3D-4CTLX287Ytd4wGeIcTmUlkZPiBx0B6EsT2zTOGXCTl46d8jIFvElgNgkPPr_URgSYWb0M-q2ta8FD2BrGI-VtJxXvHJSX0J6JZnU-rPtRZvFfGcyY-ijlLRg9lmUUma_BXw7flvDScvlMYAAM5eqMdrMItLL6Y7xPx9dQnjqTn-kKLrjdMGxspdhJev1pPC1FxQ3K4vFQOMRbOlkY8ojk3aGtebDpzUQy5lntuwTo6L_1P9yQBcKqiPrbHvg-EB5dbY-xhFMU7rkG8yBuwQBxZ7vXkzduJ9lyP1juzOEd5Er5_pHjskeJBIEFFUiELEyAkBXeG3cpWGC4NYQoajlHrjmY2EKySLmJKjUPr4hJwgO8pys974dB6JZAG3u5HCywfrW2-M8XKa0RXO0E7VHt6VySoAvFucL5c-xRkPHByzuic15mnHm5amNRY87TWqapO_Ok7soSSd7P0TcHk2FIcuglFAPyZa_t0e9lNr5zslSkIbm_3fFBHr3T6HtpOc82-DO7Azfa19KOxN8P8ZaR4cI-ik0v0F4PeJdYL0iERjlyp3EECCotPx6G_1tOeG02Bh1k1JFzUX5ZrBo4OlJxVhiuvfpaXqiZmmuKs75NOACRSX5M';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
