<script lang="ts">
  import type { prnData } from '$lib/index';
  import { capatialize } from '$lib/index';
  let { name, subj, obj, possDeter, poss, refl, top, plural }: prnData = $props();
</script>

<div class="w-full h-full p-4">
  <div class="w-full h-full card variant-ghost-surface">
    <p class="pt-4 px-4">
      Today I met a {top} who goes by {name}. {capatialize(subj)}
      {#if plural}have{:else}has{/if} a wonderful personality. That smile of {poss} really makes me happy. I could talk to
      {obj} all day although {subj}
      {#if plural}don't{:else}dosen't{/if} talk about {refl} much. I wonder if {possDeter}
      day has been wonderful. I hope so!
    </p>
    <p class="text-xs px-4">
      Authored by <a class="underline" href="https://underneathbubbles.tumblr.com/">underneathbubbles</a>
    </p>

    <p class="pt-6 px-4">
      Oh, did you hear about {name}’s newest creation? {capatialize(subj)} made a beautiful painting of a campground that
      {possDeter} family took {obj} to back when {subj}
      {#if plural}were{:else}was{/if} a child. {name} is sooo talented, I wish I was {obj}.
    </p>
    <p class="text-xs px-4">
      Authored by <a class="underline" href="https://reddit.com/u/AlexandraLikesCake">u/AlexandraLikesCake</a>
    </p>

    <p class="pt-6 px-4">
      Did you see that one {top}'s new haircut? I think {possDeter} name is {name}. It's really impressive considering {subj}
      cut it {refl}.
    </p>
    <p class="text-xs px-4">Authored by <a class="underline" href="https://www.arithefirst.com">arithefirst</a></p>
  </div>
</div>
