<template>
  <q-page class="sections">
    <section-component v-for="section in activeSections" :key="section.id" :section="section"></section-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionComponent from 'components/SectionComponent.vue';
import sections from './sections';


export default defineComponent({
  name: 'IndexPage',
  components: { SectionComponent },
  setup() {
    const activeSections = sections.filter(section => section.active);

    return { activeSections };
  }
});
</script>

<style lang="scss">
.sections {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  /* IE and Edge */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}

.sections::-webkit-scrollbar {
  /* Hide scrollbar for Chrome, Safari and Opera */
  display: none;
}
</style>
