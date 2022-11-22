import { Request, Response } from 'express'
import { Product_Order, Product_OrderStore } from '../models/product_order'

const store = new Product_OrderStore()
export const index = async (_req: Request, res: Response) => {
  const product_orders = await store.index()
  res.json(product_orders)
}

export const show = async (req: Request, res: Response) => {
  const product_order = await store.show(req.params.id)
  res.json(product_order)
}

export const create = async (req: Request, res: Response) => {
  try {
    const product_order: Product_Order = await store.create(req.body)
    res.json({
      status: 'Successful',
      data: { product_order }
    })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const product_order: Product_Order = await store.edit(req.params.id, req.body)
    res.json({
      status: 'Successful',
      data: { product_order }
    })
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

export const destroy = async (req: Request, res: Response) => {
  const deleted: Product_Order = await store.delete(req.params.id)
  res.json({
    status: 'Successful'
  })
}
