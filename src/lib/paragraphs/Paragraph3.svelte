<script lang="ts">
  import { getDataStore } from '$lib/data.svelte';
  import type { prnData } from '$lib';

  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<p class="pt-6 px-4">
  Did you see that one {dataObj.top}'s new haircut? I think {dataObj.possDeter} name is {dataObj.name}. It's really
  impressive considering {dataObj.subj} cut it {dataObj.refl} using {dataObj.possDeter} scissors.
</p>
<p class="text-xs px-4">
  Authored by <a class="underline text-primary-500" href="https://www.arithefirst.com">arithefirst</a>
</p>
