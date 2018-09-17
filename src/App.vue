<template>
  <v-app>
    <v-content>
      <v-slide-y-transition mode="out-in">
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
import Slider from './components/Slider'

export default {
  name: 'App',
  components: {
    Slider
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
