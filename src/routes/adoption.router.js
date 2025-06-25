import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';

/**
 * @swagger
 * tags:
 *   name: Adoptions
 *   description: API endpoints for managing adoptions
 */

const router = Router();

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtiene todas las adopciones
 *     tags: [Adoptions]
 *     responses:
 *       200:
 *         description: Lista de adopciones obtenida correctamente
 */
router.get('/',adoptionsController.getAllAdoptions);

/**
 * @swagger
 * /api/adoptions/{aid}:
 *   get:
 *     summary: Obtiene una adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - in: path
 *         name: aid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la adopción
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *       404:
 *         description: Adopción no encontrada
 */
router.get('/:aid',adoptionsController.getAdoption);

/**
 * @swagger
 * /api/adoptions/{uid}/{pid}:
 *   post:
 *     summary: Procesa una adopción
 *     tags: [Adoptions]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota
 *     responses:
 *       201:
 *         description: Adopción procesada correctamente
 *       400:
 *         description: Datos incorrectos o incompletos
 */
router.post('/:uid/:pid',adoptionsController.createAdoption);

export default router;