<script lang="ts">
    import '../main.css'
  import 'uno.css'
  import '@unocss/reset/tailwind.css'

  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';

  import * as config from '$lib/config'

  let { children } = $props()
</script>

<svelte:head>
    <title>{config.APP_NAME}</title>
</svelte:head>

<div class="max-w-4xl mx-auto min-h-screen layout">
    <Header />
    <main class="px-8">
        {@render children()}
    </main>
    <Footer />
</div>

<style>
    .layout {
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>
