import { writable } from "svelte/store";

export const categories = writable([] as string[]);
export const items = writable(new Map<string, string>);
