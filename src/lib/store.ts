import { writable } from "svelte/store";

export type Item = {
  category: string;
  properties: Properties;
};

export type Properties = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [property: string]: any;
};

export const categories = writable([] as string[]);
export const items = writable(new Map<string, Item>());
export const settings = writable({ minimap: true });
