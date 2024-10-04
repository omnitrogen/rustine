<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import { fly } from "svelte/transition";
</script>

<svelte:head>
  <title>{m.fix()}</title>
  <meta content="fix your bike" name="description" />
</svelte:head>

<h1 in:fly>{m.fix()}</h1>

<div class="grid fix-grid">
  {#each [...Array(10).keys()] as _}
    <div class="card">
      <h1>hehe</h1>
      <p>
        ohohoho fez fez ofeoz jfijezoi jfoiejzoifjejzoifjeoizj foijezoifjoiez j
      </p>
      <a href="/fix" role="button">go to</a>
    </div>
  {/each}
</div>

<style>
  .fix-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--pico-block-spacing-vertical)
      var(--pico-block-spacing-horizontal);
    background: var(--pico-card-background-color);
    box-shadow: var(--pico-card-box-shadow);
    backdrop-filter: blur(6px);
    border-radius: calc(var(--pico-border-radius) * 4);
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    user-select: none;
    font-weight: bolder;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:active {
    transform: scale(0.95);
  }
</style>
