<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Badge } from "$lib/components/ui/badge";
  import { Plus, Check, ArrowRight } from "radix-icons-svelte";
  import { categories, items } from "$lib/store";

  let hideAddCategory = true;
  let hideAddItem = true;
  let categoryContent: string = "";
  let itemContent: string = "";
  let itemCategoryContent: string = "";
</script>

<div class="space-y-6">
  <div class="space-y-0.5">
    <h2 class="text-2xl font-bold tracking-tight">
      Materials
    </h2>

    <p class="w-72 text-muted-foreground sm:w-full pb-6">
      Add, manage, and categorize the materials.
    </p>
  </div>

  <div class="grid grid-cols-2">
    <div class="space-y-0.5">
      <h3 class="text-xl font-bold tracking-tight mb-4">
        Categories
      </h3>

      <ul class="mb-5">
        {#each $categories as category, i}
          <li class="mb-3">
            <Badge>{i + 1}.</Badge>
            {category}
          </li>
        {/each}
      </ul>

      <form class="pt-5 pb-5" class:hidden={hideAddCategory}>
        <Input bind:value={categoryContent} placeholder="Category name..." class="lg:max-w-md mb-3" />

        <Button
          type="submit"
          variant="outline"
          on:click={() => {
            if(!categoryContent) return;
            $categories = [...$categories, categoryContent];
          }}
        >
          <Plus class="mr-2" />
          Add
        </Button>

        <Button
          type="button"
          variant="outline"
          on:click={() => (hideAddCategory = !hideAddCategory)}
        >
          <Check class="mr-2" />
          Save
        </Button>
      </form>

      <div class:hidden={!hideAddCategory}>
        <Button
          variant="outline"
          on:click={() => (hideAddCategory = !hideAddCategory)}
        >
          <Plus class="mr-2" />
          Add Category
        </Button>
      </div>

    </div>

    <div class="space-y-0.5">
      <h3 class="text-xl font-bold tracking-tight mb-4">
        Items
      </h3>

      <ul class="mb-5">
        {#each [...$items] as [item, category], i}
          <li class="mb-3 flex space-x-2">
            <Badge class="mr-2">{i + 1}.</Badge>
            {item}
            <ArrowRight class="ml-2 mt-[0.4rem]" />
            <span class="mr-2">{category}</span>
          </li>
        {/each}
      </ul>

      <form class="pt-5 pb-5" class:hidden={hideAddItem}>
        <Input bind:value={itemContent} placeholder="Item name..." class="lg:max-w-md mb-3" />
        <Input bind:value={itemCategoryContent} placeholder="Category name..." class="lg:max-w-md mb-3" />

        <Button
          type="submit"
          variant="outline"
          on:click={() => {
            if(!itemContent || !itemCategoryContent) return;
            $items.set(itemContent, itemCategoryContent);
            $items = $items;
          }}
        >
          <Plus class="mr-2" />
          Add
        </Button>

        <Button
          type="button"
          variant="outline"
          on:click={() => (hideAddItem = !hideAddItem)}
        >
          <Check class="mr-2" />
          Save
        </Button>
      </form>

      <div class:hidden={!hideAddItem}>
        <Button
          variant="outline"
          on:click={() => (hideAddItem = !hideAddItem)}
        >
          <Plus class="mr-2" />
          Add Item
        </Button>
      </div>
    </div>
  </div>
</div>
