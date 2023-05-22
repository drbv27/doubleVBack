# Título de tu aplicación

Breve descripción de tu aplicación.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js (versión 16.18.0)
- Docker

## Configuración

Sigue estos pasos para ejecutar la aplicación en tu PC:

1. Clona este repositorio o descarga los archivos.
2. Abre una terminal y navega hasta el directorio raíz del proyecto.

## Pasos

1. Asegúrate de tener Docker instalado en tu PC.
2. Ejecuta el siguiente comando para construir la imagen de Docker:


Asegúrate de reemplazar `nombre_imagen` por el nombre que desees darle a tu imagen Docker.

3. Una vez que se haya construido la imagen, ejecuta un contenedor utilizando el siguiente comando:

docker run -p 3000:3000 nombre_imagen


Esto mapeará el puerto 3000 del contenedor al puerto 3000 de tu PC. Puedes cambiar el primer número para mapearlo a un puerto diferente si lo deseas.

4. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

¡Listo! Ahora puedes ejecutar la aplicación en tu PC utilizando Docker.

