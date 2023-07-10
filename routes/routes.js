import express from 'express'
import {
  getMakes,
  newMake,
  repeatCheck,
} from '../controllers/makesController.js'

const router = express.Router()

router.get('/makes', getMakes)
router.post('/makes', repeatCheck, newMake)

export default router
