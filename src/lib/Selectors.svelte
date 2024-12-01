<script lang="ts">
import { SlideToggle } from '@skeletonlabs/skeleton';
import type { prnData } from '$lib/index';
export let dataObj: prnData;
</script>

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
  <hr class="border-white border-2 my-1" />
  <div class="flex flex-col justify-center items-center my-0.5">
    <SlideToggle name="plural" size="sm" active="bg-secondary-500" bind:checked={dataObj.plural} />
    <p>Plural</p>
  </div>
</div>