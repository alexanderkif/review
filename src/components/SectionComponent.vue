<template>
  <div v-intersection="onSectionIntersection" class="section relative-position overflow-hidden" :style="stylesBg">
    <div class="relative-position fit column">
      <div v-if="visible && bg.image" class="section-image kenburns-top absolute overflow-hidden" :style="styleImageBg">
      </div>
      <div class="full-width col-auto relative-position overflow-hidden">
        <svg v-if="visible && bg.wave" class="img-move absolute full-height" preserveAspectRatio="none" id="visual"
          viewBox="0 0 2000 200" width="2000" height="200" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
          <path
            d="M0 67L10.8 61C21.7 55 43.3 43 64.8 64.2C86.3 85.3 107.7 139.7 129.2 145.7C150.7 151.7 172.3 109.3 193.8 87C215.3 64.7 236.7 62.3 258.2 55.3C279.7 48.3 301.3 36.7 322.8 55C344.3 73.3 365.7 121.7 387.2 129.5C408.7 137.3 430.3 104.7 451.8 101.3C473.3 98 494.7 124 516.2 133C537.7 142 559.3 134 580.8 120.5C602.3 107 623.7 88 645.2 92.8C666.7 97.7 688.3 126.3 709.8 133.8C731.3 141.3 752.7 127.7 774.2 115.2C795.7 102.7 817.3 91.3 838.8 100.7C860.3 110 881.7 140 903.2 127.5C924.7 115 946.3 60 967.8 55C989.3 50 1010.7 95 1032.2 121.2C1053.7 147.3 1075.3 154.7 1096.8 134C1118.3 113.3 1139.7 64.7 1161.2 48C1182.7 31.3 1204.3 46.7 1225.8 66.5C1247.3 86.3 1268.7 110.7 1290.2 121.7C1311.7 132.7 1333.3 130.3 1354.8 128.7C1376.3 127 1397.7 126 1419.2 121.8C1440.7 117.7 1462.3 110.3 1483.8 99.8C1505.3 89.3 1526.7 75.7 1548.2 69.8C1569.7 64 1591.3 66 1612.8 81.2C1634.3 96.3 1655.7 124.7 1677.2 138.7C1698.7 152.7 1720.3 152.3 1741.8 139.5C1763.3 126.7 1784.7 101.3 1806.2 95.8C1827.7 90.3 1849.3 104.7 1870.8 98.2C1892.3 91.7 1913.7 64.3 1935.2 51.8C1956.7 39.3 1978.3 41.7 1989.2 42.8L2000 44L2000 0L1989.2 0C1978.3 0 1956.7 0 1935.2 0C1913.7 0 1892.3 0 1870.8 0C1849.3 0 1827.7 0 1806.2 0C1784.7 0 1763.3 0 1741.8 0C1720.3 0 1698.7 0 1677.2 0C1655.7 0 1634.3 0 1612.8 0C1591.3 0 1569.7 0 1548.2 0C1526.7 0 1505.3 0 1483.8 0C1462.3 0 1440.7 0 1419.2 0C1397.7 0 1376.3 0 1354.8 0C1333.3 0 1311.7 0 1290.2 0C1268.7 0 1247.3 0 1225.8 0C1204.3 0 1182.7 0 1161.2 0C1139.7 0 1118.3 0 1096.8 0C1075.3 0 1053.7 0 1032.2 0C1010.7 0 989.3 0 967.8 0C946.3 0 924.7 0 903.2 0C881.7 0 860.3 0 838.8 0C817.3 0 795.7 0 774.2 0C752.7 0 731.3 0 709.8 0C688.3 0 666.7 0 645.2 0C623.7 0 602.3 0 580.8 0C559.3 0 537.7 0 516.2 0C494.7 0 473.3 0 451.8 0C430.3 0 408.7 0 387.2 0C365.7 0 344.3 0 322.8 0C301.3 0 279.7 0 258.2 0C236.7 0 215.3 0 193.8 0C172.3 0 150.7 0 129.2 0C107.7 0 86.3 0 64.8 0C43.3 0 21.7 0 10.8 0L0 0Z"
            :style="{ fill: bg.wave.color1, fillOpacity: 0.5 }" stroke-linecap="round" stroke-linejoin="miter">
          </path>
        </svg>
        <div class="fit q-pa-md text-center text-no-wrap text-h3 text-uppercase" :class="visibleClass" :style="styleName">
          {{ name }}
        </div>
      </div>
      <div class="col items-stretch q-pa-md">
        <q-card class="fit no-wrap shadow-8 rounded-borders scroll" :class="isWide ? 'row' : 'column'"
          :style="{ backgroundColor: gradientColor1 + '55' }">
          <div class="slider col" :class="{ 'col-sm-8': isWide }">
            <SliderComponent :images="images" :color="gradientColor0" :bgColor="gradientColor1" />
          </div>
          <div class="col-auto" :class="{ 'col-sm-4': isWide }">
            <ContentComponent :content="content" :color="gradientColor0" :bgColor="gradientColor1" />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IntersectionValue, useQuasar } from 'quasar';
import {
  defineComponent,
  PropType,
  computed,
  ref,
  watch
} from 'vue';
import { Section } from './models';
import ContentComponent from './ContentComponent.vue';
import SliderComponent from './SliderComponent.vue';
import { getBgImage, getBgStyles, getGradientColor, shiftColor } from 'src/utils/utils';
import { useSectionsStore } from 'src/stores/sections-store';

export default defineComponent({
  name: 'SectionComponent',
  components: { ContentComponent, SliderComponent },
  props: {
    section: {
      type: Object as PropType<Section>,
      required: true
    }
  },
  setup(props) {
    const $q = useQuasar();
    const sectionsStore = useSectionsStore();
    const { name, content, images, bg } = props.section;
    const visible = ref(false);
    const isWide = computed(() => $q.screen.gt.sm);
    const visibleClass = computed(() => visible.value ? 'focus-in-contract' : 'invisible');
    const stylesBg = computed(() => getBgStyles(bg));
    const styleImageBg = computed(() => getBgImage(bg));
    const styleName = computed(() => ({ color: shiftColor(getGradientColor(bg, 1), 0.5) }));
    const gradientColor0 = computed(() => getGradientColor(bg, 0));
    const gradientColor1 = computed(() => getGradientColor(bg, 1));

    const onSectionIntersection = ref<IntersectionValue>({
      handler(entry: unknown): boolean {
        visible.value = (entry as IntersectionObserverEntry).isIntersecting ?? false;
        return true;
      },
      cfg: {
        threshold: [0.1]
      }
    });

    watch(
      visible,
      (newValue) => {
        if (newValue) {
          sectionsStore.setCurrentSectionId(props.section.id);
        }
      },
      // { immediate: true }
    );

    return {
      name,
      content,
      images,
      bg,
      isWide,
      stylesBg,
      styleName,
      styleImageBg,
      gradientColor0,
      gradientColor1,
      visible,
      onSectionIntersection,
      visibleClass
    };
  },
});
</script>

<style lang="scss">
$imgWidth: 2000vw;
$imgTime: 30s;

.section {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;

  /**.section-image::before {
  transform: rotate(30deg);
  } */

  .section-image {
    height: 100vh;
    width: 100vw;
  }

  .img-move {
    width: $imgWidth;
    // height: 50vh;
    -webkit-animation: slide-right $imgTime ease-in-out infinite alternate both;
    animation: slide-right $imgTime ease-in-out infinite alternate both;
  }

  .slider {
    min-height: 130px;
  }

  /**
  * ----------------------------------------
  * animation slide-right
  * ----------------------------------------
  */
  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      -webkit-transform: translateX(-$imgWidth + 100vw);
      transform: translateX(-$imgWidth + 100vw);
    }
  }

  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      -webkit-transform: translateX(-$imgWidth + 100vw);
      transform: translateX(-$imgWidth + 100vw);
    }
  }

  .kenburns-top {
    -webkit-animation: kenburns-top 5s ease-in-out infinite alternate both;
    animation: kenburns-top 5s ease-in-out infinite alternate both;
  }

  /**
  * ----------------------------------------
  * animation kenburns-top
  * ----------------------------------------
  */
  @-webkit-keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }

    100% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  @keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }

    100% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  .focus-in-contract {
    -webkit-animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  /**
  * ----------------------------------------
  * animation focus-in-contract
  * ----------------------------------------
  */
  @-webkit-keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes focus-in-contract {
    0% {
      letter-spacing: 1em;
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }

    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
}
</style>
