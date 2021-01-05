import React, { Fragment } from 'react'

import './list.styles.css'

function Item() {
    return (
        <Fragment>
            <div className="list__item">
                <p className="disponibility">10 disponíveis</p>
                <img src="https://imgcentauro-a.akamaihd.net/900x900/94047401/mountain-bike-caloi-vulcan-aro-29-freio-a-disco-mecanico-cambio-traseiro-shimano-21-marchas-img.jpg" alt=""/>
                <h4>Bike Top BMX</h4>
                <div className="buy">
                    <p className="price">R$ 1.545,99</p>
                    <button className="btn-buy">Add to cart</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Item