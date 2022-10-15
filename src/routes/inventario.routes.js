import {Router} from "express";
import {getInventario, getInventario_ind, createInventario, updateInventario, deleteInventario} from "../controllers/inventario.controller.js";


const router = Router()

router.get('/inventory', getInventario)
router.get('/inventory/:id', getInventario_ind)
router.post('/inventory', createInventario)
router.patch('/inventory/:id', updateInventario)
router.delete('/inventory/:id', deleteInventario)

export default router