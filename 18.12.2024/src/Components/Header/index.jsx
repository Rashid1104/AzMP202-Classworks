import React from 'react'
import "./index.css"
const Header = () => {
    return (
        <header>
            <header>
                <div className="header-part">
                    <h1 className="header-text">FoodHit</h1>
                    <nav>
                        <ul className="ul-li">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Foods</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </header>
    )
}

export default Header