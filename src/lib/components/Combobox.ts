import { writable } from "svelte/store";

type ComboboxStore = {
  [key: string]: string;
};

export const comboboxStore = writable({} as ComboboxStore);
