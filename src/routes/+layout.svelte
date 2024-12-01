<script lang="ts">
  import '../app.postcss';
  import { AppShell, AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
  let { children } = $props();
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <AppRail class="w-32">
      <svelte:fragment slot="lead">
        <p class="font-bold text-center p-1.5 variant-filled-secondary">Pronoun Dressing Room</p>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <AppRailAnchor href="https://www.arithefirst.com/" target="_blank" title="Made by Arithefirst">
          <img alt="cat from 2023 steam summer sale" src="/favicon.png" class="w-1/2 m-auto" />
        </AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  {@render children()}
</AppShell>
