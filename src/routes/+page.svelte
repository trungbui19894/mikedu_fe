<script lang="ts">
	import { isSignIn } from '$lib/stores/session';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!$isSignIn) {
			goto('/auth/sign-in')
		} else {
			goto('/')
		}
	})
</script>