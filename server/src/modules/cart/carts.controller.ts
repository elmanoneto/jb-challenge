import { Request, Response } from 'express'

import db from '../../database/database'

class CartsController {
    async checkout (req: Request, res: Response) {
        const { cardNumber } = req.body

        if (cardNumber === '123') {
            return res.send({ status: 200, message: 'Purchase made with sucessfully.'})
        }

        return res.send({ status: 401, message: 'Pucharse unauthorized.'})

    }
}

export default new CartsController()