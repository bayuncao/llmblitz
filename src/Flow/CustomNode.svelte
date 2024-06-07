<script>
  import { Handle, Position } from "@xyflow/svelte";

  export let positionAbsolute = { x: 0, y: 0 };
</script>

<Handle type="target" position={Position.Top} />
<div class="custom">
  Custom Node
  <div>
    <strong>position: {~~positionAbsolute.x},{~~positionAbsolute.y}</strong>
  </div>
</div>

<Handle
  type="source"
  position={Position.Bottom}
  id="a"
  style="transform: translate(10px, 50%); left: 0;"
/>
<Handle
  type="source"
  position={Position.Bottom}
  id="b"
  style="transform: translate(0, 50%); left: auto; right: 10px"
/>

<style>
  .custom {
    padding: 10px;
    background: white;
    border: 1px solid #555;
    border-radius: 3px;
  }
</style>
