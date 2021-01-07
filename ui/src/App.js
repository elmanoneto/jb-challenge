import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header'
import Content from './components/content'

function App () {
    return (
        <BrowserRouter>
            <Header />
            <Content />
        </BrowserRouter>
    )
}

export default App