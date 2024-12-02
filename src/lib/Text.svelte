<script lang="ts">
  import type { prnData } from '$lib/index';
  import { capatialize } from '$lib/index';
  import { getDataStore } from '$lib/data.svelte';
  const dataStore = getDataStore();
  let dataObj: prnData = $state(dataStore.data);
</script>

<div class="w-full h-full p-4">
  <div class="w-full h-full card variant-ghost-surface">
    <p class="pt-4 px-4">
      Today I met a {dataObj.top} who goes by {dataObj.name}. {capatialize(dataObj.subj)}
      {#if dataObj.plural}have{:else}has{/if} a wonderful personality. That smile of {dataObj.poss} really makes me happy.
      I could talk to {dataObj.obj} all day although {dataObj.subj}
      {#if dataObj.plural}don't{:else}dosen't{/if} talk about {dataObj.refl} much. I wonder if {dataObj.possDeter} day has
      been wonderful. I hope so!
    </p>
    <p class="text-xs px-4">
      Authored by <a class="underline text-primary-500" href="https://underneathbubbles.tumblr.com/"
        >underneathbubbles</a
      >
    </p>

    <p class="pt-6 px-4">
      Oh, did you hear about {dataObj.name}’s newest creation? {capatialize(dataObj.subj)} made a beautiful painting of a
      campground that {dataObj.possDeter} family took {dataObj.obj} to back when {dataObj.subj}
      {#if dataObj.plural}were{:else}was{/if} a child. {dataObj.name} is sooo talented, I wish I was {dataObj.obj}.
    </p>
    <p class="text-xs px-4">
      Authored by <a class="underline text-primary-500" href="https://reddit.com/u/AlexandraLikesCake"
        >u/AlexandraLikesCake</a
      >
    </p>

    <p class="pt-6 px-4">
      Did you see that one {dataObj.top}'s new haircut? I think {dataObj.possDeter} name is {dataObj.name}. It's really
      impressive considering {dataObj.subj} cut it {dataObj.refl} using {dataObj.possDeter} scissors.
    </p>
    <p class="text-xs px-4">
      Authored by <a class="underline text-primary-500" href="https://www.arithefirst.com">arithefirst</a>
    </p>

    <p class="pt-6 px-4">
      Hey, it's {dataObj.name}! {dataObj.subj}'{#if dataObj.plural}re{:else}s{/if} so cute and smart! {dataObj.name} is really
      good with computers too, {dataObj.subj} helped me out recently. I hope I'll be meeting {dataObj.obj} again soon, I
      love to hang out with {dataObj.obj}!
    </p>
    <p class="text-xs px-4 pb-4">
      Authored by <a class="underline text-primary-500" href="https://reddit.com/u/Dojo-Tekina">u/Dojo-Tekina</a>
    </p>
  </div>
</div>
