<script>
	import { Navbar, Sidebar } from './lib/components';
	import { toggle } from './lib/store';
</script>

<div class="sb-nav-fixed" class:sb-sidenav-toggle={$toggle.sidebar}>
	<Navbar />
	<Sidebar />
</div>
