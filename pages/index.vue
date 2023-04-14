<template>
  <div id="app">
    <BrPage :configuration="configuration" :mapping="mapping">
    </BrPage>
  </div>
</template>

<script>
import { useConfiguration } from '~/composables/useConfiguration.js'
import { useMapping } from '~/composables/useMapping.js'
import { BrSdk } from '@bloomreach/vue3-sdk';
import { useNuxtApp } from '#app';

export default {
  name: 'App',
  setup(){
    const nuxtApp = useNuxtApp()
    nuxtApp.vueApp.use(BrSdk)

    const configuration = useConfiguration()
    const { mapping } = useMapping()

    return {
      configuration,
      mapping,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

