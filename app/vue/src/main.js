// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(require('vue-pubnub'), {
	subscribeKey: "sub-c-b3ec2a8e-f5e5-11e7-b8a6-46d99af2bb8c",
	publishKey: "pub-c-6519bbc5-67e7-4739-be07-e7d25edee088",
	logVerbosity: false,
	ssl: true,
	presenceTimeout: 130
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
})
