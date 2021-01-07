import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import './content.styles.css'
import productRoutes from '../pages/products/products.routes'
import cartRoutes from '../pages/cart/cart.routes'

function Content() {
    const routes = [ ...cartRoutes, ...productRoutes ]

    const content = routes.map(route => <Route exact { ...route } key={Math.random()} />)

    return (
        <Fragment>
            <main>
                { content }
            </main>
        </Fragment>
    )
}

export default Content