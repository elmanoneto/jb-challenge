import React, { Fragment } from 'react'

import './list.styles.css'
import Item from './item'

function List () {
    return (
        <Fragment>
            <h2>Products List</h2>
            <section className="list">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </section>
        </Fragment>
    )
}

export default List