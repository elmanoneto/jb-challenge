import { Router } from 'express'

import ProductsController from './products.controller'

const productsRouter: Router = Router()
const productsController = ProductsController

const ROUTER_NAME = '/products'

productsRouter.get(ROUTER_NAME, productsController.index)
productsRouter.get(`${ROUTER_NAME}/:id`, productsController.getById)

export default productsRouter