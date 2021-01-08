import { Request, Response } from 'express'

import db from '../../database/database'

class CartsController {
    async index (req: Request, res: Response) {
        try {
            const carts = db.getCollection('cart')

            const result = carts.find({})

            if (result) {
                return res.json(result)
            }

            return res.json({})
        } catch (error) {
            return res.status(422).send({ status: 422, data: error.message })
        }
    }

    async checkout (req: Request, res: Response) {
        const dbProducts = db.getCollection('products')
        const dbCarts = db.getCollection('cart')

        let { cardNumber, products } = req.body

        if (cardNumber === '123') {
            products = JSON.parse(products)

            await products.forEach((item: any) => {
                dbProducts.chain().find({ id: item.id }).update(newProduct => {
                    newProduct.quantity -= item.quantity
                })
            });

            await dbCarts.insert(products)

            return res.send({ status: 200, message: 'Purchase made with sucessfully.'})
        }

        return res.status(401).send({ status: 401, message: 'Pucharse unauthorized.'})

    }
}

export default new CartsController()