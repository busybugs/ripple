<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import { settings } from "$lib/store";
  import * as Card from "$lib/components/ui/card";
  import { Button } from "$lib/components/ui/button";
  import { Sun, Moon, X, Check } from "lucide-svelte";

  function toggleMinimap() {
    $settings.minimap = !$settings.minimap;
  }
</script>

<div class="space-y-6">
  <div class="space-y-0.5">
    <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
    <p class="w-72 text-muted-foreground sm:w-full">
      Manage your account settings.
    </p>
  </div>
</div>

<Card.Root class="mt-10">
  <Card.Content>
    <div class="grid grid-cols-2">
      <span class="mt-6 text-lg font-bold tracking-tight">Change Theme</span>

      <Button on:click={toggleMode} variant="outline" size="icon" class="mt-6">
        <Sun
          class="wi-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
    <div class="grid grid-cols-2">
      <span class="mt-6 text-lg font-bold tracking-tight">Toggle minimap</span>

      <Button
        on:click={toggleMinimap}
        variant="outline"
        size="icon"
        class="mt-6"
      >
        <span class:hidden={$settings.minimap}>
          <X />
        </span>
        <span class:hidden={!$settings.minimap}>
          <Check />
        </span>
      </Button>
    </div>
  </Card.Content>
</Card.Root>
