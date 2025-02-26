import express from 'express'
import { createPembeli, deletePembeli, getAllPembeli, getAllPembeliById, loginPembeli, updatePembeli } from '../controller/PembeliController.js'
const RouterPembeli=express.Router()

RouterPembeli.get('/',getAllPembeli)
RouterPembeli.get('/find/:id',getAllPembeliById)
RouterPembeli.post('/login',loginPembeli)
RouterPembeli.post('/create',createPembeli)
RouterPembeli.put('/update/:id',updatePembeli)
RouterPembeli.delete('/delete/:id',deletePembeli)

export default RouterPembeli