import type { prnData } from '$lib';

const dataStore: prnData = $state({
  name: 'April',
  subj: 'she',
  obj: 'her',
  possDeter: 'her',
  poss: 'hers',
  refl: 'herself',
  top: 'girl',
  plural: false
});

export function getDataStore() {
  return {
    get data() {
      return dataStore;
    },
  };
}