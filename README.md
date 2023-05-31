# API de Usuarios - Backend

La API de Usuarios es un proyecto de backend desarrollado en Node.js que proporciona una interfaz para administrar y gestionar usuarios utilizando una base de datos MongoDB. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en la colección de usuarios.

# Características
- Registro de usuarios: Los usuarios pueden registrarse proporcionando su nombre de usuario, correo electrónico y contraseña.
- Inicio de sesión: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña para acceder a la API y realizar operaciones.
- Obtención de información del usuario: La API permite obtener la información del usuario, como su nombre de usuario y correo electrónico.
- Actualización de información del usuario: Los usuarios pueden actualizar su información, incluyendo su nombre de usuario y correo electrónico.
- Eliminación de usuarios: Los usuarios pueden eliminar su cuenta de usuario de la API.

# Requisitos
- Node.js: Es necesario tener instalado Node.js en el sistema.
- MongoDB: Se requiere una instancia de MongoDB para almacenar los datos de los usuarios.

#Instalación
- Clonar el repositorio: git clone https://github.com/tu-usuario/api-usuarios.git
- Instalar las dependencias: npm install
- Configurar la conexión a la base de datos MongoDB en el archivo config.js.
- Iniciar el servidor: npm start

# Uso
La API de Usuarios proporciona los siguientes endpoints:

- /usuarios (Método GET): Obtiene todos los usuarios registrados.
- /usuarios (Método POST): Registra un nuevo usuario.
- /usuarios/:id (Método GET): Obtiene los detalles de un usuario específico.
- /usuarios/:id (Método PUT): Actualiza la información de un usuario específico.
- /usuarios/:id (Método DELETE): Elimina un usuario específico.

Para acceder a los endpoints que requieren autenticación, es necesario incluir un token de autenticación válido en la cabecera de la solicitud.
