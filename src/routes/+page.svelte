<script lang="ts">
  import { onMount } from 'svelte';
  import Text from '$lib/Text.svelte';
  import { getDataStore } from '$lib/data.svelte';
  import type { prnData } from '$lib';
  let darkMode: boolean = $state(true);
  const dataStore = getDataStore()
  let dataObj: prnData = $state(dataStore.data)

  onMount(() => {
    darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
</script>

<svelte:head>
  <title>Pronoun Dressing Room</title>
  <meta name="Description" content="A place to try on pronouns and names to find the ones that work" />
  {#if darkMode}
    <link rel="icon" href="/wardrobe-dark.svg" />
  {:else}
    <link rel="icon" href="/wardrobe-light.svg" />
  {/if}
</svelte:head>

<div class="h-full">
  <Text
    name={dataObj.name}
    subj={dataObj.subj}
    obj={dataObj.obj}
    possDeter={dataObj.possDeter}
    poss={dataObj.poss}
    refl={dataObj.refl}
    top={dataObj.top}
    plural={dataObj.plural}
  />
</div>