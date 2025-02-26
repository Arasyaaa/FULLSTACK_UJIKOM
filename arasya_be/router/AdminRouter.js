import express from 'express'
import { deleteAdmin, getAllAdmin, getAllAdminById, loginAdmin,  registerAdmin, updateAdmin } from '../controller/AdminController.js'
import { verifyToken } from '../middleware/verifyToken.js'

const RouterAdmin = express.Router()

RouterAdmin.get('/',verifyToken,getAllAdmin)
RouterAdmin.get('/find/:id',verifyToken,getAllAdminById)

RouterAdmin.post('/register',registerAdmin)
RouterAdmin.post('/login',loginAdmin)

RouterAdmin.put('/update/:id',updateAdmin)

RouterAdmin.delete('/delete/:id',deleteAdmin)

export default RouterAdmin