import express from 'express'
import { getAllMenu,getAllMenuById,createMenu,updateMenu,deleteMenu } from '../controller/MenuController.js'
const RouterMenu=express.Router()

RouterMenu.get('/',getAllMenu)
RouterMenu.get('/find/:id',getAllMenuById)
RouterMenu.post('/create',createMenu)
RouterMenu.put('/update/:id',updateMenu)
RouterMenu.delete('/delete/:id',deleteMenu)

export default RouterMenu