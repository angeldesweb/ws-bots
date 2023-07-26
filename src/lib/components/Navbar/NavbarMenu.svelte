<script>
	let show = false;
</script>

<ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
	<li class="nav-item dropdown">
		<a
			class="nav-link dropdown-toggle"
			class:show
			on:click|preventDefault={() => (show = !show)}
			id="navbarDropdown"
			href={null}
			role="button"
			data-bs-toggle="dropdown"
			aria-expanded={show ? true : false}
		>
			<i class="bi bi-person-circle" />
		</a>
		<ul
			class="dropdown-menu dropdown-menu-end"
			id="cuenta2"
			class:show
			aria-labelledby="navbarDropdown"
		>
			<li>
				<a class="dropdown-item" href={null}>
					Nombre de la persona..
				</a>
			</li>
			<li>
				<a
					class="dropdown-item"
					on:click={() => console.log('Clicked')}
					href={null}
				>
					Configuracion de cuenta
				</a>
			</li>
			<li>
				<hr class="dropdown-divider" />
			</li>
			<div>
				<a class="button-salida" href={null}>
					<i class="bi bi-box-arrow-right" />
					Cerrar sección
				</a>
			</div>
		</ul>
	</li>
</ul>
