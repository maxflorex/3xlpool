import { Router } from 'express'
import { deleteQ, getQ, getQs, saveQ, updateQ } from '../controllers/questions.js'

// INIT ROUTER
const router = Router()


/**
 * @swagger
 * components:
 *  schemas:
 *      Questions:
 *          type: object
 *          required:
 *              - title
 *              - reaction
 *          properties:
 *              id: 
 *                  type: string
 *                  description: The auto-generated id of the question
 *              title:
 *                  type: string
 *                  description: The question description
 *              reaction:
 *                  type: string
 *                  description: The reaction to the question
 *          example:
 *              id: d568c_678
 *              title: What is this?
 *              reaction: Nelson
 */


// ? GET ALL QUESTIONS

/**
 * @swagger
 * paths:
 *  /questions:
 *      get:
 *          summary: Get all questions
 *          tags: [Questions]
 */
router.get('/questions', getQs)


// ? GET SINGLE QUESTIONS

/**
 * @swagger
 * paths:
 * /questions/{id}:
 * get:
 *   summary: Get single questions
 *   tags: [Questions]
 */
router.get('/questions/:id', getQ)


// ? SAVE QUESTION

/**
 * @swagger
 * paths:
 * /questions:
 * post:
 *   summary: save a new question
 *   tags: [Questions]
 */
router.post('/questions/:id', saveQ)


// ? DELETE QUESTION

/**
 * @swagger
 * paths:
 * /questions/{id}:
 * delete:
 *   summary: delete a question
 *   tags: [Questions]
 */
router.delete('/questions/:id', deleteQ)


// ? UPDATE QUESTION

/**
 * @swagger
 * paths:
 * /questions/{id}:
 * put:
 *   summary: update a question
 *   tags: [Questions]
 */
router.put('/questions/:id', updateQ)

export default router