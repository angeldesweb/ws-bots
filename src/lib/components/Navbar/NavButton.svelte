<script>
	export let onClick = null;
	export let id;
	export let classes = '';
</script>

<ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
	<li class="nav-item dropdown {classes}">
		<a
			on:click|preventDefault={onClick}
			href={null}
			{id}
			style="padding-left: var(--bs-navbar-nav-link-padding-x); padding-right: var(--bs-navbar-nav-link-padding-x);"
		>
			<slot />
		</a>
	</li>
</ul>
