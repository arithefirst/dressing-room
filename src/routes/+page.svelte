<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppRail, SlideToggle } from '@skeletonlabs/skeleton';
  import type { prnData } from '$lib';
  import { onMount } from 'svelte';
  import Text from '$lib/Text.svelte';
  import Selectors from '$lib/Selectors.svelte';
  let darkMode: boolean = true;

  onMount(() => {
    darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  let dataObj: prnData = {
    name: 'April',
    subj: 'she',
    obj: 'her',
    possDeter: 'her',
    poss: 'hers',
    refl: 'herself',
    top: 'girl',
    plural: false
  };
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

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail class="w-64">
      <svelte:fragment slot="lead">
        <p class="font-bold text-center p-1.5 variant-filled-secondary">Pronoun Dressing Room</p>
      </svelte:fragment>
      <Selectors bind:dataObj />
    </AppRail>
  </svelte:fragment>
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
</AppShell>
