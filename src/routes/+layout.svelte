<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppRail, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { getDataStore } from '$lib/data.svelte';
  import type { prnData } from '$lib';
  import Selectors from '$lib/Selectors.svelte';
  const { children } = $props();

  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <div class="h-full" role="navigation">
      <AppRail class="w-64 md:block hidden">
        <svelte:fragment slot="lead">
          <p class="font-bold text-center p-1.5 variant-filled-secondary rounded-b-lg">Pronoun Dressing Room</p>
        </svelte:fragment>
        <Selectors bind:dataObj />
      </AppRail>
    </div>
  </svelte:fragment>
  <div role="navigation">
    <Accordion class="md:hidden block fixed top-0 left-0 variant-filled-secondary rounded-b-lg z-10" role="navigation">
      <AccordionItem>
        <svelte:fragment slot="summary">Pronoun Dressing Room (settings)</svelte:fragment>
        <svelte:fragment slot="content">
          <Selectors bind:dataObj />
        </svelte:fragment>
      </AccordionItem>
    </Accordion>
  </div>
  <div class="mt-10 md:mt-0"></div>
  {@render children()}
</AppShell>
