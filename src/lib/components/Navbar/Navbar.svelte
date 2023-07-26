<script>
	import { toggle } from '../../store';
	import { NavButton, NavbarMenu } from '../.';

	const sidebarActive = () => toggle.sidebar();
</script>

<nav
	class="sb-topnav navbar navbar-expand navbar-dark bg-dark"
	id="barra-titulo"
>
	<!-- Barra de Titulo-->
	<a class="navbar-brand ps-3" id="wps" href="/">Whatsapp/Technojet </a>
	<button
		class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
		on:click={sidebarActive}
		id="sidebarToggle"
	>
		<i class="bi bi-list" style="z-index:3" />
	</button>

	<NavButton
		classes="d-none d-md-inline-block form-inline"
		id="darking"
		onClick={() => console.log('Clicked')}
	>
		<i id="dark" class="bi bi-brightness-low" />
	</NavButton>
	<NavButton id="notificacion">
		<i class="bi bi-bell" id="notificacion" />
	</NavButton>
	<NavButton id="mensaje">
		<i class="bi bi-chat-left-text" id="mensaje" />
	</NavButton>

	<NavbarMenu />
</nav>
