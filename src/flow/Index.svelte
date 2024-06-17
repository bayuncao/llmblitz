<script lang="ts">
  import { writable } from "svelte/store";
  import {
    SvelteFlow,
    Background,
    ControlButton,
    type Node,
    type Edge,
    type ColorMode,
    Controls,
    getNodesBounds,
    getViewportForBounds,
  } from "@xyflow/svelte";

  import "@xyflow/svelte/dist/style.css";

  import { initialNodes, initialEdges } from "@src/data";
  import CustomNode from "@src/component/CustomNode.svelte";
  import { toPng } from "html-to-image";

  const nodes = writable<Node[]>(initialNodes);
  const edges = writable<Edge[]>(initialEdges);

  const defaultEdgeOptions = {
    animated: true,
    type: "smoothstep",
  };
  const nodeTypes = {
    custom: CustomNode,
  };

  let colorMode: ColorMode = "dark";

  const imageWidth = 1024;
  const imageHeight = 768;

  function handleClick() {
    const nodesBounds = getNodesBounds($nodes);
    const viewport = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2.0,
      0.2,
    );

    const viewportDomNode = document.querySelector<HTMLElement>(
      ".svelte-flow__viewport",
    )!;

    if (viewport) {
      toPng(viewportDomNode, {
        backgroundColor: "#1a365d",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        },
      }).then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "llm-blitz.png";
        link.href = dataUrl;
        link.click();
      });
    }
  }
</script>

<div style="height:100vh;">
  <SvelteFlow
    {nodes}
    {nodeTypes}
    {edges}
    {defaultEdgeOptions}
    {colorMode}
    fitView
    class="bg-teal-50"
  >
    <Background />
    <Controls showLock={false}>
      <ControlButton on:click={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          />
        </svg>
      </ControlButton>
      <ControlButton on:click={() => (colorMode = "light")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"
          />
        </svg>
      </ControlButton>
      <ControlButton on:click={() => (colorMode = "dark")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
          />
        </svg>
      </ControlButton>
    </Controls>
  </SvelteFlow>
</div>
