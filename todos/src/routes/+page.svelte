<script>
    /** @type {import('./$types').PageData} */
    import Box from './components/box.svelte';
    export let data

    // import { todos } from './stores/store.js';
    $: todos = data.prop?.data
</script>

<div>
   <Box {todos}/>
</div>