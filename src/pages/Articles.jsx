import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'
import Scroller from '../components/Scroller'
import '../styles/Articles.css'

const Articles = () => {
    return (
        <>
            <Header team='default'/>

            <Scroller />

            <Footer team='default'/>
        </>
    )
}

export default Articles