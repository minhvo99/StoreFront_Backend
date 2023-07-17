import { Product } from '../../interfaces/product.interface'
import { Products } from '../../models/product'

const store = new Products()

describe('Product Model', () => {
    it('should create a product', async () => {
        
        const result: any = await store.create({
            id: 1,
            name: 'Test product',
            price: 100,
            description: 'Test category',
        })
        expect(result).toEqual({
            id: "3",
            name: 'Test product',
            price: 100,
            description: 'Test category'
          })
    })

    it('should update a product', async () => {
        const products = await store.index()
        const productId = products[0].id
        const result: any = await store.update({
            id: productId,
            name: 'Test product 3',
            price: 100,
            description: 'ok',
        })
        expect(result.name).toEqual('Test product 3')
    })

    it('should return a list of products', async () => {
        const result = await store.index()
        expect(result.length).toEqual(2)
    })

    it('should return the correct product', async () => {
        const products = await store.index()
        const productId = products[0].id as number
        const result = await store.show(productId)
        expect(result.name).toEqual('Test product')
    })

    it('should delete the product', async () => {
        await store.delete(1)
        const result = await store.index()

        expect(result.length).toEqual(1)
    })
})
