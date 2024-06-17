<script>
  import "./app.css";
  import Flow from "./flow/Index.svelte";
</script>

<Flow />

<style>
  :global(.svelte-flow .svelte-flow__node.parent) {
    background-color: rgba(220, 220, 255, 0.4);
  }
</style>
