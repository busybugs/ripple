<script lang="ts">
  import { writable } from "svelte/store";
  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,
  } from "@xyflow/svelte";
  import { settings } from "$lib/store";

  const nodes = writable([]);
  const edges = writable([]);
</script>

<div class="space-y-6">
  <div class="space-y-0.5">
    <h2 class="text-2xl font-bold tracking-tight">Optimize</h2>

    <p class="w-72 pb-6 text-muted-foreground sm:w-full">
      Create graphs and optimize them.
    </p>
  </div>
</div>

<div class="h-[50vh]">
  <SvelteFlow
    {nodes}
    {edges}
    fitView
    on:nodeclick={(event) => console.log("on node click", event.detail.node)}
  >
    <Controls />
    {#if $settings.minimap}
      <MiniMap />
    {/if}
    <Background variant={BackgroundVariant.Dots} />
  </SvelteFlow>
</div>
