# TempAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Despliegue en VPS (Hostinger)

Este proyecto está preparado para ser desplegado en un servidor VPS usando Docker. A continuación, se detallan las instrucciones para resolver incompatibilidades de Easypanel o usar un despliegue directo con Docker Compose.

### Limpieza de Servicios Swarm Residuales
Si Easypanel está en bucle o el VPS tiene servicios huérfanos de Docker Swarm, ejecute en la terminal de su VPS:
```bash
# Forzar salida del modo Swarm para limpiar servicios residuales
docker swarm leave --force

# Limpiar contenedores y volúmenes residuales de Easypanel
docker rm -f easypanel
```

### Opción A: Reinstalación de Easypanel (Downgrade de Docker)
Si prefiere seguir utilizando Easypanel, debe evitar incompatibilidades de la versión de Docker (error `TypeError: Invalid version`). Siga estos pasos para instalar Docker v27:

1. Desinstale la versión actual de Docker en su VPS:
   ```bash
   sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   sudo rm -rf /var/lib/docker
   sudo rm -rf /var/lib/containerd
   ```
2. Instale la versión estable compatible de Docker Engine 27.5:
   ```bash
   sudo apt-get update
   sudo apt-get install -y ca-certificates curl gnupg
   sudo install -m 0755 -d /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg

   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
     $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

   sudo apt-get update
   sudo apt-get install -y docker-ce=5:27.5.1-1~ubuntu.22.04~jammy docker-ce-cli=5:27.5.1-1~ubuntu.22.04~jammy containerd.io docker-buildx-plugin docker-compose-plugin
   ```
3. Instale Easypanel:
   ```bash
   curl -sSL https://get.easypanel.io | sh
   ```

### Opción B: Despliegue Directo con Docker Compose (Recomendado si Easypanel falla)
Si prefiere un despliegue directo más rápido y sin dependencias de Easypanel, puede levantar la aplicación usando Docker Compose:

1. Clone el repositorio en su VPS o copie los archivos (`Dockerfile`, `docker-compose.yml`, `nginx.conf` y el código del proyecto).
2. Ejecute el siguiente comando para compilar y levantar el contenedor en segundo plano:
   ```bash
   docker compose up -d --build
   ```
3. La aplicación estará expuesta en el puerto `80` del VPS de forma inmediata.
