<template>
<div>
    <div class='slider js-slider'>
        <div class="slider__body" @mousedown="startDrag" @mousemove="doDrag" @mouseup="stopDrag">
            <slide class="slider__slide js-slide" :slide="sliderList[sliderPrev]" v-bind:style='{left: sliderOffsetLeft-sliderOffsetStep + "px"}'></slide>
            <slide class="slider__slide js-slide" :slide="sliderList[sliderActive]" v-bind:style='{left: sliderOffsetLeft-sliderOffsetStep + "px"}'></slide>
            <slide class="slider__slide js-slide" :slide="sliderList[sliderNext]" v-bind:style='{left: sliderOffsetLeft-sliderOffsetStep + "px"}'></slide>
        </div>
    </div>
    <v-btn @click="prevSlide"><</v-btn>
    <v-btn @click="nextSlide">></v-btn>
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
    sliderActive: 0,
    sliderOffsetStep: 0,
    // Отступ тела со слайдами в контейнере
    // Список изображений
    sliderList: [
      { img: "https://dummyimage.com/wsvga1" },
      { img: "https://dummyimage.com/wsvga2" },
      { img: "https://dummyimage.com/wsvga3" },
      { img: "https://dummyimage.com/wsvga4" }
    ],
    dragging: false,
    x: "no",
    Xstart: "",
    sliderOffsetLeft: 0
  }),
  props: {
    msg: String
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      this.x = 0;
      this.Xstart = event.clientX;
    },
    stopDrag() {
      this.dragging = false;
      this.x = 0;
      this.Xstart = 0;
    },
    doDrag(event) {
      if (this.dragging) {
        this.x = event.clientX;
        this.sliderOffsetLeft = this.x - this.Xstart;
      }
    },
    prevSlide() {
      if (this.sliderActive - 1 > 0) this.sliderActive--;
      else this.sliderActive = this.sliderList.length - 1;
    },
    nextSlide() {
      if (this.sliderActive + 1 < this.sliderList.length) this.sliderActive++;
      else this.sliderActive = 0;
    },
    initSlider() {
      // Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = document.documentElement.clientWidth;
      // Общее количество слайдов для стопов
      this.sliderAllCount = this.sliderList.length;
    }
  },
  mounted() {
    this.initSlider();
    // Перенастройка слайдера при ресайзе окна
    window.addEventListener("resize", () => {
      this.initSlider();
    });
  },
  computed: {
    sliderPrev() {
      return this.sliderActive - 1 > 0
        ? this.sliderActive - 1
        : this.sliderList.length - 1;
    },
    sliderNext() {
      return this.sliderActive + 1 < this.sliderList.length
        ? this.sliderActive + 1
        : 0;
    }
  }
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
<style>
.slider__slide {
  cursor: pointer;
}
.slider {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
}
.slider__body {
  min-width: auto;
  height: 400px;
  display: flex;
  position: relative;
  align-items: stretch;
  transition: all 0.5s ease;
}
.slider__slide {
  position: relative;
  min-width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  flex: 1 100%;
}
</style>

