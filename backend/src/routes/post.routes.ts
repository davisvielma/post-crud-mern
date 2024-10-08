import { Router } from "express";

import { postsConstroller } from "./../controllers";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: Titulo del post
 *        description:
 *          type: string
 *          description: Descripcion del post
 *      required:
 *        -title
 *        -description
 *      example:
 *        title: Viaje por los andes
 *        description: Este mes he dedicado mi tiempo a recorrer los andes Venezolanos
 */

/**
 * @swagger
 * /api/posts:
 *  post:
 *    summary: crea un nuevo Post
 *    tags: [Post]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/Post'
 *    responses:
 *      201:
 *        description: Post creado exitosamente
 *      400:
 *        description: Campos del body incompletos
 *      409:
 *        description: Post no pudo ser creado
 *      500:
 *        description: Error del servidor
 *
 */
router.post("/", postsConstroller.createPost);

/**
 * @swagger
 * /api/posts:
 *  get:
 *    summary: Retorna todos los post almacenados en la BD
 *    tags: [Post]
 *    responses:
 *      200:
 *        description: Peticion exitosa
 *      500:
 *        description: Error del servidor
 *
 */
router.get("/", postsConstroller.getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *  get:
 *    summary: Retorna un post almacenado en la BD
 *    tags: [Post]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del post
 *    responses:
 *      200:
 *        description: Peticion exitosa
 *      400:
 *        description: ID invalido
 *      404:
 *        description: Post no existe
 *      500:
 *        description: Error del servidor
 *
 */
router.get("/:id", postsConstroller.getOnePost);

/**
 * @swagger
 * /api/posts/{id}:
 *  put:
 *    summary: Actualiza un post almacenado en la BD
 *    tags: [Post]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/Post'
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del post
 *    responses:
 *      200:
 *        description: Peticion exitosa
 *      400:
 *        description: ID invalido o campos del body vacios
 *      404:
 *        description: Post no existe
 *      409:
 *        description: Post no pudo ser actualizado
 *      500:
 *        description: Error del servidor
 *
 */
router.put("/:id", postsConstroller.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *  delete:
 *    summary: Elimina un post almacenado en la BD
 *    tags: [Post]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del post
 *    responses:
 *      200:
 *        description: Peticion exitosa
 *      400:
 *        description: ID invalido
 *      404:
 *        description: Post no existe
 *      409:
 *        description: Post no pudo ser eliminado
 *      500:
 *        description: Error del servidor
 *
 */
router.delete("/:id", postsConstroller.deletePost);

export default router;
