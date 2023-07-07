import express from 'express'
import { getMakes, newMake } from '../controllers/makesController.js'

const router = express.Router()

router.get('/makes', getMakes)
router.post('/makes', newMake)

export default router
