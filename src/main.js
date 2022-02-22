import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// css
import './assets/tailwind.css';
// ui
import BaseBtn from './components/ui/BaseBtn.vue';
import BaseLoading from './components/ui/BaseLoading.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('base-btn', BaseBtn);
app.component('base-loading', BaseLoading);
app.component('base-dialog', BaseDialog);

app.mount('#app');
