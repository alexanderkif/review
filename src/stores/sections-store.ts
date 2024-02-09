import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import sections from './sections';
import { Section } from 'src/components/models';

interface SectionsStore {
  sections: Section[];
  currentSectionId: number;
}

export const useSectionsStore = defineStore('sections-store', {
  state: (): SectionsStore => ({
    sections: sections,
    currentSectionId: +(LocalStorage.getItem('currentSectionId') || 0),
  }),
  getters: {
    getSections: (state): Section[] => state.sections,
    getCurrentSection: (state): Section =>
      state.sections.find((section) => section.id === state.currentSectionId) ||
      state.sections[0],
  },
  actions: {
    storageValues() {
      LocalStorage.set('currentSectionId', this.currentSectionId);
    },
    setCurrentSectionId(id: number) {
      this.currentSectionId = id;
      this.storageValues();
    },
  },
});
