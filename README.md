# AdoptMe - Backend API

Proyecto backend para gestión de usuarios, mascotas y adopciones.

## Requisitos

- Node.js 20+
- Docker y Docker Compose (opcional, recomendado para pruebas rápidas)
- MongoDB (si no usas Docker Compose)

## Instalación local


1. Instala las dependencias:
   
   npm install
   
2. Inicia el servidor:
   
   npm start
   

3. Accede a la documentación Swagger en:  
   (http://localhost:8080/apidocs)

---

## Uso con Docker Compose

1. Asegúrate de tener Docker y Docker Compose instalados.
2. En la raíz del proyecto, ejecuta:
  
   docker-compose up --build
  
3. La API estará disponible en (http://localhost:8080)  
   Swagger UI: (http://localhost:8080/apidocs)

---

## Probar la API

Puedes probar los endpoints desde Swagger UI o usando `curl`:


curl http://localhost:8080/api/pets


---

## Estructura del proyecto

- `src/routes/` — Rutas de la API
- `src/controllers/` — Lógica de negocio
- `src/utils/` — Utilidades y helpers
- `Dockerfile` — Configuración para Docker
- `docker-compose.yml` — Levanta la app y MongoDB juntos

---

### Imagen en DockerHub

[https://hub.docker.com/r/sebagarea/adoptme-backend]

[docker run -p 8080:8080 sebagarea/adoptme-backend:latest]

---

## Autor

<<<<<<< HEAD
Sebastián Garea
=======
Sebastián Garea
>>>>>>> 326d010 (comitieo general del proyecto final)
