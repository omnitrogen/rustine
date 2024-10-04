<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import { fly } from "svelte/transition";
</script>

<svelte:head>
  <title>{m.learn()}</title>
  <meta content="learn about bike maintenance" name="description" />
</svelte:head>

<h1 in:fly>{m.learn()}</h1>

{#each [...Array(8).keys()] as _, i}
  <article in:fly|global={{ duration: 120, delay: i * 100 }}>
    <h5 class="card-title">Tools</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a class="btn btn-primary stretched-link" href="/learn/tools">Visit tools</a
    >
  </article>
{/each}
