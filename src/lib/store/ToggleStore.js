import { writable } from 'svelte/store';

let init = {
    sidebar: false,
}
const ToggleStore = () => {
    const { subscribe , update } = writable(init);

    return {
        subscribe,
        sidebar: () => update(store => (store = {...store, sidebar: !store.sidebar}))
    }
}

export const toggle = ToggleStore();