<script lang="ts">
  import { page } from "$app/stores";
  import * as m from "$lib/paraglide/messages.js";
  import { languageTag } from "$lib/paraglide/runtime";
  import { slide } from "svelte/transition";

  const tokens = $derived($page.url.pathname.split("/").slice(2));

  let tokenPath = $derived.by(() => {
    let paths: Array<string> = [];
    let path = "";

    for (let token of tokens) {
      path += "/" + token;

      paths.push(path);
    }

    return paths;
  });

  let crumbs: Array<{ label: string; href: string }> = $derived.by(() => {
    let crumbs = tokens.map((t, i) => ({
      label: decodeURIComponent(t),
      href: tokenPath[i],
    }));

    crumbs.unshift({ label: m.home(), href: "/" });

    return crumbs;
  });
</script>

{#key languageTag()}
  {#if crumbs.length > 1 && $page.error?.message === undefined}
    <nav aria-label="breadcrumb" in:slide={{ duration: 2000, axis: "x" }}>
      <ul>
        {#each crumbs as c, i}
          <li>
            {#if i == crumbs.length - 1}
              <span>{c.label} </span>
            {:else}
              <a href={c.href}>{c.label}</a>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
{/key}

<style>
  nav {
    overflow: auto;
  }
</style>
