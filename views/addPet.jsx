import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layouts/default'



const AddPet = (props) => {



    return (
        <DefaultLayout title="Add Pet">
            <Nav/>
{props.message ? (<h1 className='toast toastify on'>{props.message}</h1>) : null}
            <form action="/AddPet" method="post" className="cat-form" encType="multipart/form-data">
                <h2>Add Cat</h2>
                <label htmlFor="name">Name</label>
                <input name="name" type="text" id="name"/>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <label htmlFor="image">Image</label>
                <input name="image" type="file" id="image"/>
                <label htmlFor="group">Breed</label>
                <select name="breed" id="group">
                    <option value="Fluffy Cat">Fluffy Cat</option>
                    <option value="Normal Catt">Normal Cat</option>
                    <option value="Cool Cat">Cool Cat</option>
                </select>
                <button type="submit">Add Cat</button>
            </form>
        </DefaultLayout>
    )
}

module.exports = AddPet;