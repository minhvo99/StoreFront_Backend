import { Products } from '../../models/product'

const store = new Products()

describe('Product Model', () => {
    it('should create a product', async () => {
        const result = await store.create({
            "name":"test",
            "price":"1000",
            "description":"test"
        })
        expect(result.length).toEqual(1)
    })

    it('should update a product', async () => {
        const result = await store.update({
            "id": 1,
            "name": "iPhone 15 promax",
            "price": 1700,
            "description": "ok"
        })
        expect(result.length).toEqual(1)
    })

    it('should return a list of products', async () => {
        const result = await store.index()
        expect(result.length).toBeGreaterThan(1)
    })

    it('should return the correct product', async () => {
        const result = await store.show(1)
        expect(result).toEqual({
            "id": 1,
            "name": "iPhone 15 promax",
            "price": 1700,
            "description": "best product"
        })
    })
})
