import React, { useEffect } from 'react'
import Nav from './Nav/Nav'
import Heading from './Heading/Heading'
import ReviewBar from './ReviewBar/ReviewBar'
import Sidebar from './Sidebar/Sidebar'

export default function Home() {
    return (
        <>
            
            <Heading />
            <ReviewBar />
            <Sidebar />
        </>
    )
}