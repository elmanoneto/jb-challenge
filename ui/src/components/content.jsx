import React, { Fragment } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import './content.styles.css'
import productRoutes from '../pages/products/products.routes'

function Content() {
    const content = productRoutes.map(route => <Route exact { ...route } key={Math.random()} />)

    return (
        <Fragment>
            <BrowserRouter>
                <main>
                    { content }
                </main>
            </BrowserRouter>
        </Fragment>
    )
}

export default Content