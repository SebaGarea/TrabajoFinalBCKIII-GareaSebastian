import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

/**
 * @swagger
 * /api/sessions/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - first_name
 *               - last_name
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *               first_name:
 *                 type: string
 *                 description: Nombre del usuario
 *               last_name:
 *                 type: string
 *                 description: Apellido del usuario
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Datos incompletos o usuario ya existente
 */
router.post('/register',sessionsController.register);

/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: Inicia sesión de usuario
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Usuario autenticado correctamente
 *       400:
 *         description: Datos incompletos
 *       401:
 *         description: Credenciales incorrectas
 */
router.post('/login',sessionsController.login);

/**
 * @swagger
 * /api/sessions/current:
 *   get:
 *     summary: Obtiene la sesión actual del usuario autenticado
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Sesión actual obtenida correctamente
 *       401:
 *         description: Usuario no autenticado
 */
router.get('/current',sessionsController.current);

/**
 * @swagger
 * /api/sessions/unprotectedLogin:
 *   get:
 *     summary: Endpoint de login sin protección (solo para pruebas)
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Login sin protección exitoso
 */
router.get('/unprotectedLogin',sessionsController.unprotectedLogin);

/**
 * @swagger
 * /api/sessions/unprotectedCurrent:
 *   get:
 *     summary: Obtiene la sesión actual sin protección (solo para pruebas)
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Sesión sin protección obtenida correctamente
 */
router.get('/unprotectedCurrent',sessionsController.unprotectedCurrent);

/**
 * @swagger
 * /api/sessions/logout:
 *   get:
 *     summary: Cierra la sesión del usuario
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Sesión cerrada correctamente
 */
router.get('/logout',sessionsController.logout);

export default router;