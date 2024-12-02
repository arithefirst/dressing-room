<script lang="ts">
  import { onMount } from 'svelte';
  import Text from '$lib/Text.svelte';
  import Footer from '$lib/Footer.svelte';
  let darkMode: boolean = $state(true);

  onMount(() => {
    darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
</script>

<svelte:head>
  {#if darkMode}
    <link rel="icon" href="/wardrobe-dark.svg" />
  {:else}
    <link rel="icon" href="/wardrobe-light.svg" />
  {/if}
</svelte:head>

<div class="relative h-full">
  <Text />
  <Footer />
</div>
