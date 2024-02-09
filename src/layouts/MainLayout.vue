<template>
  <q-layout view="LHR lpr lfr">
    <q-header class="bg-primary text-white">
      <q-btn :class="drawerRight ? 'absolute-top-right' : 'absolute-top-left'" @click="toggleLeftDrawer"
        class="menu-button q-ma-md" push glossy round icon="menu" :style="[{ background: shiftColor(getGradientColor(currentSection.bg, 1), 0.7) },
        { color: shiftColor(getGradientColor(currentSection.bg, 0), 1.2) }, { transition: 'all 0.3s' }]" />
    </q-header>

    <q-drawer v-model="drawerOpen" :side="drawerRight ? 'right' : 'left'" overlay class="menu-drawer"
      :style="[{ background: getGradientColor(currentSection.bg, 0) }, `border-${drawerRight ? 'left' : 'right'}: 1px solid ${shiftColor(getGradientColor(currentSection.bg, 1), 0.7)};`, { color: shiftColor(getGradientColor(currentSection.bg, 1), 0.7) }]">
      <q-btn v-if="drawerOpen" @click="toggleLeftDrawer" class="menu-button q-mt-md absolute" push glossy round
        :icon="drawerRight ? 'arrow_forward' : 'arrow_back'" :style="[drawerRight ? { left: '-1.5em' } : { right: '-1.5em' }, { top: 0 },
        { background: shiftColor(getGradientColor(currentSection.bg, 1), 0.7) },
        { color: shiftColor(getGradientColor(currentSection.bg, 0), 1.2) }, { transition: 'all 0.3s' }]" />
      <div class="q-pa-md">
        <div class="row" :class="drawerRight ? 'justify-end' : 'justify-strat'">
          <q-btn flat rounded @click="drawerRight = !drawerRight">
            <div v-if="drawerRight" class="q-mr-md">Menu to the right</div>
            <q-icon :name="drawerRight ? 'switch_right' : 'switch_left'"
              :style="{ color: shiftColor(getGradientColor(currentSection.bg, 1), 0.7) }" />
            <div v-if="!drawerRight" class="q-ml-md">Menu to the left</div>
          </q-btn>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useSectionsStore } from 'src/stores/sections-store';
import { getGradientColor, shiftColor, getBgStyles } from 'src/utils/utils';
// import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup() {
    const sectionsStore = useSectionsStore();
    const currentSection = computed(() => sectionsStore.getCurrentSection);
    const drawerOpen = ref(false);
    const drawerRight = ref(false);
    const $q = useQuasar();
    const isMobile = computed(() => $q.platform.is.mobile);

    return {
      sectionsStore,
      essentialLinks: linksList,
      drawerRight,
      drawerOpen,
      isMobile,
      currentSection,
      getGradientColor,
      shiftColor,
      getBgStyles,
      toggleLeftDrawer() {
        drawerOpen.value = !drawerOpen.value
      },
    }
  }
});
</script>

<style lang="scss">
.menu-drawer {
  transition: all 0.3s;
}
</style>
