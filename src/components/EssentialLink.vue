<template>
  <q-item clickable @click="scrollToElement(id)">
    <q-item-section>
      <q-item-label class="text-uppercase text-weight-medium" :style="styleTitle">{{ name }}</q-item-label>
      <q-item-label caption :style="styleCaption">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { getGradientColor, shiftColor } from 'src/utils/utils';
import { PropType, computed, defineComponent } from 'vue';
import { BgStyles } from './models';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    bg: {
      type: Object as PropType<BgStyles>,
      required: true
    },
    scrollToElement: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const gradientColor1 = computed(() => getGradientColor(props.bg, 1));
    const styleTitle = computed(() => ([
      { color: shiftColor(gradientColor1.value, 0.7) }
    ]));
    const styleCaption = computed(() => ([
      { color: shiftColor(gradientColor1.value, 0.7) }
    ]));

    return {
      styleTitle,
      styleCaption
    }
  }
});
</script>
