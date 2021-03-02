import React from 'react'
import Carousel from '../componants/Carousel'
import Cards from '../componants/Cards'
import States from '../componants/States'

const HomeScreen = () => {
    return (
        <>
            <Carousel/>
                <h1 className='m-4 secondary'><strong>Latest Intallations In Demand</strong></h1>
            <Cards/>
            <States/>
        </>
    )
}

export default HomeScreen
