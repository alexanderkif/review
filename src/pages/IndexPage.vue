<template>
  <q-page class="sections">
    <section-component v-for="section in activeSections" :key="section.id" :id="section.id"
      :section="section"></section-component>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import SectionComponent from 'src/components/SectionComponent.vue';
import { useSectionsStore } from 'src/stores/sections-store';

export default defineComponent({
  name: 'IndexPage',
  components: { SectionComponent },
  setup() {
    const sectionsStore = useSectionsStore();
    const activeSections = computed(() => sectionsStore.getSections.filter(section => section.active));

    return { activeSections };
  }
});
</script>

<style lang="scss">
.sections {
  height: 100dvh;
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
