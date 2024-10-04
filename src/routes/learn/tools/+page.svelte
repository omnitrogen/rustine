<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import { fly } from "svelte/transition";
</script>

<svelte:head>
  <title>{m.tools()}</title>
  <meta content="tools" name="description" />
</svelte:head>

<section class="hero" in:fly>
  <h1>{m.tools()}</h1>
</section>
