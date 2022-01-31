import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'
import Pet from './components/Pet'
// import pets from '../data/pets.json'
import fetch from 'cross-fetch';


const Home = (props) => {
    

    return (
        <DefaultLayout title="Home">
            <Nav isLoggedIn={props.isLoggedIn}/>
            <main>
                <section className="cats">
                    <ul>
                        {props.pets.length > 0 ? ( 
                                
                                props.pets.map(pet => 
                                <Pet 
                                key={pet.id} 
                                name={pet.name} 
                                image={pet.image}
                                breed={pet.breed}
                                description={pet.description}
                                />)) : 
                                (<h1>no data</h1>)
                        }
                    </ul>
                </section>
            </main>
            {(props.cookiesTerms =='ok') ? (null) : (<>
    <div class="wrapper">
        <div class="notice-cookies active-cookies" id="notice-cookies">
            <img src="https://image.flaticon.com/icons/png/512/541/541732.png" alt="" class="img-cookies" />
            <h3 class="title-cookies"> Cookies </h3>
            <p class="paragraph">We use our own and third-party cookies to obtain statistical data on the navigation of our users and improve our services.</p>
            <a class="btn-cookies" href="/setCookies" id="btn-accept-cookies">Agree</a>
            <a class="link" href="/cookies.html">Cookie Notice</a>
        </div>
    </div>
    <div class="notice-cookies-background active-cookies" id="notice-cookies-background"></div></>)}
        </DefaultLayout>
    )
}

module.exports = Home;