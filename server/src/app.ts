import express, { Router } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid'

import db from './database/database'
import productsRoutes from './modules/products/routes'
import cartsRoutes from './modules/cart/routes'

class App {
    public app: express.Application
    public router: Router = Router()

    constructor () {
        this.app = express()

        db.addCollection('products')
        db.addCollection('cart')
        this.createProducts()

        this.middlewares()
        this.routes()
    }

    private routes () {
        this.app.use(productsRoutes)
        this.app.use(cartsRoutes)
    }

    private createProducts () {
        const products = db.getCollection('products')

        products.insert({
            id: uuidv4(),
            name: 'Bicleta Trilha',
            quantity: 5,
            make: 'Traker',
            image: 'https://www.efacil.com.br/wcsstore/ExtendedSitesCatalogAssetStore/Imagens/1000/2209687_01.jpg',
            weight: 12,
            price: 1400,
            hoop: 26
        })

        products.insert({
            id: uuidv4(),
            name: 'Mountain Bike Caloi Velox',
            quantity: 2,
            make: 'Caloi',
            image: 'https://imgcentauro-a.akamaihd.net/900x900/94984102/mountain-bike-caloi-velox-aro-29-cambio-indexado-freios-v-brake-img.jpg',
            weight: 13,
            price: 1340,
            hoop: 29
        })
        
        products.insert({
            id: uuidv4(),
            name: 'Bicicleta Cannondale F-SI Carbon 5',
            quantity: 4,
            make: 'Cannondale',
            image: 'https://upload.bikepointsc.com.br/g/g34970_1.jpg',
            weight: 9,
            price: 7000,
            hoop: 29
        })

        products.insert({
            id: uuidv4(),
            name: 'Bicleta Spaceline Orion 21',
            quantity: 5,
            make: 'Spaceline',
            image: 'https://static.netshoes.com.br/produtos/bicicleta-aro-29-spaceline-orion-21-velocidades-freio-a-disco/74/PDS-0002-274/PDS-0002-274_zoom1.jpg?ts=1587085749&',
            weight: 14,
            price: 1398,
            hoop: 29
        })

        products.insert({
            id: uuidv4(),
            name: 'Bicicleta GT Timberline Expert',
            quantity: 1,
            make: 'Timberline',
            image: 'http://upload.bikepointsc.com.br/g/g43448_1.jpg',
            weight: 13,
            price: 3478,
            hoop: 27
        })

        products.insert({
            id: uuidv4(),
            name: 'Bicicleta KSW XLT',
            quantity: 10,
            make: 'KSW',
            image: 'https://static.netshoes.com.br/produtos/bicicleta-aro-29-ksw-xlt-21v-cambios-shimano-freio-a-disco-mecanico-com-suspensao/08/CGY-0004-108/CGY-0004-108_zoom1.jpg?ts=1587507603&',
            weight: 12,
            price: 16998,
            hoop: 29
        })
    }

    private middlewares () {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({
            extended: true
        }))
        this.app.use(morgan('dev'))
        this.app.use(cors())

        const schema = buildSchema(`
            type Product {
                id: ID
                name: String
                quantity: Int
                make: String
                image: String
                weight: Int
                price: Int
                hoop: Int
            }

            type Query {
                product(id: ID!): Product
                products: [Product]
            }
        `)

        const products = db.getCollection('products')

        const result = products.find({})

        const providers = {
            products: result
        }

        const resolvers = {
            product (request: any) {
                const { id } = request
                return products.find({ id: id })[0]
            },
            products () {
                return result
            }
        }

        this.app.use('/graphql', graphqlHTTP({
            schema,
            rootValue: resolvers,
            graphiql: true
        }))
    }

    public listen () {
        this.app.listen(4000)
    }
}

export default App