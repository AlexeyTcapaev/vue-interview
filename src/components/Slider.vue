<template>
<div class='slider js-slider'>
	<div class="slider__body" v-bind:style='{left: sliderOffsetLeft + "px"}'>
		<slide class="slider__slide js-slide" v-for='(slide,index) in sliderList' :key="index" :slide="slide"></slide>
	</div>
</div>
</template>

<script>
const Slide = () => import("./Slide.vue");
export default {
  name: "Slider",
  components: {
    Slide
  },
  data: () => ({
    sliderAllCount: 0,
    // Номер активного слайда
    sliderActive: 1,
    // Отступ тела со слайдами в контейнере
    sliderOffsetLeft: 0,
    // Шаг одного слайда = его длина
    sliderOffsetStep: 0,
    // Список изображений
    sliderList: [
      { img: "https://dummyimage.com/wsvga" },
      { img: "https://dummyimage.com/wsvga" },
      { img: "https://dummyimage.com/wsvga" },
      { img: "https://dummyimage.com/wsvga" }
    ]
  }),
  props: {
    msg: String
  },
  methods: {
    initSlider() {
      // Получаем элементы сладера и его слайдов
      let sliderBody = this.$el.querySelector(".js-slider");
      let sliderSlidies = sliderBody.querySelectorAll(".js-slide");
      // Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = sliderBody.clientWidth;
      // Общее количество слайдов для стопов
      this.sliderAllCount = sliderSlidies.length;
    },
    openSlide(id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id;
        // Сдвигаем элемент со слайдами
        this.sliderOffsetLeft = -(
          this.sliderActive * this.sliderOffsetStep -
          this.sliderOffsetStep
        );
      }
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
