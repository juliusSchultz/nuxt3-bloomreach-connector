import { createApp } from 'vue'
import { BrSdk } from '@bloomreach/vue3-sdk';
import App from '~/pages/index.vue'

const app = createApp(App);
app.use(BrSdk);
