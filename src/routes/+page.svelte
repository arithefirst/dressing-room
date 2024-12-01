<script lang="ts">
  import { onMount } from 'svelte';

  let darkMode: boolean = true;

  onMount(() => {
    darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
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
  <div class="w-full h-full card variant-ghost-primary"></div>
</div>
