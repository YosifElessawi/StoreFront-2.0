import { Router, Request, Response } from 'express'
import * as handlers from '../../handlers/orders.handler'
import authMiddleware from '../../middleware/auth.middleware'

const route = Router()

route.get('/', handlers.index)

route.get('/:id', handlers.show)

route.post('/', authMiddleware, handlers.create)

route.put('/:id', authMiddleware, handlers.update)

route.delete('/:id', authMiddleware, handlers.destroy)

route.post('/:id/products', handlers.addProduct)

export default route