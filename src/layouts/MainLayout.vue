<template>
  <q-layout view="LHR lpr lfr">
    <q-header class="bg-primary text-white">
      <q-btn :class="drawerRight ? 'absolute-top-right' : 'absolute-top-left'" @click="toggleLeftDrawer"
        class="menu-button q-ma-md" push glossy round icon="menu" :style="stylesMenuButton" />
    </q-header>

    <q-drawer v-model="drawerOpen" :side="drawerRight ? 'right' : 'left'" overlay class="menu-drawer column"
      :style="stylesDrawer">
      <q-btn v-if="drawerOpen" @click="toggleLeftDrawer" class="menu-button q-mt-md absolute" push glossy round
        :icon="drawerRight ? 'arrow_forward' : 'arrow_back'" :style="stylesMenuButtonOpened" />
      <div class="row q-ma-sm col-auto" :class="drawerRight ? 'justify-end' : 'justify-strat'">
        <q-btn flat rounded @click="drawerRight = !drawerRight" size="sm">
          <div v-if="drawerRight" class="q-mr-md">Right menu</div>
          <q-icon :name="drawerRight ? 'switch_right' : 'switch_left'" :style="stylesMenuIcon" />
          <div v-if="!drawerRight" class="q-ml-md">Left menu</div>
        </q-btn>
        <q-btn flat rounded @click="toggleFullscreen" size="sm"
          :icon="isFullscreenActive ? 'fullscreen_exit' : 'fullscreen'" label="Fullscreen" />
      </div>
      <q-separator />
      <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" class="col"
        :style="!drawerRight && { transform: 'scaleX(-1)' }">
        <EssentialLink v-for="section in sections" :key="section.id" :id="section.id" :name="section.name"
          :title="section.content.title" :bg="currentSection.bg" :scrollToElement="scrollToElement"
          :style="!drawerRight && { transform: 'scaleX(-1)' }" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useSectionsStore } from 'src/stores/sections-store';
import { getGradientColor, shiftColor } from 'src/utils/utils';
import EssentialLink from 'components/EssentialLink.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const $q = useQuasar();
    const isMobile = computed(() => $q.platform.is.mobile);
    const isFullscreenActive = computed(() => $q.fullscreen.isActive);
    const sectionsStore = useSectionsStore();
    const currentSection = computed(() => sectionsStore.getCurrentSection);
    const sections = computed(() => sectionsStore.getSections);
    const drawerOpen = ref(false);
    const drawerRight = ref(false);
    const gradientColor0 = computed(() => getGradientColor(currentSection.value.bg, 0));
    const gradientColor1 = computed(() => getGradientColor(currentSection.value.bg, 1));
    const stylesDrawer = computed(() => ([
      { background: gradientColor0.value },
      `border-${drawerRight.value ? 'left' : 'right'}: 1px solid ${shiftColor(gradientColor1.value, 0.7)};`,
      { color: shiftColor(gradientColor1.value, 0.7) }
    ]));
    const stylesMenuIcon = computed(() => ([
      { color: shiftColor(gradientColor1.value, 0.7) }
    ]));
    const stylesMenuButton = computed(() => ([
      { background: shiftColor(gradientColor1.value, 0.7) },
      { color: shiftColor(gradientColor0.value, 1.2) },
      { transition: 'all 0.3s' }
    ]));
    const stylesMenuButtonOpened = computed(() => ([
      drawerRight.value ? { left: '-1.5em' } : { right: '-1.5em' },
      { top: 0 },
      { background: shiftColor(gradientColor1.value, 0.7) },
      { color: shiftColor(gradientColor0.value, 1.2) },
      { transition: 'all 0.3s' }
    ]));
    const thumbStyle = computed(() => ({
      right: '4px',
      borderRadius: '5px',
      backgroundColor: shiftColor(gradientColor1.value, 0.7),
      width: '5px',
      opacity: 0.75
    } as unknown as Partial<CSSStyleDeclaration>));
    const barStyle = computed(() => ({
      right: '2px',
      borderRadius: '9px',
      backgroundColor: shiftColor(gradientColor1.value, 0.7),
      width: '9px',
      opacity: 0.2
    } as unknown as Partial<CSSStyleDeclaration>));
    const toggleLeftDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
    };
    const toggleFullscreen = () => {
      $q.fullscreen.toggle();
    };
    function scrollToElement(id: number) {
      const sectionsEls = document.querySelectorAll('.section') as unknown as HTMLElement[];
      const el = [...sectionsEls].find(el => (+(el.getAttribute('id') || 0) === id)) || sectionsEls[0];
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }));
      drawerOpen.value = false;
    };

    onMounted(() => {
      scrollToElement(currentSection.value.id);
    });

    return {
      sectionsStore,
      sections,
      drawerRight,
      drawerOpen,
      isMobile,
      currentSection,
      stylesMenuIcon,
      stylesMenuButton,
      stylesMenuButtonOpened,
      stylesDrawer,
      isFullscreenActive,
      thumbStyle,
      barStyle,
      toggleLeftDrawer,
      toggleFullscreen,
      scrollToElement
    }
  }
});
</script>

<style lang="scss">
.menu-drawer {
  transition: all 0.3s;
}
</style>
