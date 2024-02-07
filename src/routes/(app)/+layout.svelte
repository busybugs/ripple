<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import Navbar from "$lib/components/Navbar.svelte";
  import { Home, Cog, FileText, Wand2 } from "lucide-svelte";

  const navbarButtons: App.Navbar.Button[] = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "Load Out",
      icon: FileText,
      href: "/load-out",
    },
    {
      title: "Formulae",
      icon: Wand2,
      href: "/formulae",
    },
    {
      title: "Settings",
      icon: Cog,
      href: "/settings",
    },
  ];
</script>

<ModeWatcher />

<div class="h-[100vh] space-y-6 p-6">
  <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
    <aside class="lg:w-1/5">
      <Navbar buttons={navbarButtons} />
    </aside>
  <div class="flex-1 lg:max-w-7xl">
      <slot />
    </div>
  </div>
</div>
