<script>
	import { SidebarLink } from '../.';
	import { Whatsapp } from '../../views';

	let route = 'whatsapp';

	let views = {
		whatsapp: Whatsapp,
	};

	const handleLink = (e) => (route = e.target.id.split('-')[0]);
</script>

<div id="layoutSidenav">
	<div id="layoutSidenav_nav">
		<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
			<div class="sb-sidenav-menu">
				<div class="nav">
					<!-- PRINCIPAL -->
					<div class="sb-sidenav-menu-heading">Principal</div>
					<SidebarLink
						label="Whatsapp"
						onClick={handleLink}
						id="whatsapp-One"
						target="#whatsapp"
					>
						<i class="bi bi-whatsapp" />
					</SidebarLink>
					<SidebarLink
						label="Conexiones"
						onClick={handleLink}
						id="conexiones-One"
						target="#conexiones"
					>
						<i class="bi bi-arrow-left-right" />
					</SidebarLink>
					<SidebarLink
						label="Contactos"
						onClick={handleLink}
						id="contactos-One"
						target="#contactos"
					>
						<i class="bi bi-person-rolodex" />
					</SidebarLink>
					<SidebarLink
						label="Documentos"
						onClick={handleLink}
						id="documentos-One"
						target="#documentos"
					>
						<i class="bi bi-file-earmark-text-fill" />
					</SidebarLink>
					<SidebarLink
						label="Respuestas Rápidas"
						onClick={handleLink}
						id="respuesta-One"
						target="#respuesta"
					>
						<i class="bi bi-card-text" />
					</SidebarLink>
					<!-- <a class="nav-link" on:click={()=> active = 5} id="soporte-One" href="#a">
                        <div class="sb-nav-link-icon"><i class="bi bi-person-fill-gear"></i></div>
                        Soporte
                    </a> -->
					<!-- ADMINISTRACION -->
					<div class="sb-sidenav-menu-heading">Administración</div>
					<SidebarLink
						label="Equipo"
						onClick={handleLink}
						id="equipo-One"
						target="#equipo"
					>
						<i class="bi bi-people-fill" />
					</SidebarLink>
					<SidebarLink
						label="Chatbots"
						onClick={handleLink}
						id="chatbots-One"
						target="#chatbots"
					>
						<i class="bi bi-robot" />
					</SidebarLink>
					<SidebarLink
						label="Campaña"
						onClick={handleLink}
						id="campaña-One"
						target="#campaña"
					>
						<i class="bi bi-megaphone-fill" />
					</SidebarLink>
					<!-- <a class="nav-link"  data-target="#suscripcion" href="#">
                        <div class="sb-nav-link-icon"><i class="bi bi-person-fill-gear"></i></div>
                        Suscripción
                    </a> -->
					<SidebarLink
						label="Informes"
						onClick={handleLink}
						id="informes-One"
						target="#informes"
					>
						<i class="bi bi-clipboard-data" />
					</SidebarLink>
					<SidebarLink
						label="Configuración"
						onClick={handleLink}
						id="configuracion-One"
						target="#configuracion"
					>
						<i class="bi bi-person-fill-gear" />
					</SidebarLink>
					<a class="footer-vacio" href={null}>
						<div class="sb-nav-link-icon" />
					</a>
				</div>
			</div>
		</nav>
	</div>
	<div id="laoyoutSidenav_content">
		<svelte:component this={views[route]} />
	</div>
</div>
