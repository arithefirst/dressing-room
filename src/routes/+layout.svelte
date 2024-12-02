<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppRail } from '@skeletonlabs/skeleton';
  import { getDataStore } from '$lib/data.svelte';
  import type { prnData } from '$lib';
  import Selectors from '$lib/Selectors.svelte';
  const { children } = $props();

  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail class="w-64">
      <svelte:fragment slot="lead">
        <p class="font-bold text-center p-1.5 variant-filled-secondary">Pronoun Dressing Room</p>
      </svelte:fragment>
      <Selectors bind:dataObj />
    </AppRail>
  </svelte:fragment>
  {@render children()}
</AppShell>
