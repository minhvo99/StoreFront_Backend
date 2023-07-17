"use strict";
// import { OrderModel } from '../../models/order'
// import { Products } from '../../models/product'
// import { Users } from '../../models/users'
// const store = new OrderModel()
// const productStore = new Products()
// const userStore = new Users()
// let productId: number, userId: number
// describe('Order Model', () => {
//     beforeAll(async () => {
//         const product = await productStore.create({
//             name: 'Superman underroos',
//             price: 40.0,
//             description: 'Underwear',
//         })
//         const user = await userStore.create({
//             username: 'ssmith',
//             firstname: 'Sallie',
//             lastname: 'Test',
//             password_digest: 'password123',
//         })
//     })
//     afterAll(async () => {
//         await productStore.delete(productId)
//         await userStore.deleteUser(userId)
//     })
//     it('should create an order', async () => {
//         const result = await store.create({
//             user_id: userId,
//             status: 'new',
//             quantity: 10,
//         })
//         expect(result).toEqual({
//             id: 1,
//             product_id: productId,
//             quantity: 10,
//             user_id: userId,
//             status: 'new',
//         })
//     })
//     it('should return a list of orders', async () => {
//         const result = await store.getOrders()
//         expect(result).toEqual([
//             {
//                 id: 1,
//                 product_id: productId,
//                 quantity: 10,
//                 user_id: userId,
//                 status: 'new',
//             },
//         ])
//     })
//     it('should return the correct order', async () => {
//         const result = await store.getOrderById(1)
//         expect(result).toEqual({
//             id: 1,
//             product_id: productId,
//             quantity: 10,
//             user_id: userId,
//             status: 'new',
//         })
//     })
//     it('should update order status', async () => {
//         const result = await store.updateOrder({
//             id: 1,
//             product_id: productId,
//             quantity: 10,
//             user_id: userId,
//             status: 'complete',
//         })
//         expect(result).toEqual({
//             id: 1,
//             product_id: productId,
//             quantity: 10,
//             user_id: userId,
//             status: 'complete',
//         })
//     })
//     it('should delete the order', async () => {
//         await store.deleteOrder(1)
//         const result = await store.getOrders()
//         expect(result).toEqual([])
//     })
// })
