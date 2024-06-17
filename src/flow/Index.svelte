<script lang="ts">
  import { writable } from "svelte/store";
  import { SvelteFlow, Background, type Node, type Edge } from "@xyflow/svelte";

  import "@xyflow/svelte/dist/style.css";

  import { initialNodes, initialEdges } from "@src/data";
  import DownloadButton from "@src/component/DownloadButton.svelte";
  import CustomNode from "@src/component/CustomNode.svelte";

  const nodes = writable<Node[]>(initialNodes);
  const edges = writable<Edge[]>(initialEdges);

  const defaultEdgeOptions = {
    animated: true,
    type: "smoothstep",
  };
  const nodeTypes = {
    custom: CustomNode,
  };
</script>

<div style="height:100vh;">
  <SvelteFlow
    {nodes}
    {nodeTypes}
    {edges}
    {defaultEdgeOptions}
    fitView
    class="bg-teal-50"
  >
<!--    <DownloadButton />-->
    <Background />
  </SvelteFlow>
</div>
