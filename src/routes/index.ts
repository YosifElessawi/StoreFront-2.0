import { Router, Request, Response } from 'express'
import usersRoute from './api/users.routes'
import ProductsRoute from './api/products.routes'
import OrdersRoute from './api/orders.routes'
import Products_OrdersRoute from './api/products_orders.routes'
const routes = Router()

routes.get('/', (_req: Request, res: Response) => {
  res.send('Main api route')
})
routes.use('/users', usersRoute)

routes.use('/products', ProductsRoute)

routes.use('/orders', OrdersRoute)

routes.use('/products_orders', Products_OrdersRoute)

export default routes
