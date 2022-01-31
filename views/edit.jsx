import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'


const Edit = ({img, name, alt, breed, description}) => {
    return (
        <DefaultLayout title="Edit Cat">
            <Nav/>
            <form action="" className="cat-form" encType="multipart/form-data">
                <h2>Edit Cat</h2>
                <label for="name">Name</label>
                <input type="text" id="name" value="Pretty Cat"/>
                <label for="description">Description</label>
                <textarea id="description">Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.</textarea>
                <label for="image">Image</label>
                <input type="file" id="image"/>
                <label for="group">Breed</label>
                <select id="group">
                    <option value="Fluffy Cat">Fluffy Cat</option>
                </select>
                <button>Edit Cat</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = Edit;