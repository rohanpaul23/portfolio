import React from 'react'
import  Header from "../Header/Header"
import  Body from "../Body/Body"
import  Footer from "../Footer/Footer"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="headerPosition">
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}

export default Home
