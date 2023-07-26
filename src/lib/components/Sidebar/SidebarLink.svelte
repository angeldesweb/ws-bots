<script>
	export let id = '';
	export let target = '';
	export let onClick = null;
	export let label = '';
</script>

<a class="nav-link" on:click={onClick} {id} data-target={target} href={null}>
	<div class="sb-nav-link-icon">
		<slot />
	</div>
	{label}
</a>
