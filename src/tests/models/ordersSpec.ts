/*import { Order, OrderStore } from '../../models/order'
import Client from '../../database'
const store = new OrderStore()

//Test logic of methods
describe('Test CRUD methods',() => {
    describe('Methods should exist test',() => {
        it('Should have index method',() => {
            expect(store.index).toBeDefined()
        })
        it('Should have show method',() => {
            expect(store.show).toBeDefined()
        })
        it('Should have create method',() => {
            expect(store.create).toBeDefined()
        })
        it('Should have update method',() => {
            expect(store.edit).toBeDefined()
        })
        it('Should have delete method',() => {
            expect(store.delete).toBeDefined()
        })
    })
    describe('Methods logic test',() => {
        const order : Order = {
            user_id: BigInt(1),
            status: 'test'
        } 
        beforeAll(async () => {
            const newOrder = await store.create(order)
            order.id = newOrder.id
        })
        afterAll(async () => {
            const conn = await Client.connect();
            const sql = 'DELETE FROM Orders'
            await conn.query(sql)
            conn.release()
        })

        it('Should create new Order', async () => {
            const newOrder : Order = await store.create({
                user_id: BigInt(2),
                status: 'test2'
            })
            expect(newOrder).toEqual({
                id: newOrder.id as string,
                user_id: BigInt(2),
                status: 'test2',
            } as Order)
        })
        it('Should return all Orders',async () => {
            const orders = await store.index(order.id as string)
            expect(orders.length).toBe(2)
        })
        it('Should return one Order with specified ID',async () => {
            const specOrder = await store.show(order.id as string)
            expect(specOrder.id).toBe(order.id)
            expect(specOrder.user_id).toBe(order.user_id)
            expect(specOrder.status).toBe(order.status)
            
        })
        it('Should update Order with specified ID',async () => {
            const editOrder = await store.edit(order.id as string,{
                user_id: BigInt(3),
                status: 'editstatus'
            })
            expect(editOrder.id).toBe(order.id)
            expect(editOrder.user_id).toBe(BigInt(3))
            expect(editOrder.status).toBe('editstatus')
            
        })
        it('Should delete Order with specified ID',async () => {
            const delOrder = await store.delete(order.id as string)
            expect(delOrder).toBeFalsy()
            
        })
    })
})*/
