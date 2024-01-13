<script lang="ts">
  import { cn } from "$lib/utils";
  import { page } from "$app/stores";
  import { Button } from "./ui/button";

  export let buttons: App.Navbar.Button[];
</script>

<nav
  class="flex justify-center space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"
>
  {#each buttons as button}
    <Button
      href={button.href}
      variant="ghost"
      class={cn(
        $page.url.pathname === button.href
          ? "bg-muted hover:bg-muted"
          : "hover:bg-transparent hover:underline",
        "justify-start",
      )}
    >
      <svelte:component this={button.icon} class="sm:mr-2" />
      <span class="hidden sm:block">{button.title}</span>
    </Button>
  {/each}
</nav>
