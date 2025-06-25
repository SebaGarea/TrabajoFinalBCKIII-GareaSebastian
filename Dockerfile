# Usa una imagen oficial de Node.js como base
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la app
COPY . .

# Expone el puerto (usa el mismo que tu app, por defecto 8080)
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "start"]