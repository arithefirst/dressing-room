# Contributing

🎉 First off, thanks for taking the time to contribute! 🎉

## Adding a new paragraph

If you would like to add a new paragraph for people to try out names and pronouns with, follow this guide.

### Suggesting a Paragraph

1. Create a new [Issue](https://github.com/arithefirst/dressing-room/issues/new/choose) using the "Suggest a Paragraph" template.
   1. Read the instructions in the template
   2. Replace any existing pronouns with the provided placeholders
2. A maintainer (likely [April](https://www.arithefirst.com)) will review your issue within a week.
3. Once your request is approved, see [Adding an Approved Paragraph](/?tab=readme-ov-file#adding-an-approved-paragraph).

### Adding an Approved Paragraph

1. Create a branch of the repository and clone it locally
2. Create a new `.svelte` file in `/src/lib/paragraphs/`
3. Add the below `<script>` tag

   ```HTML
   <script lang="ts">
     import { getDataStore } from '$lib/data.svelte';
     import type { prnData } from '$lib';

     const dataStore = getDataStore();
     let dataObj: prnData = $state(dataStore.data);
   </script>
   ```

4. Create a `<p>` tag with the `pt-6` and `px-4` classes
   1. Write your paragraph in this tag, using the placeholders you used in the issue, but with `dataObj.` prepended (EX: `{subj}` becomes `{dataObj.subj}`)
   2. Ensure you add plurality support for pronouns like 'they' by using an `{#if}` block to check if `dataObj.plural` is true. See examples of this in the existing `ParagraphX.svelte` files.
5. Add the below `<p>` tag, and replace YOURUSERNAME and YOURURL with your preferred username and url.
   ```HTML
   <p class="text-xs px-4">
     Authored by <a class="underline text-primary-500" href="YOURURL">YOURUSERNAME</a>
   </p>
   ```
6. If a sentence starts with one of the variables, add capitalization
   1. Import capitalize
      ```typescript
      import { capatialize } from '$lib';
      ```
   2. Replace the variable with `{{capatialize(dataObj.VARIABLE)}}`
7. Format files with prettier by running `npm run format`
8. Commit your changes and [create a pull request](https://github.com/arithefirst/dressing-room/pulls)
