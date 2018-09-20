<template>
<v-container>
    <v-layout align-center justify-center row>
            <Fraction v-for="(fraction,index) in fractionArray" :key="index" :fraction="fraction" :index="index" :size="fractionArray.length"></Fraction>
            <v-icon large class="rez">=</v-icon>
            <p class="rez" >{{result}}</p>
    </v-layout>
    <v-layout align-center justify-center row>
        <v-btn @click="AddFraction">Add fraction</v-btn>
        <v-btn @click="fractionArray.length > 2 ? fractionArray.splice(index,1) : false">Remove fraction</v-btn>
    </v-layout>
</v-container>
</template>
<script>
const Fraction = () => import("./Fraction.vue");
import Frac from "fraction.js";
export default {
  components: {
    Fraction
  },
  data: () => ({
    fractionArray: [
      {
        c: "",
        z: "",
        operand: null,
        rez: null
      },
      {
        c: "",
        z: "",
        operand: null,
        rez: null
      }
    ]
  }),
  methods: {
    AddFraction() {
      this.fractionArray.push({
        c: "",
        z: "",
        operand: null,
        rez: null
      });
    }
  },
  mounted() {},
  computed: {
    result() {
      let temp = "";
      this.fractionArray.forEach((elem, index) => {
        if (index == 0) temp += elem.rez;
        else if (elem.rez !== null && elem.operand !== null) {
          temp += " " + elem.operand + " " + elem.rez + " ";
        }
      });
      return new Frac(eval(temp)).toFraction(true);
    }
  }
};
</script>
<style scoped>
.rez {
  margin: 0 0 0 15px;
}
</style>
