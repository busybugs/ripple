<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Badge } from "$lib/components/ui/badge";
  import { categories, items } from "$lib/store";
  import { Plus, Check, ArrowRight } from "lucide-svelte";

  let hideAddCategory = true;
  let hideAddItem = true;
  let categoryContent: string = "";
  let itemContent: string = "";
  let itemCategoryContent: string = "";
</script>

<div class="space-y-6">
  <div class="space-y-0.5">
    <h2 class="text-2xl font-bold tracking-tight">Materials</h2>

    <p class="w-72 pb-6 text-muted-foreground sm:w-full">
      Add, manage, and categorize the materials.
    </p>
  </div>

  <div class="grid grid-cols-2">
    <div class="space-y-0.5">
      <h3 class="mb-4 text-xl font-bold tracking-tight">Categories</h3>

      <ul class="mb-5">
        {#each $categories as category, i}
          <li class="mb-3">
            <Badge>{i + 1}.</Badge>
            {category}
          </li>
        {/each}
      </ul>

      <form class="pb-5 pt-5" class:hidden={hideAddCategory}>
        <Input
          bind:value={categoryContent}
          placeholder="Category name..."
          class="mb-3 lg:max-w-md"
        />

        <Button
          type="submit"
          variant="outline"
          on:click={() => {
            if (!categoryContent) return;
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
      <h3 class="mb-4 text-xl font-bold tracking-tight">Items</h3>

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

      <form class="pb-5 pt-5" class:hidden={hideAddItem}>
        <Input
          bind:value={itemContent}
          placeholder="Item name..."
          class="mb-3 lg:max-w-md"
        />
        <Input
          bind:value={itemCategoryContent}
          placeholder="Category name..."
          class="mb-3 lg:max-w-md"
        />

        <Button
          type="submit"
          variant="outline"
          on:click={() => {
            if (!itemContent || !itemCategoryContent) return;
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
        <Button variant="outline" on:click={() => (hideAddItem = !hideAddItem)}>
          <Plus class="mr-2" />
          Add Item
        </Button>
      </div>
    </div>
  </div>
</div>
