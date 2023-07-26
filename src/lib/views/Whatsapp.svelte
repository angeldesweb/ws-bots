<script>
	let active;
</script>

<div class="container-fluid px-4 active" data-content id="whatsapp">
	<main>
		<div class="contenedorP">
			<div class="contenedorP-container">
				<div class="panel-1">
					<div class="card mb-4 container-one three8">
						<!-- Buttons -->
						<div class="card-header">
							<ul class="nav-tabs">
								<li
									class="nav-item"
									on:click={() => (active = 1)}
									on:keypress={() => (active = 1)}
									id="abierto"
								>
									<i class="bi bi-envelope-paper-fill two" />
									<a href="#a" class="title-active"
										>Abiertos</a
									>
								</li>
								<li
									class="nav-item"
									on:click={() => (active = 2)}
									on:keypress={() => (active = 2)}
									id="resuelto"
								>
									<i class="bi bi-check-square-fill two" />
									<a href="#a" class="title-active"
										>Resueltos</a
									>
								</li>
							</ul>
						</div>
						<!-- Search -->
						<div class="buscador">
							<div class="buscador2">
								<i class="bi bi-search" />
								<input
									type="text"
									class="inputP three"
									placeholder="Buscar"
								/>
							</div>
						</div>

						<div
							class="abiertos {active === 1 ? 'active' : ''}"
							data-content
							id="open"
						>
							<div class="abiertos-two">
								<div class="nav-tabs">
									<!-- Mis Chats-->
									<div
										class="nav-item"
										style="display: flex;"
										id="chats"
									>
										<a
											class="nav-link subtitle"
											on:click={() => (active = 2)}
											style="padding-right:7px;"
											href={null}
										>
											Mis chats
										</a>
										<a
											class="nav-link dropdown-toggle subtitle2"
											id="navbarDropdown"
											href={null}
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											>''
										</a>
										<ul
											class="dropdown-menu dropdown-menu-end"
											aria-labelledby="navbarDropdown"
										>
											<li>
												<a
													class="dropdown-item"
													href={null}
												>
													Todos los chats
												</a>
											</li>
										</ul>
									</div>
									<!-- En espera -->
									<div
										class="nav-item"
										on:click={() => (active = 3)}
										on:keypress={() => (active = 3)}
										id="espera"
									>
										<a class="nav-link subtitle" href={null}
											>En espera</a
										>
									</div>
								</div>
							</div>
							<ul class="line" />
							<!-- Mis Chats-content -->
							<div
								class="multi-select {active === 2
									? 'active'
									: ''}"
								data-content
								id="chats-content"
							>
								<div class="seccion-m">
									<ul class="nav-tabs">
										<span class="jss617" />
										<div class="">
											<i class="" />
										</div>
										<div class="multiline">
											<span class="jss609" />
											<span class="jss609" />
										</div>
									</ul>
								</div>
							</div>
							<!-- Espera-content -->
							<div
								class="espera {active === 3 ? 'active' : ''}"
								data-content
								id="espera-content"
							>
								<div class="jss100">
									<ul class="nav-tabs">
										<div class="jss105">
											<span class="jss104"
												>¡Nada acá!</span
											>
											<p class="jss103">
												No se encontraron chats con este
												término de búsqueda
											</p>
										</div>
									</ul>
								</div>
							</div>
						</div>
						<!-- Resueltos -->
						<div
							class="resueltos {active === 2 ? 'active' : ''}"
							data-content
							id="resolved"
						>
							<div class="jss100">
								<div class="jss101">
									<ul class="nav-tabs">
										<div class="jss105">
											<span class="jss104"
												>¡Nada acá!</span
											>
											<p class="jss103">
												No se encontraron chats con este
												término de búsqueda
											</p>
										</div>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="panel-2">
					<div class="card mb-4 container-two">
						<p class="jss104">
							Selecciona un chat para empezar a chatear
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
