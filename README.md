# Banco de posts

Este es una aplicacion web FullStack desarrollada en TypeScript que almacena y opera con una entidad **Post**.
La APi del backend contiene las operaciones basicas CRUD para tratar la entidad, estas operaciones son:

- Create
- Read
- Update
- Delete

Nustra aplicacion tiene un interfaz web donde se puede manejar las diferentes operaciones para tratar un Post, generando una experiencia intuitiva para poder interactuar con nuestra aplicacion.
El proyecto esta separa por dos carpetas

1. backend: como su nombre lo indica alli se aloja la logica de nuestro servidor
2. client: carpeta que almacena todo lo relacionado con el frontend

_Nota_: en cada carpeta hay un archivo `.env.example` donde hay un ejemplo de las variables de entorno utilizadas para cada una. Copie las variables de entorno en un arcivo `.env` y agregele los valores a cada uno.

## Backend

Esta desarrollada principalmente con node.js, express y mongoDB. Las instrucciones para ejecutar el servidor de manera local son las siguientes

```
cd backend
npm instal
npm run dev
```

De esta forma iniciara el servidor de manera local `localhost:3000` o puede interactuar con el con la siguiente ruta [https://backend-mern-kaxt.onrender.com](https://backend-mern-kaxt.onrender.com). La informacion relacionada a los endpoints esta en la siguiente ruta: `RUTA_RAIZ/api/docs` => [Documentacion de la API](https://backend-mern-kaxt.onrender.com/api/docs)

El esquema de la respuesta que retorna los endpoints es la siguiente:

```JSON
 {
  "succes": boolean,
  "status": int,
  "message": string,
  "Post": Array<Post>
 }
```

- succes: boleano que representa si la operacion fue o no exitosa.
- status: codigo de la respuesta.
- message: mensaje que describe lo ocurrido con la respuesta.
- Post: arreglo de posts.

_Nota:_ la base de datos esta almacena en Mongo Atlas, tanto en desarrolo como en produccion y hay un archivo .env.example donde hay un ejemplo de las variables de entorno utilizadas.

## Frontend

Desarrollada con vite.js para generar la aplicacion con React y agregandole estilos a la pagina con tailwind css. El entorno visual de la aplicacion genera todo el ambiente respectivo para interactuar con los diferentes endpoints de la API. Las instrucciones para ejecutar la aplicacion con vite.js de manera local son las siguientes:

```
cd client
npm instal
npm run dev
```

De igual forma puede ver la aplicacion sin descargar el repositorio, esta esta alojada en la siguiente ruta: [https://backend-mern-kaxt.onrender.com](https://backend-mern-kaxt.onrender.com)

La pagina consiste en la ruta inicial "/" la lista de los posts almacenados donde cada uno tiene un boton para poder modificarlo o eliminarlo, tambien hay un input donde se puede buscar algun post o los posts que generen coincidencias con la clave de busqueda. Hay un formulario para crear nuevos los post.
