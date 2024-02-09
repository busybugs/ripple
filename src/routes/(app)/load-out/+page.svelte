<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Badge } from "$lib/components/ui/badge";
  import { categories, items } from "$lib/store";
  import Combobox from "$lib/components/Combobox.svelte";
  import { Plus, Check, ArrowRight } from "lucide-svelte";
  import { comboboxStore } from "$lib/components/Combobox";

  let hideAddCategory = true;
  let hideAddItem = true;

  let categoriesForCombobox = $categories.map((category) => ({
    value: category,
    label: category,
  }));

  categories.subscribe(() => {
    categoriesForCombobox = $categories.map((category) => ({
      value: category,
      label: category,
    }));
  });

  let addCategoryName: string = "";
  let selectCategoryName: string = "";

  let itemName: string = "";
  let itemProperties: App.Store.Properties = {};
  let item = {} as App.Store.Item;
  let itemCategoryContent: string = "";
</script>

<div class="space-y-6">
  <div class="space-y-0.5">
    <h2 class="text-2xl font-bold tracking-tight">Load Out</h2>

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
          bind:value={addCategoryName}
          placeholder="Category name..."
          class="mb-3 lg:max-w-md"
        />

        <div class="grid grid-cols-3 space-x-3">
          <Button
            type="submit"
            variant="outline"
            on:click={() => {
              if ($categories.includes(addCategoryName)) {
                addCategoryName = "";
                return;
              }
              $categories = [...$categories, addCategoryName];
              addCategoryName = "";
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
        </div>
      </form>

      <div class:hidden={!hideAddCategory}>
        <Button
          variant="outline"
          class="mt-5"
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
        {#each [...$items] as [name, item], i}
          <li class="mb-3 flex space-x-2">
            <Badge class="mr-2">{i + 1}.</Badge>
            {name}
            <ArrowRight class="ml-2 mt-[0.22rem] h-5 w-5" />
            <span class="mr-2">{item.category}</span>
          </li>
        {/each}
      </ul>

      <form class="pb-5 pt-5" class:hidden={hideAddItem}>
        <Input
          bind:value={itemName}
          placeholder="Item name..."
          class="mb-3 lg:max-w-md"
        />

        <div class="grid grid-cols-3 space-x-3">
          <Combobox
            name="category"
            items={categoriesForCombobox}
            label="Select category..."
            labelNotFound="Category not found."
          />

          <Button
            type="submit"
            variant="outline"
            on:click={() => {
              if ($items.has(itemName)) {
                itemName = "";
                return;
              }

              $items.set(itemName, {
                category: $comboboxStore.category,
                properties: itemProperties,
              });

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
        </div>
      </form>

      <div class:hidden={!hideAddItem}>
        <Button
          variant="outline"
          class="mt-5"
          on:click={() => (hideAddItem = !hideAddItem)}
        >
          <Plus class="mr-2" />
          Add Item
        </Button>
      </div>
    </div>
  </div>
</div>
