import React, { Fragment, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import CartStore from '../../store/store'
import './list.styles.css'
import Item from './item'

const GET_PRODUCTS = gql`
{
    products {
        id,
        name,
        quantity,
        image,
        price,
        weight,
        hoop,
        make
    }
}
`
function List () {
    const cartStore = useContext(CartStore)
    const { setProducts, getProducts } = cartStore

    const addProducts = data => {
        if (!getProducts.length) {
            setProducts(data)
        }
    }

    const { data } = useQuery(GET_PRODUCTS, { onCompleted: addProducts })

    return (
        <Fragment>
            <h2>Products List</h2>
            <section className="list">
                {getProducts.length > 0 && getProducts.map(product => {
                    return (
                        <Item key={product.id} product={product} />
                    )
                })}
            </section>
        </Fragment>
    )
}

export default observer(List)