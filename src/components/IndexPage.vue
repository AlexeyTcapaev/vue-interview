<template>
<v-container>
    <v-layout>
        <v-flex align-center>
            <Fraction></Fraction>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
const Fraction= () => import("./Fraction.vue");
export default {
    components:{
        Fraction
    }
}
</script>
