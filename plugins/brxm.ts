import { defineNuxtPlugin } from "#app";
import { BrSdk } from '@bloomreach/vue3-sdk';

export default defineNuxtPlugin( async (nuxtApp) => {
    nuxtApp.vueApp.use(BrSdk)
})
