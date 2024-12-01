<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppRail } from '@skeletonlabs/skeleton';
  import type { prnData } from '$lib';
  let { children } = $props();

  let dataObj: prnData = {
    name: 'April',
    subj: 'she',
    obj: 'her',
    possDeter: 'her',
    poss: 'hers',
    refl: 'herself',
    top: 'girl'
  };
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail class="w-64">
      <svelte:fragment slot="lead">
        <p class="font-bold text-center p-1.5 variant-filled-secondary">Pronoun Dressing Room</p>
      </svelte:fragment>
      <div class="grid p-4">
        <div class="flex justify-between items-center my-0.5">
          <label for="name" class="mr-2">Name</label>
          <input class="input h-6 w-1/2" id="name" bind:value={dataObj.name} type="text" />
        </div>
        <div class="flex justify-between items-center my-0.5">
          <label for="subj" class="mr-2">Subjective</label>
          <input class="input h-6 w-1/2" id="subj" bind:value={dataObj.subj} type="text" />
        </div>
        <div class="flex justify-between items-center my-0.5">
          <label for="obj" class="mr-2">Objective</label>
          <input class="input h-6 w-1/2" id="obj" bind:value={dataObj.obj} type="text" />
        </div>
        <div class="flex justify-between items-center my-0.5">
          <label for="possDeter" class="mr-2">Determiner</label>
          <input class="input h-6 w-1/2" id="possDeter" bind:value={dataObj.possDeter} type="text" />
        </div>
        <div class="flex justify-between items-center my-0.5">
          <label for="poss" class="mr-2">Possessive</label>
          <input class="input h-6 w-1/2" id="poss" bind:value={dataObj.poss} type="text" />
        </div>
        <div class="flex justify-between items-center my-0.5">
          <label for="refl" class="mr-2">Reflexive</label>
          <input class="input h-6 w-1/2" id="refl" bind:value={dataObj.refl} type="text" />
        </div>
        <div class="flex justify-between items-center my-0.5">
          <label for="top" class="mr-2">Identity</label>
          <input class="input h-6 w-1/2" id="top" bind:value={dataObj.top} type="text" />
        </div>
      </div>
    </AppRail>
  </svelte:fragment>
  {@render children()}
</AppShell>
