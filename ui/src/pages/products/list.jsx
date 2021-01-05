import React, { Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import './list.styles.css'
import Item from './item'

function List () {

    const GET_PRODUCTS = gql`
        {
            products {
                id,
                name,
                quantity,
                image,
                price
            }
        }
    `

    const { data, loading, error } = useQuery(GET_PRODUCTS)

    const removeQuantityItem = id => {
        data.products = data.products.map(product => {
            if (product.id === id) {
                product.quantity -= 1
            }

            return product
        })
    }

    return (
        <Fragment>
            <h2>Products List</h2>
            <section className="list">
                {data && data.products.map(product => {
                    return (
                        <Item key={product.id} product={product} removeQuantityItem={removeQuantityItem} />
                    )
                })}
            </section>
        </Fragment>
    )
}

export default List