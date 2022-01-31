import React from 'react';
import { LocalStorage } from "node-localstorage";


const Nav = (props) => {



    return(
        <header>
        <nav>
            <ul className="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/AddBreed">Add Breed</a></li>
                <li><a href="/AddPet">Add Pet</a></li>

                {(props.isLoggedIn) ? (<li><a href="/user/logout">Logout</a></li>)
                : (<>
                <li><a href="/user/login">Login</a></li>
                <li><a href="/user/register">Register</a></li>
                </>)}
                

                
            </ul>
        </nav>
        <h1>Pet Shelter</h1>
        <form action="/search">
            <input type="text"/>
            <button type="button">Search</button>
        </form>
        </header>
    )
}

export default Nav