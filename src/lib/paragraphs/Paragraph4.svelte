<script lang="ts">
  import { getDataStore } from '$lib/data.svelte.js';
  import type { prnData } from '$lib';

  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<p class="pt-6 px-4">
  Hey, it's {dataObj.name}! {dataObj.subj}'{#if dataObj.plural}re{:else}s{/if} so cute and smart! {dataObj.name} is really
  good with computers too, {dataObj.subj} helped me out recently. I hope I'll be meeting {dataObj.obj} again soon, I love
  to hang out with {dataObj.obj}!
</p>
<p class="text-xs px-4">
  Authored by <a class="underline text-primary-500" href="https://reddit.com/u/Dojo-Tekina">u/Dojo-Tekina</a>
</p>
