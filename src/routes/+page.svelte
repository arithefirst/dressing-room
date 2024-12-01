<script lang="ts">
  import { onMount } from 'svelte';

  let darkMode: boolean = true;

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

<div class="w-full h-full p-4">
  <div class="w-full h-full card variant-ghost-surface">
    <!--  <p>Hello! Today I met a {dataObj.top} who goes by {dataObj.name}. {dataObj.subj} has a wonderful personality. That smile of {dataObj.poss} really makes me happy. I could talk to {dataObj.obj} all day although {dataObj.subj} doesn't talk about {dataObj.refl} much. I wonder if {dataObj.possDeter} day has been wonderful. I hope so!</p>  -->
  </div>
</div>
