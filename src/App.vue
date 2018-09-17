<template>
  <v-app>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
const Slider = () =>
    import('./components/Slider.vue');
export default {
  name: 'App',
  components: {
    Slider
  },
 data: () => ({})
}
</script>
