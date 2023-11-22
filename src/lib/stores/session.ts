import { writable } from 'svelte/store';
type User = {
    userName: string;
    avatar: string;
}
export const isSignIn = writable<Boolean>(false);
export const user = writable<User | null>(null);
