import {Router} from "express";
import {getcarrito, getcarrito_ind, updatecarrito,} from "../controllers/inventario.controller.js";


const router = Router()

router.get('/carrito', getcarrito)
router.get('/carrito/:id', getcarrito_ind)
router.patch('/carrito/:id', updatecarrito)

export default router