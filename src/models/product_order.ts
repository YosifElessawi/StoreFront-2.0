import Client from '../database'

export type Product_Order = {
  id: string
  product_id: string
  order_id: string
  quantity: number
}

export class Product_OrderStore {
  async index(): Promise<Product_Order[]> {
    try {
      const conn = await Client.connect()
      const sql = 'SELECT * FROM Products_Orders'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`Could not get Products_Orders. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Product_Order> {
    try {
      const sql = 'SELECT * FROM Products_Orders WHERE id=($1)'
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Could not find Product_Order ${id}. Error: ${err}`)
    }
  }

  async create(po: Product_Order): Promise<Product_Order> {
    try {
      const sql =
        'INSERT INTO Products_Orders (product_id, order_id, quantity) VALUES($1, $2) RETURNING *'
      const conn = await Client.connect()

      const result = await conn.query(sql, [po.product_id, po.order_id, po.quantity])

      const product_order = result.rows[0]

      conn.release()

      return product_order
    } catch (err) {
      throw new Error(`Could not add new Product_Order; Error: ${err}`)
    }
  }

  async edit(id: String, po: Product_Order): Promise<Product_Order> {
    try {
      const sql =
        'UPDATE products_orders SET product_id=$1, order_id=$2, quantity=$3 WHERE id=$4  RETURNING *'
      const conn = await Client.connect()

      const result = await conn.query(sql, [po.product_id, po.order_id, po.quantity, id])

      const product_order = result.rows[0]

      conn.release()

      return product_order
    } catch (err) {
      throw new Error(`Could not update Product_Order ${id}; Error: ${err}`)
    }
  }

  async delete(id: string): Promise<Product_Order> {
    try {
      const sql = 'DELETE FROM Product_Orders WHERE id=($1)'
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      const product_order = result.rows[0]

      conn.release()

      return product_order
    } catch (err) {
      throw new Error(`Could not delete Product_Order ${id}. Error: ${err}`)
    }
  }
}
