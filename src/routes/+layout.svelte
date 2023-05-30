<script>
    import '../app.postcss';
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen bg-gray-100">
    <Navbar/>
    <div class="flex-grow">
        <slot />
    </div>
    <Footer/>
</div>

<style>
    html, body, #svelte {
        height: 100%;
    }
</style>
