<script lang="ts">
	import { isSignIn, user } from "$lib/stores/session";

    isSignIn.set(false);
    user.set(null);
</script>