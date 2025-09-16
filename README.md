# AdoptMe - Backend API

> API RESTful para la gestión de usuarios, mascotas y adopciones. Proyecto profesionalizado con arquitectura modular, buenas prácticas y despliegue listo para producción.

---

## Tabla de Contenidos
- [Requisitos](#requisitos)
- [Instalación Local](#instalación-local)
- [Despliegue con Docker](#despliegue-con-docker)
- [Uso de la API](#uso-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Buenas Prácticas y Patrones](#buenas-prácticas-y-patrones)
- [Testing](#testing)
- [Autor](#autor)

---

## Requisitos

- Node.js 20+
- Docker y Docker Compose (opcional, recomendado)
- MongoDB (si no usas Docker Compose)

## Instalación Local

```bash
npm install
npm start
```
La API estará disponible en [http://localhost:8080](http://localhost:8080)
Accede a la documentación Swagger en [http://localhost:8080/apidocs](http://localhost:8080/apidocs)

## Despliegue con Docker

```bash
docker-compose up --build
```
Esto levanta la app y MongoDB juntos. También puedes usar la imagen oficial:

```bash
docker run -p 8080:8080 sebagarea/adoptme-backend:latest
```
Ver en DockerHub: [sebagarea/adoptme-backend](https://hub.docker.com/r/sebagarea/adoptme-backend)

## Uso de la API

Puedes probar los endpoints desde Swagger UI o usando `curl`:

```bash
curl http://localhost:8080/api/pets
```

## Estructura del Proyecto

- `src/app.js` — Configuración principal y carga de rutas
- `src/routes/` — Definición de endpoints REST
- `src/controllers/` — Lógica de negocio
- `src/services/` y `src/repository/` — Servicios y repositorios (patrón Repository)
- `src/dao/` — Acceso a datos y modelos Mongoose
- `src/dto/` — Data Transfer Objects
- `src/utils/` — Utilidades (ej: uploader de archivos)
- `public/` — Archivos estáticos y uploads
- `test/` — Pruebas unitarias e integración
- `Dockerfile` y `docker-compose.yml` — Contenedores y orquestación

## Buenas Prácticas y Patrones

- Arquitectura MVC + Repository Pattern
- Separación estricta entre controladores, servicios/repositorios y DAOs
- Uso de DTOs para exponer datos
- Documentación automática de endpoints con Swagger (JSDoc en rutas)
- Carga de archivos con Multer y helpers propios
- Variables de entorno en `.env` (`MONGO_URL`, `PORT`)

## Testing

- Ejecuta `npm test` para correr pruebas unitarias y de integración (Mocha, Chai, Supertest)
- Los tests están en la carpeta `test/`

---

## Autor

Sebastián Garea
