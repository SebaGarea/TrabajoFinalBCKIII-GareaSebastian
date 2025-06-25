import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtiene todas las mascotas
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida correctamente
 */
router.get('/',petsController.getAllPets);

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crea una nueva mascota
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specie
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre de la mascota
 *               specie:
 *                 type: string
 *                 description: Especie de la mascota
 *     responses:
 *       201:
 *         description: Mascota creada correctamente
 *       400:
 *         description: Datos incompletos
 */
router.post('/',petsController.createPet);

/**
 * @swagger
 * /api/pets/withimage:
 *   post:
 *     summary: Crea una mascota con imagen
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Imagen de la mascota
 *     responses:
 *       201:
 *         description: Mascota creada con imagen correctamente
 *       400:
 *         description: Datos incompletos
 */
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);

/**
 * @swagger
 * /api/pets/{pid}:
 *   put:
 *     summary: Actualiza una mascota por ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Mascota actualizada correctamente
 *       404:
 *         description: Mascota no encontrada
 */
router.put('/:pid',petsController.updatePet);

/**
 * @swagger
 * /api/pets/{pid}:
 *   delete:
 *     summary: Elimina una mascota por ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota
 *     responses:
 *       200:
 *         description: Mascota eliminada correctamente
 *       404:
 *         description: Mascota no encontrada
 */
router.delete('/:pid',petsController.deletePet);

export default router;