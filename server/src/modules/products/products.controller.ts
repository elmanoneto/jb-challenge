import { Request, Response } from 'express'

import db from '../../database/database'

class ProductsController {
    async index (req: Request, res: Response) {
        try {
            const products = db.getCollection('products')

            const result = products.find({})

            if (result) {
                return res.json(result)
            }

            return res.json({})
        } catch (error) {
            return res.status(422).send({ status: 422, data: error.message })
        }
    }
}

export default new ProductsController()