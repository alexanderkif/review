<template>
  <q-carousel class="fit" :style="fullscreen ? getBgStyles(gradient) : { backgroundColor: bgColor + '33' }" swipeable
    animated v-model="slide" v-model:fullscreen="fullscreen" :autoplay="autoplay" ref="carousel"
    transition-prev="slide-right" transition-next="slide-left" infinite>
    <q-carousel-slide v-for="img in images" :key="img" :name="img">
      <q-img class="rounded-borders col-6 full-height" :src="`img/${img}`" fit="contain" />
    </q-carousel-slide>

    <template v-slot:control>
      <q-carousel-control v-if="images.length > 1" position="top-right" :offset="[18, 18]">
        <q-btn push glossy rounded :style="`background: ${shiftColor(bgColor, 0.7)}; color: ${shiftColor(color, 1.2)};`"
          @click="!autoplay && ($refs.carousel as any).next(); autoplay = !autoplay"
          :label="autoplay ? 'stop' : 'play'" />
      </q-carousel-control>

      <q-carousel-control position="bottom-right" :offset="[18, 18]" class="q-gutter-xs">
        <q-btn push round glossy :disabled="images.length < 2"
          :style="`background: ${shiftColor(bgColor, 0.7)}; color: ${shiftColor(color, 1.2)};`" icon="arrow_left"
          @click="($refs.carousel as any).previous()" />
        <q-btn push round glossy :disabled="images.length < 2"
          :style="`background: ${shiftColor(bgColor, 0.7)}; color: ${shiftColor(color, 1.2)};`" icon="arrow_right"
          @click="($refs.carousel as any).next()" />
        <q-btn push round glossy :style="`background: ${shiftColor(bgColor, 0.7)}; color: ${shiftColor(color, 1.2)};`"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script lang="ts">
import { getBgStyles, shiftColor } from 'src/utils/utils';
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';

export default defineComponent({
  name: 'SliderComponent',
  props: {
    images: {
      type: Array as PropType<Array<string>>,
      default: () => []
    },
    color: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    }
  },
  setup(props) {
    console.log('props', props);
    const gradient = computed(() => ({
      gradient: [
        { color: props.bgColor, percent: 0 },
        { color: props.color, percent: 100 },
      ]
    }));

    return {
      slide: ref(props.images[0]),
      autoplay: ref(false),
      fullscreen: ref(false),
      shiftColor,
      getBgStyles,
      gradient
    };
  },
});
</script>

<style lang="scss"></style>
