import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import gql from 'graphql-tag'

import './product.styles.css'

function Product() {
    const params = useParams()

    const { id } = params

    const GET_PRODUCT = gql`
        {
            product (id: "${id}") {
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

    const { data, loading, error } = useQuery(GET_PRODUCT)

    return (
        <Fragment>
            <section className="products">
                {data &&
                    <>
                        <h2>{data.product.name}</h2>
                        <img src={data.product.image} alt="" className="products__image"/>

                        <div className="products__specifications">
                            <h3>Especifcações</h3>
                            <ul>
                                <li>Preço: R${data.product.price}</li>
                                <li>Fabricante: {data.product.make}</li>
                                <li>Aro: {data.product.hoop}</li>
                                <li>Peso: {data.product.weight}kg</li>
                            </ul>
                        </div>
                    </>
                }
            </section>
        </Fragment>
    )
}

export default Product