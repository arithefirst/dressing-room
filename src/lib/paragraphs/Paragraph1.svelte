<script lang="ts">
  import type { prnData } from '$lib';
  import { capatialize } from '$lib';
  import { getDataStore } from '$lib/data.svelte';

  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<p class="pt-4 px-4">
  Today I met a {dataObj.top} who goes by {dataObj.name}. {capatialize(dataObj.subj)}
  {#if dataObj.plural}have{:else}has{/if} a wonderful personality. That smile of {dataObj.poss} really makes me happy. I
  could talk to {dataObj.obj} all day although {dataObj.subj}
  {#if dataObj.plural}don't{:else}doesn't{/if} talk about {dataObj.refl} much. I wonder if {dataObj.possDeter} day has been
  wonderful. I hope so!
</p>
<p class="text-xs px-4">
  Authored by <a class="underline text-primary-500" href="https://underneathbubbles.tumblr.com/">underneathbubbles</a>
</p>
