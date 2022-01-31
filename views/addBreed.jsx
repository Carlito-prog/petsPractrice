import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const AddBreed = ({img, name, alt, breed, description}) => {
    return (
        <DefaultLayout title="Add Breed">
            <Nav/>
            <form action="" method="" class="cat-form">
                <h2>Add Cat Breed</h2>
                <label for="breed-name">Breed Name</label>
                <input name="breed" type="text" id="breed-name"/>
                <button type="submit">Add Breed</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = AddBreed;