<script lang="ts">
  import { page } from "$app/stores";
</script>

<section class="container">
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{$page.status}"
  >
    <h1>{$page.status}</h1>
  </a>
  <h2>🧘</h2>
  <small>it's gonna be alright</small>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    min-height: 50vh;
    text-align: center;
  }

  section h1 {
    font-family: "Roboto", sans-serif;
    font-size: 4rem;
    font-style: italic;
    font-weight: 900;
    text-align: center;
  }
</style>
