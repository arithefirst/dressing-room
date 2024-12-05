<script lang="ts">
  import type { prnData } from '$lib';
  import { capatialize } from '$lib';
  import { getDataStore } from '$lib/data.svelte.js';

  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<p class="pt-6 px-4">
  Oh, did you hear about {dataObj.name}’s newest creation? {capatialize(dataObj.subj)} made a beautiful painting of a campground
  that {dataObj.possDeter} family took {dataObj.obj} to back when {dataObj.subj}
  {#if dataObj.plural}were{:else}was{/if} a child. {dataObj.name} is sooo talented, I wish I was {dataObj.obj}.
</p>
<p class="text-xs px-4">
  Authored by <a class="underline text-primary-500" href="https://reddit.com/u/AlexandraLikesCake"
    >u/AlexandraLikesCake</a
  >
</p>
