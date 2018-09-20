<template>
    <div class="wrapper">
        <div class="operand" v-if="index !== 0">
            <v-select  v-model="fraction.operand" :items="operands" offset-y >

            </v-select>
        </div>
        <div class="fraction">
            <v-text-field outline label="Числитель" v-model="fraction.c" @input="Calc"></v-text-field>
            <v-text-field outline label="Знаменатель" v-model="fraction.z" @input="Calc"></v-text-field>
        </div>
        
    </div>
</template>
<script>
export default {
  data: () => ({
    operands: ["*", "/", "+", "-"]
  }),
  computed: {},
  props: {
    fraction: {
      type: Object
    },
    index: {
      default: null
    },
    size: {
      default: null
    }
  },
  methods: {
    Calc() {
      if (this.fraction.c && this.fraction.z) {
        this.fraction.rez = this.fraction.c / this.fraction.z;
      }
    }
  }
};
</script>
<style scoped>
.fraction {
  width: 150px;
}
.operand {
  width: 50px;
  margin: 0 15px 25px 0;
}
.wrapper {
  margin: 0 0 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>

