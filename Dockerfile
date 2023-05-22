# Utilizar la imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./
COPY . .

# Instalar las dependencias de la aplicación
RUN npm install

# Exponer el puerto en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
