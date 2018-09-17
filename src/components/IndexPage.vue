<template>
<v-layout>
    <v-flex>
        <Slider></Slider>
    </v-flex>
</v-layout>
</template>
<script>
const Slider= () => import("./Slider.vue");
export default {
    components:{
        Slider
    }
}
</script>
