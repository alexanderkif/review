<template>
  <q-layout view="LHR lpr lfr">
    <q-header class="bg-primary text-white">
      <!-- <q-toolbar>

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar> -->
      <q-btn :class="['q-ma-md', drawerRight ? 'absolute-top-right' : 'absolute-top-left']" dense flat round icon="menu"
        @click="toggleLeftDrawer" color="grey-10" />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :side="drawerRight ? 'right' : 'left'" bordered>
      <q-checkbox v-model="drawerRight" :label="`Menu to the ${drawerRight ? 'right' : 'left'}`"
        checked-icon="switch_right" unchecked-icon="switch_left" color="green" keep-color />
      {{ isMobile }}
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'
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
    const leftDrawerOpen = ref(false)
    const drawerRight = ref(false)
    const $q = useQuasar()
    const isMobile = computed(() => $q.platform.is.mobile);

    return {
      essentialLinks: linksList,
      drawerRight,
      leftDrawerOpen,
      isMobile,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
