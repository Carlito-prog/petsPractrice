import React from 'react'
import DefaultLayout from './layouts/default'
import Nav from './components/Nav'
function About(props) {
    return (
        <DefaultLayout title="About Page">
            <Nav />
            About
        </DefaultLayout>
    )
}

//export default Home
module.exports = About
