import Products from './products'
import Product from './product'

const routes = [
    { path: '/', component: Products },
    { path: '/products', component: Products },
    { path: '/products/:id', component: Product }
]

export default routes